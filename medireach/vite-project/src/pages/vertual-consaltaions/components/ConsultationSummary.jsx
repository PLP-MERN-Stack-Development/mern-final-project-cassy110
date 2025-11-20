import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationSummary = ({ onClose, consultationData }) => {
  const summary = {
    provider: "Dr. Sarah Mitchell",
    specialty: "Internal Medicine",
    date: new Date()?.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    duration: "28 minutes",
    diagnosis: "Tension-type headache with possible stress-related component",
    treatmentPlan: `Based on your symptoms and medical history, I'm diagnosing tension-type headaches. These are often triggered by stress, poor posture, or muscle tension.\n\nI recommend starting with over-the-counter pain relievers and implementing stress management techniques. If symptoms persist or worsen, we'll consider additional diagnostic tests.`,
    prescriptions: [
      {
        medication: "Ibuprofen 400mg",
        dosage: "Take 1 tablet every 6-8 hours as needed",
        duration: "7 days",
        instructions: "Take with food to prevent stomach upset"
      },
      {
        medication: "Acetaminophen 500mg",
        dosage: "Take 1-2 tablets every 4-6 hours as needed",
        duration: "7 days",
        instructions: "Do not exceed 4000mg in 24 hours"
      }
    ],
    recommendations: [
      "Practice stress management techniques (meditation, deep breathing)",
      "Maintain good posture, especially during computer work",
      "Stay hydrated - drink at least 8 glasses of water daily",
      "Get adequate sleep (7-9 hours per night)",
      "Apply warm compress to neck and shoulders for 15 minutes twice daily",
      "Limit screen time and take regular breaks"
    ],
    followUp: "Schedule a follow-up appointment in 2 weeks if symptoms persist",
    labTests: [],
    referrals: []
  };

  return (
    <div className="min-h-screen bg-gradient-health-calm p-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-background rounded-2xl shadow-strong p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
                <Icon name="CheckCircle" size={32} color="var(--color-success)" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-foreground">Consultation Complete</h1>
                <p className="text-muted-foreground">Your treatment plan is ready</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close summary"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Provider</p>
              <p className="text-sm font-medium text-foreground">{summary?.provider}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Specialty</p>
              <p className="text-sm font-medium text-foreground">{summary?.specialty}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Date</p>
              <p className="text-sm font-medium text-foreground">{summary?.date}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Duration</p>
              <p className="text-sm font-medium text-foreground">{summary?.duration}</p>
            </div>
          </div>
        </div>

        {/* Diagnosis */}
        <div className="bg-background rounded-2xl shadow-strong p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Stethoscope" size={20} color="var(--color-primary)" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Diagnosis</h2>
          </div>
          <p className="text-foreground leading-relaxed">{summary?.diagnosis}</p>
        </div>

        {/* Treatment Plan */}
        <div className="bg-background rounded-2xl shadow-strong p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <Icon name="FileText" size={20} color="var(--color-secondary)" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Treatment Plan</h2>
          </div>
          <p className="text-foreground leading-relaxed whitespace-pre-line">{summary?.treatmentPlan}</p>
        </div>

        {/* Prescriptions */}
        {summary?.prescriptions?.length > 0 && (
          <div className="bg-background rounded-2xl shadow-strong p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-trust/10 flex items-center justify-center">
                <Icon name="Pill" size={20} color="var(--color-brand-trust)" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Prescriptions</h2>
            </div>
            <div className="space-y-4">
              {summary?.prescriptions?.map((prescription, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{prescription?.medication}</h3>
                    <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded">
                      {prescription?.duration}
                    </span>
                  </div>
                  <p className="text-sm text-foreground mb-2">{prescription?.dosage}</p>
                  <p className="text-xs text-muted-foreground">{prescription?.instructions}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg flex items-start gap-2">
              <Icon name="Info" size={16} color="var(--color-primary)" className="mt-0.5" />
              <p className="text-xs text-foreground">
                Prescriptions have been sent to your preferred pharmacy. You'll receive a notification when they're ready for pickup.
              </p>
            </div>
          </div>
        )}

        {/* Recommendations */}
        <div className="bg-background rounded-2xl shadow-strong p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
              <Icon name="Lightbulb" size={20} color="var(--color-warning)" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Recommendations</h2>
          </div>
          <ul className="space-y-3">
            {summary?.recommendations?.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-3">
                <Icon name="Check" size={20} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow-up */}
        <div className="bg-background rounded-2xl shadow-strong p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Icon name="Calendar" size={20} color="var(--color-accent)" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Follow-up Care</h2>
          </div>
          <p className="text-foreground mb-4">{summary?.followUp}</p>
          <Button
            variant="outline"
            iconName="Calendar"
            iconPosition="left"
          >
            Schedule Follow-up Appointment
          </Button>
        </div>

        {/* Actions */}
        <div className="bg-background rounded-2xl shadow-strong p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="default"
              iconName="Download"
              iconPosition="left"
              fullWidth
            >
              Download Summary
            </Button>
            <Button
              variant="outline"
              iconName="Share2"
              iconPosition="left"
              fullWidth
            >
              Share with Provider
            </Button>
            <Button
              variant="outline"
              iconName="MessageSquare"
              iconPosition="left"
              fullWidth
            >
              Message Provider
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationSummary;