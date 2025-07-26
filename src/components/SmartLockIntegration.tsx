
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Wifi, Shield, Smartphone, Key, Lock, CheckCircle } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface SmartLock {
  id: string;
  name: string;
  room: string;
  brand: string;
  status: 'online' | 'offline';
  battery: number;
}

const SmartLockIntegration = () => {
  const [locks, setLocks] = useState<SmartLock[]>([
    { id: '1', name: 'Room 101 Entry', room: '101', brand: 'August Pro', status: 'online', battery: 85 },
    { id: '2', name: 'Room 102 Entry', room: '102', brand: 'Yale Assure', status: 'online', battery: 92 },
    { id: '3', name: 'Room 103 Entry', room: '103', brand: 'Schlage Encode', status: 'offline', battery: 23 },
  ]);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const form = useForm();

  const supportedBrands = ['August', 'Yale', 'Schlage', 'Kwikset', 'Baldwin', 'Ultraloq'];

  const features = [
    { icon: Wifi, title: 'Remote Access', description: 'Control locks from anywhere' },
    { icon: Shield, title: 'Military-Grade Security', description: 'AES-256 encryption' },
    { icon: Smartphone, title: 'Mobile Integration', description: 'iOS & Android apps' },
    { icon: Key, title: 'Temporary Codes', description: 'Auto-expiring access codes' }
  ];

  const handleAddLock = (data: any) => {
    const newLock: SmartLock = {
      id: Date.now().toString(),
      name: `${data.room} ${data.location}`,
      room: data.room,
      brand: data.brand,
      status: 'online',
      battery: 100
    };
    setLocks([...locks, newLock]);
    setShowAddForm(false);
    form.reset();
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-foreground text-spacing">
            Smart Lock <span className="text-primary">Integration</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Connect with 50+ smart lock brands. Generate secure, temporary access codes automatically.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-lift transition-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lock Management */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-foreground">Connected Smart Locks</h3>
              <Button 
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-gradient-primary"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Lock
              </Button>
            </div>

            {/* Add Lock Form */}
            {showAddForm && (
              <Card className="mb-6 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Add New Smart Lock</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleAddLock)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="room"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Room Number</FormLabel>
                              <FormControl>
                                <Input placeholder="101" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Location</FormLabel>
                              <FormControl>
                                <Input placeholder="Main Entry" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="brand"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Brand</FormLabel>
                            <FormControl>
                              <Input placeholder="August Pro" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex space-x-3">
                        <Button type="submit" size="sm" className="bg-gradient-primary">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Add Lock
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm"
                          onClick={() => setShowAddForm(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}

            {/* Locks List */}
            <div className="space-y-4">
              {locks.map((lock) => (
                <Card key={lock.id} className="hover-lift transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Lock className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{lock.name}</h4>
                          <p className="text-sm text-muted-foreground">{lock.brand}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={lock.status === 'online' ? 'default' : 'destructive'}>
                          {lock.status}
                        </Badge>
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">{lock.battery}%</p>
                          <p className="text-xs text-muted-foreground">Battery</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Supported Brands */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Supported Brands</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {supportedBrands.map((brand, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardContent className="p-4 text-center">
                    <div className="w-16 h-16 mx-auto bg-muted rounded-lg flex items-center justify-center mb-3">
                      <span className="text-lg font-bold text-muted-foreground">{brand.slice(0, 2)}</span>
                    </div>
                    <p className="font-medium text-foreground">{brand}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 mx-auto text-primary mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Don't see your brand?
                </h4>
                <p className="text-muted-foreground mb-4">
                  We add new integrations every month. Contact us for custom integration.
                </p>
                <Button variant="outline" size="sm">
                  Request Integration
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartLockIntegration;
