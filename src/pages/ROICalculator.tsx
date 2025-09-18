import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, DollarSign, Clock, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const ROICalculator = () => {
  const [values, setValues] = useState({
    rooms: 100,
    avgRate: 150,
    occupancy: 75,
    checkInTime: 15,
    staffCost: 25
  });

  const [results, setResults] = useState({
    annualRevenue: 0,
    timeSaved: 0,
    costSavings: 0,
    roi: 0
  });

  const calculateROI = () => {
    const annualRevenue = values.rooms * values.avgRate * (values.occupancy / 100) * 365;
    const timeSavedPerYear = (values.checkInTime * 0.3) * values.rooms * (values.occupancy / 100) * 365; // 60% time reduction
    const costSavings = (timeSavedPerYear / 60) * values.staffCost; // Convert minutes to hours
    const checkinlyAnnualCost = values.rooms * 70 * 12; // $2 per room per month
    const roi = ((costSavings - checkinlyAnnualCost) / checkinlyAnnualCost) * 100;

    setResults({
      annualRevenue,
      timeSaved: timeSavedPerYear,
      costSavings,
      roi
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setValues(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ChatWidget />
      
      <main className="section-padding pt-32">
        <div className="container-max">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-elegant">
                <Calculator className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              ROI Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Calculate your return on investment with Checkinly's automated check-in solution
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <Card className="shadow-elegant border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-primary" />
                  Hotel Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="rooms">Number of Rooms</Label>
                    <Input
                      id="rooms"
                      type="number"
                      value={values.rooms}
                      onChange={(e) => handleInputChange('rooms', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="avgRate">Average Room Rate ($)</Label>
                    <Input
                      id="avgRate"
                      type="number"
                      value={values.avgRate}
                      onChange={(e) => handleInputChange('avgRate', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="occupancy">Occupancy Rate (%)</Label>
                    <Input
                      id="occupancy"
                      type="number"
                      value={values.occupancy}
                      onChange={(e) => handleInputChange('occupancy', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkInTime">Check-in Time (minutes)</Label>
                    <Input
                      id="checkInTime"
                      type="number"
                      value={values.checkInTime}
                      onChange={(e) => handleInputChange('checkInTime', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="staffCost">Staff Hourly Cost ($)</Label>
                    <Input
                      id="staffCost"
                      type="number"
                      value={values.staffCost}
                      onChange={(e) => handleInputChange('staffCost', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={calculateROI}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-bold rounded-large shadow-elegant hover-lift"
                >
                  Calculate ROI
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-elegant border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Your ROI Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Annual Revenue</span>
                      <span className="text-2xl font-bold text-primary">
                        ${results.annualRevenue.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Time Saved (hours/year)</span>
                      <span className="text-2xl font-bold text-primary">
                        {Math.round(results.timeSaved / 60).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Annual Cost Savings</span>
                      <span className="text-2xl font-bold text-primary">
                        ${Math.round(results.costSavings).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-primary rounded-lg text-center">
                    <div className="text-primary-foreground">
                      <div className="text-sm mb-2">Return on Investment</div>
                      <div className="text-4xl font-bold">
                        {Math.round(results.roi)}%
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground text-center">
                    Based on industry averages and Checkinly performance data
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ROICalculator;