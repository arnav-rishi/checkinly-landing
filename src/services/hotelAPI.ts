import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";

type Hotel = Database['public']['Tables']['hotels']['Row'];
type Room = Database['public']['Tables']['rooms']['Row'];
type Guest = Database['public']['Tables']['guests']['Row'];
type SmartLock = Database['public']['Tables']['smart_locks']['Row'];

type HotelInsert = Database['public']['Tables']['hotels']['Insert'];
type RoomInsert = Database['public']['Tables']['rooms']['Insert'];
type GuestInsert = Database['public']['Tables']['guests']['Insert'];
type SmartLockInsert = Database['public']['Tables']['smart_locks']['Insert'];

type HotelUpdate = Database['public']['Tables']['hotels']['Update'];
type RoomUpdate = Database['public']['Tables']['rooms']['Update'];
type GuestUpdate = Database['public']['Tables']['guests']['Update'];
type SmartLockUpdate = Database['public']['Tables']['smart_locks']['Update'];

// Hotel operations
export const hotelAPI = {
  // Get all hotels for the current user
  async getUserHotels(): Promise<{ data: Hotel[] | null; error: any }> {
    const { data, error } = await supabase
      .from('hotels')
      .select('*')
      .order('created_at', { ascending: false });
    
    return { data, error };
  },

  // Get a specific hotel by ID
  async getHotel(hotelId: string): Promise<{ data: Hotel | null; error: any }> {
    const { data, error } = await supabase
      .from('hotels')
      .select('*')
      .eq('id', hotelId)
      .single();
    
    return { data, error };
  },

  // Create a new hotel
  async createHotel(hotel: Omit<HotelInsert, 'id' | 'owner_id' | 'created_at' | 'updated_at'>): Promise<{ data: Hotel | null; error: any }> {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) {
      return { data: null, error: { message: 'User not authenticated' } };
    }

    const { data, error } = await supabase
      .from('hotels')
      .insert({
        ...hotel,
        owner_id: user.user.id
      })
      .select()
      .single();
    
    return { data, error };
  },

  // Update a hotel
  async updateHotel(hotelId: string, updates: HotelUpdate): Promise<{ data: Hotel | null; error: any }> {
    const { data, error } = await supabase
      .from('hotels')
      .update(updates)
      .eq('id', hotelId)
      .select()
      .single();
    
    return { data, error };
  },

  // Delete a hotel
  async deleteHotel(hotelId: string): Promise<{ error: any }> {
    const { error } = await supabase
      .from('hotels')
      .delete()
      .eq('id', hotelId);
    
    return { error };
  }
};

// Room operations
export const roomAPI = {
  // Get all rooms for a hotel
  async getRoomsByHotel(hotelId: string): Promise<{ data: Room[] | null; error: any }> {
    const { data, error } = await supabase
      .from('rooms')
      .select('*')
      .eq('hotel_id', hotelId)
      .order('room_number', { ascending: true });
    
    return { data, error };
  },

  // Get a specific room
  async getRoom(roomId: string): Promise<{ data: Room | null; error: any }> {
    const { data, error } = await supabase
      .from('rooms')
      .select('*')
      .eq('id', roomId)
      .single();
    
    return { data, error };
  },

  // Create a new room
  async createRoom(room: Omit<RoomInsert, 'id' | 'created_at' | 'updated_at'>): Promise<{ data: Room | null; error: any }> {
    const { data, error } = await supabase
      .from('rooms')
      .insert(room)
      .select()
      .single();
    
    return { data, error };
  },

  // Update a room
  async updateRoom(roomId: string, updates: RoomUpdate): Promise<{ data: Room | null; error: any }> {
    const { data, error } = await supabase
      .from('rooms')
      .update(updates)
      .eq('id', roomId)
      .select()
      .single();
    
    return { data, error };
  },

  // Update room status
  async updateRoomStatus(roomId: string, status: 'available' | 'occupied' | 'cleaning' | 'maintenance'): Promise<{ data: Room | null; error: any }> {
    return this.updateRoom(roomId, { status });
  },

  // Delete a room
  async deleteRoom(roomId: string): Promise<{ error: any }> {
    const { error } = await supabase
      .from('rooms')
      .delete()
      .eq('id', roomId);
    
    return { error };
  }
};

