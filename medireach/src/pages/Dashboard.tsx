import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { 
  Calendar,
  Video,
  Clock,
  MapPin,
  Phone,
  FileText,
  User,
  Settings,
  LogOut,
  Bell,
  Activity,
  Plus
} from "lucide-react";

const Dashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("appointments");

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Internal Medicine",
      date: "2024-12-15",
      time: "10:00 AM",
      type: "Video Consultation",
      status: "Confirmed"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Cardiology",
      date: "2024-12-18",
      time: "2:30 PM",
      type: "Video Consultation",
      status: "Confirmed"
    },
    {
      id: 3,
      doctor: "Dr. Emily Rodriguez",
      specialty: "Family Medicine",
      date: "2024-12-20",
      time: "11:15 AM",
      type: "Follow-up",
      status: "Pending"
    }
  ];

  const pastAppointments = [
    {
      id: 4,
      doctor: "Dr. James Wilson",
      specialty: "Emergency Care",
      date: "2024-11-28",
      time: "3:00 PM",
      type: "Video Consultation",
      status: "Completed"
    },
    {
      id: 5,
      doctor: "Dr. Sarah Johnson",
      specialty: "Internal Medicine",
      date: "2024-11-15",
      time: "9:30 AM",
      type: "Video Consultation",
      status: "Completed"
    }
  ];

  const medicalRecords = [
    { id: 1, type: "Lab Results", date: "2024-11-28", doctor: "Dr. James Wilson" },
    { id: 2, type: "Prescription", date: "2024-11-15", doctor: "Dr. Sarah Johnson" },
    { id: 3, type: "Medical Report", date: "2024-10-20", doctor: "Dr. Michael Chen" }
  ];

  const handleJoinConsultation = (appointmentId: number) => {
    toast({
      title: "Joining Consultation",
      description: "Connecting you to the video call...",
    });
  };

  const handleCancelAppointment = (appointmentId: number) => {
    toast({
      title: "Appointment Cancelled",
      description: "Your appointment has been cancelled successfully.",
      variant: "destructive",
    });
  };

  const handleEmergency = () => {
    toast({
      title: "Emergency Alert Sent",
      description: "Emergency services are being notified with your GPS location.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">MediReach</h1>
                <p className="text-xs text-muted-foreground">Patient Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-emergency rounded-full"></span>
              </Button>
              <Avatar>
                <AvatarFallback className="bg-primary text-white">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback className="bg-primary text-white text-2xl">JD</AvatarFallback>
                  </Avatar>
                  <h2 className="font-semibold text-lg">John Doe</h2>
                  <p className="text-sm text-muted-foreground">Patient ID: P-12345</p>
                </div>
                
                <nav className="space-y-2">
                  <Button 
                    variant={activeTab === "appointments" ? "default" : "ghost"} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab("appointments")}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Appointments
                  </Button>
                  <Button 
                    variant={activeTab === "records" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("records")}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Medical Records
                  </Button>
                  <Button 
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </nav>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button 
                    variant="outline" 
                    className="w-full bg-emergency hover:bg-emergency/90 text-white border-0"
                    onClick={handleEmergency}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency: 911
                  </Button>
                  <Button variant="ghost" className="w-full mt-2">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {activeTab === "appointments" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold">My Appointments</h1>
                  <Button className="bg-primary hover:bg-primary-hover">
                    <Plus className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Upcoming</p>
                          <p className="text-2xl font-bold">3</p>
                        </div>
                        <Calendar className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Completed</p>
                          <p className="text-2xl font-bold">12</p>
                        </div>
                        <Activity className="h-8 w-8 text-success" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Next Visit</p>
                          <p className="text-lg font-bold">Dec 15</p>
                        </div>
                        <Clock className="h-8 w-8 text-secondary" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Tabs defaultValue="upcoming">
                  <TabsList>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                  </TabsList>

                  <TabsContent value="upcoming" className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <Card key={appointment.id} className="border-border">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-start gap-4">
                              <Avatar className="h-12 w-12">
                                <AvatarFallback className="bg-primary text-white">
                                  {appointment.doctor.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                                <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                                <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4 text-primary" />
                                    <span>{appointment.date}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4 text-primary" />
                                    <span>{appointment.time}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Video className="h-4 w-4 text-primary" />
                                    <span>{appointment.type}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Badge className={appointment.status === "Confirmed" ? "bg-success" : "bg-secondary"}>
                                {appointment.status}
                              </Badge>
                              <Button 
                                size="sm" 
                                className="bg-primary hover:bg-primary-hover"
                                onClick={() => handleJoinConsultation(appointment.id)}
                              >
                                <Video className="mr-2 h-4 w-4" />
                                Join Call
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleCancelAppointment(appointment.id)}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="past" className="space-y-4">
                    {pastAppointments.map((appointment) => (
                      <Card key={appointment.id} className="border-border">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarFallback className="bg-muted text-muted-foreground">
                                {appointment.doctor.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-semibold">{appointment.doctor}</h3>
                                  <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                                </div>
                                <Badge variant="outline">{appointment.status}</Badge>
                              </div>
                              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                                <span>{appointment.date}</span>
                                <span>•</span>
                                <span>{appointment.time}</span>
                                <span>•</span>
                                <span>{appointment.type}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {activeTab === "records" && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">Medical Records</h1>
                <div className="space-y-4">
                  {medicalRecords.map((record) => (
                    <Card key={record.id} className="border-border">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="bg-gradient-hero w-12 h-12 rounded-lg flex items-center justify-center">
                              <FileText className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{record.type}</h3>
                              <p className="text-sm text-muted-foreground">
                                {record.date} • {record.doctor}
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">Profile Settings</h1>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and contact information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <p className="text-muted-foreground">John Doe</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <p className="text-muted-foreground">john.doe@example.com</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Phone</label>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Date of Birth</label>
                        <p className="text-muted-foreground">January 15, 1990</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Blood Type</label>
                        <p className="text-muted-foreground">O+</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Allergies</label>
                        <p className="text-muted-foreground">Penicillin</p>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary-hover">Edit Profile</Button>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Emergency Contact</CardTitle>
                    <CardDescription>Contact information for emergency situations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Contact Name</label>
                        <p className="text-muted-foreground">Jane Doe</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Relationship</label>
                        <p className="text-muted-foreground">Spouse</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Phone Number</label>
                        <p className="text-muted-foreground">+1 (555) 987-6543</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">GPS Location Sharing</label>
                        <Badge className="bg-success">Enabled</Badge>
                      </div>
                    </div>
                    <Button variant="outline">Update Emergency Contact</Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
