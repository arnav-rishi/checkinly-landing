-- Create enum types for room and lock status
CREATE TYPE room_type AS ENUM ('Single', 'Double', 'Suite', 'Penthouse');
CREATE TYPE room_status AS ENUM ('available', 'occupied', 'cleaning', 'maintenance');
CREATE TYPE lock_status AS ENUM ('locked', 'unlocked', 'offline');
CREATE TYPE signal_strength AS ENUM ('strong', 'good', 'weak');

-- Create hotels table
CREATE TABLE public.hotels (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  address TEXT,
  phone TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create rooms table
CREATE TABLE public.rooms (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  hotel_id UUID NOT NULL REFERENCES public.hotels(id) ON DELETE CASCADE,
  room_number TEXT NOT NULL,
  type room_type NOT NULL DEFAULT 'Single',
  status room_status NOT NULL DEFAULT 'available',
  price_per_night NUMERIC(10,2),
  max_occupancy INTEGER DEFAULT 2,
  amenities TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(hotel_id, room_number)
);

-- Create guests table
CREATE TABLE public.guests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  hotel_id UUID NOT NULL REFERENCES public.hotels(id) ON DELETE CASCADE,
  room_id UUID REFERENCES public.rooms(id) ON DELETE SET NULL,
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  document_number TEXT,
  document_type TEXT,
  check_in_date TIMESTAMP WITH TIME ZONE,
  check_out_date TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'pending',
  special_requests TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create smart_locks table
CREATE TABLE public.smart_locks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  room_id UUID NOT NULL REFERENCES public.rooms(id) ON DELETE CASCADE,
  device_id TEXT UNIQUE,
  status lock_status NOT NULL DEFAULT 'locked',
  battery_level INTEGER CHECK (battery_level >= 0 AND battery_level <= 100),
  signal_strength signal_strength DEFAULT 'good',
  last_activity TIMESTAMP WITH TIME ZONE,
  firmware_version TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.hotels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.smart_locks ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for hotels
CREATE POLICY "Users can view their own hotels" 
ON public.hotels 
FOR SELECT 
USING (auth.uid() = owner_id);

CREATE POLICY "Users can create their own hotels" 
ON public.hotels 
FOR INSERT 
WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Users can update their own hotels" 
ON public.hotels 
FOR UPDATE 
USING (auth.uid() = owner_id);

CREATE POLICY "Users can delete their own hotels" 
ON public.hotels 
FOR DELETE 
USING (auth.uid() = owner_id);

-- Create RLS policies for rooms
CREATE POLICY "Users can view rooms in their hotels" 
ON public.rooms 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM public.hotels 
  WHERE hotels.id = rooms.hotel_id 
  AND hotels.owner_id = auth.uid()
));

CREATE POLICY "Users can create rooms in their hotels" 
ON public.rooms 
FOR INSERT 
WITH CHECK (EXISTS (
  SELECT 1 FROM public.hotels 
  WHERE hotels.id = rooms.hotel_id 
  AND hotels.owner_id = auth.uid()
));

CREATE POLICY "Users can update rooms in their hotels" 
ON public.rooms 
FOR UPDATE 
USING (EXISTS (
  SELECT 1 FROM public.hotels 
  WHERE hotels.id = rooms.hotel_id 
  AND hotels.owner_id = auth.uid()
));

CREATE POLICY "Users can delete rooms in their hotels" 
ON public.rooms 
FOR DELETE 
USING (EXISTS (
  SELECT 1 FROM public.hotels 
  WHERE hotels.id = rooms.hotel_id 
  AND hotels.owner_id = auth.uid()
));

-- Create RLS policies for guests
CREATE POLICY "Users can view guests in their hotels" 
ON public.guests 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM public.hotels 
  WHERE hotels.id = guests.hotel_id 
  AND hotels.owner_id = auth.uid()
));

CREATE POLICY "Users can create guests in their hotels" 
ON public.guests 
FOR INSERT 
WITH CHECK (EXISTS (
  SELECT 1 FROM public.hotels 
  WHERE hotels.id = guests.hotel_id 
  AND hotels.owner_id = auth.uid()
));

CREATE POLICY "Users can update guests in their hotels" 
ON public.guests 
FOR UPDATE 
USING (EXISTS (
  SELECT 1 FROM public.hotels 
  WHERE hotels.id = guests.hotel_id 
  AND hotels.owner_id = auth.uid()
));

CREATE POLICY "Users can delete guests in their hotels" 
ON public.guests 
FOR DELETE 
USING (EXISTS (
  SELECT 1 FROM public.hotels 
  WHERE hotels.id = guests.hotel_id 
  AND hotels.owner_id = auth.uid()
));

-- Create RLS policies for smart_locks
CREATE POLICY "Users can view smart locks in their hotels" 
ON public.smart_locks 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM public.rooms 
  JOIN public.hotels ON hotels.id = rooms.hotel_id 
  WHERE rooms.id = smart_locks.room_id 
  AND hotels.owner_id = auth.uid()
));

CREATE POLICY "Users can create smart locks in their hotels" 
ON public.smart_locks 
FOR INSERT 
WITH CHECK (EXISTS (
  SELECT 1 FROM public.rooms 
  JOIN public.hotels ON hotels.id = rooms.hotel_id 
  WHERE rooms.id = smart_locks.room_id 
  AND hotels.owner_id = auth.uid()
));

CREATE POLICY "Users can update smart locks in their hotels" 
ON public.smart_locks 
FOR UPDATE 
USING (EXISTS (
  SELECT 1 FROM public.rooms 
  JOIN public.hotels ON hotels.id = rooms.hotel_id 
  WHERE rooms.id = smart_locks.room_id 
  AND hotels.owner_id = auth.uid()
));

CREATE POLICY "Users can delete smart locks in their hotels" 
ON public.smart_locks 
FOR DELETE 
USING (EXISTS (
  SELECT 1 FROM public.rooms 
  JOIN public.hotels ON hotels.id = rooms.hotel_id 
  WHERE rooms.id = smart_locks.room_id 
  AND hotels.owner_id = auth.uid()
));

-- Create functions for automatic timestamp updates
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_hotels_updated_at
  BEFORE UPDATE ON public.hotels
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_rooms_updated_at
  BEFORE UPDATE ON public.rooms
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_guests_updated_at
  BEFORE UPDATE ON public.guests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_smart_locks_updated_at
  BEFORE UPDATE ON public.smart_locks
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();