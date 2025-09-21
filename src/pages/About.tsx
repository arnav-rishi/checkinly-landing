import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Shield, RefreshCcw, Users, Award } from "lucide-react";
const About = () => {
  const values = [{
    icon: Target,
    title: "Guest-Centric Innovation",
    description: "Every feature we build starts with the guest experience",
    color: "text-blue-600"
  }, {
    icon: TrendingUp,
    title: "Operational Excellence",
    description: "We simplify complex processes to help hotels run smoothly",
    color: "text-emerald-600"
  }, {
    icon: Shield,
    title: "Trust & Security",
    description: "Your data and your guests' information are always protected",
    color: "text-orange-600"
  }, {
    icon: RefreshCcw,
    title: "Continuous Improvement",
    description: "We listen, learn, and evolve with the industry",
    color: "text-purple-600"
  }];
  const milestones = [{
    year: "2020",
    title: "Company Founded",
    description: "Started by hospitality veterans and tech experts"
  }, {
    year: "2021",
    title: "First 50 Hotels",
    description: "Proven product-market fit"
  }, {
    year: "2022",
    title: "Series A Funding",
    description: "Raised $10M to accelerate growth"
  }, {
    year: "2023",
    title: "Global Expansion",
    description: "Launched in 15 countries"
  }, {
    year: "2024",
    title: "500+ Hotels",
    description: "Serving properties worldwide"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-8 animate-fade-in">
              <Users className="w-4 h-4 mr-2" />
              Our Story
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 animate-fade-in">
              About Our Story
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in">
              We're revolutionizing hospitality through innovative technology that puts guest experience first.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <Card className="mb-16 overflow-hidden">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mx-0">Our Mission</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6 mx-0">
                      At Checkinly, we believe that technology should enhance human connections, not replace them. 
                      Our mission is to empower hotels with innovative solutions that streamline operations while 
                      creating more meaningful guest experiences.
                    </p>
                    
                  </div>
                  
                </div>
              </CardContent>
            </Card>

            {/* Journey Timeline */}
            

            {/* Values Grid */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-foreground text-center mb-16">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => <Card key={index} className="hover-scale border-2 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <value.icon className={`w-6 h-6 ${value.color}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>

            {/* Future Vision */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-12 text-center flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold text-foreground mb-8">Looking Forward</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                As we continue to grow, our commitment remains unchanged: to provide hospitality technology 
                that truly serves both hotels and their guests. We're excited to be part of your journey toward 
                more efficient, more profitable, and more satisfying hospitality operations.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium">
                <TrendingUp className="w-5 h-5 mr-2" />
                Join us in shaping the future of hospitality
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default About;