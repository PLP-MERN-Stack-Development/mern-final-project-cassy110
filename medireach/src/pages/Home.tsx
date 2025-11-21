import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Video, 
  Calendar, 
  Shield, 
  Clock, 
  MapPin, 
  Phone,
  Activity,
  Users,
  CheckCircle2
} from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";

const Home = () => {
  const features = [
    {
      icon: Video,
      title: "Video Consultations",
      description: "Connect with healthcare professionals through secure HD video calls"
    },
    {
      icon: Calendar,
      title: "Easy Appointment Booking",
      description: "Schedule appointments with your preferred doctors at your convenience"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your medical information is protected with end-to-end encryption"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access healthcare services anytime, anywhere, day or night"
    },
    {
      icon: MapPin,
      title: "GPS Emergency Services",
      description: "Instant location sharing for emergency medical assistance"
    },
    {
      icon: Phone,
      title: "Emergency Hotline",
      description: "Direct connection to emergency services when you need it most"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Active Patients" },
    { icon: Activity, value: "1000+", label: "Healthcare Professionals" },
    { icon: CheckCircle2, value: "100K+", label: "Consultations Completed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Healthcare at Your{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Fingertips
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Connect with qualified healthcare professionals through secure video consultations. 
                Get the care you need, when you need it, from the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button size="lg" className="bg-primary hover:bg-primary-hover text-lg px-8">
                    Get Started
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Contact Us
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="font-bold text-2xl">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={heroImage} 
                alt="Doctor providing telemedicine consultation" 
                className="relative rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose MediReach?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience healthcare that adapts to your lifestyle with our comprehensive telemedicine platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card hover:shadow-card transition-all duration-300 border-border">
                <CardContent className="p-6">
                  <div className="bg-gradient-hero w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-hero border-0 text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Emergency Medical Assistance
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    Our GPS-enabled emergency service ensures rapid response when every second counts. 
                    Share your location instantly with emergency responders.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="bg-emergency hover:bg-emergency/90 text-white border-0"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Emergency: 911
                    </Button>
                    <Link to="/contact">
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <MapPin className="h-32 w-32 text-white/20 absolute -top-8 -right-8" />
                    <Phone className="h-48 w-48 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust MediReach for their healthcare needs
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-lg px-8">
              Create Your Account
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
