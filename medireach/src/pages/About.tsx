import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Heart, 
  Shield, 
  Users, 
  Award,
  TrendingUp 
} from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import missionImage from "@/assets/mission.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your health and comfort are at the heart of everything we do"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "We protect your medical information with industry-leading encryption"
    },
    {
      icon: Users,
      title: "Expert Professionals",
      description: "Access to board-certified doctors and healthcare specialists"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to providing the highest standard of medical care"
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "Leveraging cutting-edge technology for better healthcare delivery"
    },
    {
      icon: Target,
      title: "Accessible Healthcare",
      description: "Making quality healthcare available to everyone, anywhere"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Active Patients" },
    { number: "1,000+", label: "Healthcare Professionals" },
    { number: "100,000+", label: "Consultations Completed" },
    { number: "98%", label: "Patient Satisfaction" }
  ];

  const teamMembers = [
    { name: "Dr. Sarah Johnson", role: "Chief Medical Officer", specialty: "Internal Medicine" },
    { name: "Dr. Michael Chen", role: "Head of Cardiology", specialty: "Cardiology" },
    { name: "Dr. Emily Rodriguez", role: "Senior Physician", specialty: "Family Medicine" },
    { name: "Dr. James Wilson", role: "Emergency Medicine Lead", specialty: "Emergency Care" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About MediReach
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Transforming healthcare delivery through innovative telemedicine solutions. 
            Connecting patients with expert care, anytime, anywhere.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                At MediReach, we believe that quality healthcare should be accessible to everyone, 
                regardless of location or circumstances. Our mission is to break down barriers to 
                healthcare access by providing secure, reliable, and convenient telemedicine services.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We leverage cutting-edge technology to connect patients with board-certified healthcare 
                professionals, ensuring that expert medical advice is always within reach. Whether it's 
                a routine consultation or an urgent medical concern, we're here to help.
              </p>
              <p className="text-lg text-muted-foreground">
                Our platform combines state-of-the-art video technology, secure data management, and 
                GPS-enabled emergency services to provide comprehensive remote healthcare solutions.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={missionImage} 
                alt="Healthcare mission and innovation" 
                className="relative rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our commitment to exceptional healthcare delivery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-gradient-hero w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced healthcare professionals dedicated to your wellbeing
            </p>
          </div>
          
          <div className="mb-12">
            <img 
              src={teamPhoto} 
              alt="MediReach healthcare team" 
              className="rounded-2xl shadow-card w-full max-w-4xl mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-hero border-0 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience Better Healthcare?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of satisfied patients who have transformed their healthcare experience with MediReach
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/login">
                  <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Get Started Today
                  </button>
                </a>
                <a href="/contact">
                  <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Contact Us
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