// Guest operations
export const guestAPI = {
  // Get all guests for a hotel
  async getGuestsByHotel(hotelId: string): Promise<{ data: Guest[] | null; error: any }> {
    const { data, error } = await supabase
      .from('guests')
      .select('*')
      .eq('hotel_id', hotelId)
      .order('created_at', { ascending: false });
    
    return { data, error };
  },

  // Get guests by room
  async getGuestsByRoom(roomId: string): Promise<{ data: Guest[] | null; error: any }> {
    const { data, error } = await supabase
      .from('guests')
      .select('*')
      .eq('room_id', roomId)
      .order('created_at', { ascending: false });
    
    return { data, error };
  },

  // Get current guests (checked in)
  async getCurrentGuests(hotelId: string): Promise<{ data: Guest[] | null; error: any }> {
    const { data, error } = await supabase
      .from('guests')
      .select('*')
      .eq('hotel_id', hotelId)
      .not('check_in_date', 'is', null)
      .is('check_out_date', null)
      .order('check_in_date', { ascending: false });
    
    return { data, error };
  },

  // Create a new guest
  async createGuest(guest: Omit<GuestInsert, 'id' | 'created_at' | 'updated_at'>): Promise<{ data: Guest | null; error: any }> {
    const { data, error } = await supabase
      .from('guests')
      .insert(guest)
      .select()
      .single();
    
    return { data, error };
  },

  // Update a guest
  async updateGuest(guestId: string, updates: GuestUpdate): Promise<{ data: Guest | null; error: any }> {
    const { data, error } = await supabase
      .from('guests')
      .update(updates)
      .eq('id', guestId)
      .select()
      .single();
    
    return { data, error };
  },

  // Check in a guest
  async checkInGuest(guestId: string, roomId: string): Promise<{ data: Guest | null; error: any }> {
    return this.updateGuest(guestId, {
      room_id: roomId,
      check_in_date: new Date().toISOString(),
      status: 'checked_in'
    });
  },

  // Check out a guest
  async checkOutGuest(guestId: string): Promise<{ data: Guest | null; error: any }> {
    return this.updateGuest(guestId, {
      check_out_date: new Date().toISOString(),
      status: 'checked_out'
    });
  },

  // Delete a guest
  async deleteGuest(guestId: string): Promise<{ error: any }> {
    const { error } = await supabase
      .from('guests')
      .delete()
      .eq('id', guestId);
    
    return { error };
  }
};

// Smart lock operations
export const smartLockAPI = {
  // Get all smart locks for a hotel
  async getSmartLocksByHotel(hotelId: string): Promise<{ data: (SmartLock & { room: Room })[] | null; error: any }> {
    const { data, error } = await supabase
      .from('smart_locks')
      .select(`
        *,
        room:rooms(*)
      `)
      .eq('room.hotel_id', hotelId)
      .order('created_at', { ascending: false });
    
    return { data, error };
  },

  // Get smart lock by room
  async getSmartLockByRoom(roomId: string): Promise<{ data: SmartLock | null; error: any }> {
    const { data, error } = await supabase
      .from('smart_locks')
      .select('*')
      .eq('room_id', roomId)
      .single();
    
    return { data, error };
  },

  // Create a new smart lock
  async createSmartLock(smartLock: Omit<SmartLockInsert, 'id' | 'created_at' | 'updated_at'>): Promise<{ data: SmartLock | null; error: any }> {
    const { data, error } = await supabase
      .from('smart_locks')
      .insert(smartLock)
      .select()
      .single();
    
    return { data, error };
  },

  // Update smart lock status
  async updateLockStatus(lockId: string, status: 'locked' | 'unlocked' | 'offline'): Promise<{ data: SmartLock | null; error: any }> {
    const { data, error } = await supabase
      .from('smart_locks')
      .update({ 
        status,
        last_activity: new Date().toISOString()
      })
      .eq('id', lockId)
      .select()
      .single();
    
    return { data, error };
  },

  // Update battery level
  async updateBatteryLevel(lockId: string, batteryLevel: number): Promise<{ data: SmartLock | null; error: any }> {
    const { data, error } = await supabase
      .from('smart_locks')
      .update({ battery_level: batteryLevel })
      .eq('id', lockId)
      .select()
      .single();
    
    return { data, error };
  },

  // Delete a smart lock
  async deleteSmartLock(lockId: string): Promise<{ error: any }> {
    const { error } = await supabase
      .from('smart_locks')
      .delete()
      .eq('id', lockId);
    
    return { error };
  }
};

// Dashboard analytics
export const dashboardAPI = {
  // Get dashboard overview for a hotel
  async getDashboardOverview(hotelId: string) {
    const [hotelsResult, roomsResult, guestsResult, locksResult] = await Promise.all([
      hotelAPI.getHotel(hotelId),
      roomAPI.getRoomsByHotel(hotelId),
      guestAPI.getCurrentGuests(hotelId),
      smartLockAPI.getSmartLocksByHotel(hotelId)
    ]);

    if (hotelsResult.error || roomsResult.error || guestsResult.error || locksResult.error) {
      return {
        data: null,
        error: hotelsResult.error || roomsResult.error || guestsResult.error || locksResult.error
      };
    }

    const rooms = roomsResult.data || [];
    const guests = guestsResult.data || [];
    const locks = locksResult.data || [];

    // Calculate occupancy rate
    const occupiedRooms = rooms.filter(room => room.status === 'occupied').length;
    const totalRooms = rooms.length;
    const occupancyRate = totalRooms > 0 ? (occupiedRooms / totalRooms) * 100 : 0;

    // Calculate revenue (simplified - based on occupied rooms)
    const totalRevenue = rooms
      .filter(room => room.status === 'occupied')
      .reduce((sum, room) => sum + (room.price_per_night || 0), 0);

    return {
      data: {
        hotel: hotelsResult.data,
        totalRooms,
        occupiedRooms,
        availableRooms: rooms.filter(room => room.status === 'available').length,
        cleaningRooms: rooms.filter(room => room.status === 'cleaning').length,
        maintenanceRooms: rooms.filter(room => room.status === 'maintenance').length,
        occupancyRate: Math.round(occupancyRate),
        totalGuests: guests.length,
        totalRevenue,
        smartLocks: locks.length,
        lockStatuses: {
          locked: locks.filter(lock => lock.status === 'locked').length,
          unlocked: locks.filter(lock => lock.status === 'unlocked').length,
          offline: locks.filter(lock => lock.status === 'offline').length
        }
      },
      error: null
    };
  }
};