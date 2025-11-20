import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const WaitingRoom = ({ onJoinConsultation, estimatedWaitTime = 5 }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [waitTime, setWaitTime] = useState(estimatedWaitTime);
  const [formData, setFormData] = useState({
    chiefComplaint: '',
    symptoms: [],
    duration: '',
    severity: '',
    medications: '',
    allergies: '',
    consentGiven: false
  });

  const symptoms = [
    "Headache",
    "Fever",
    "Cough",
    "Fatigue",
    "Nausea",
    "Dizziness",
    "Chest Pain",
    "Shortness of Breath"
  ];

  useEffect(() => {
    if (currentStep === 3) {
      const timer = setInterval(() => {
        setWaitTime(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 60000);
      return () => clearInterval(timer);
    }
  }, [currentStep]);

  const handleSymptomToggle = (symptom) => {
    setFormData(prev => ({
      ...prev,
      symptoms: prev?.symptoms?.includes(symptom)
        ? prev?.symptoms?.filter(s => s !== symptom)
        : [...prev?.symptoms, symptom]
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-health-calm flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3]?.map((step) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    currentStep >= step
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {currentStep > step ? (
                      <Icon name="Check" size={24} />
                    ) : (
                      step
                    )}
                  </div>
                  <span className="text-xs mt-2 text-muted-foreground">
                    {step === 1 ? 'Health Info' : step === 2 ? 'Consent' : 'Waiting'}
                  </span>
                </div>
                {step < 3 && (
                  <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-300 ${
                    currentStep > step ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-background rounded-2xl shadow-strong p-8">
          {/* Step 1: Health Questionnaire */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">Pre-Consultation Health Questionnaire</h2>
                <p className="text-muted-foreground">Help us understand your health concerns better</p>
              </div>

              <Input
                label="Chief Complaint"
                type="text"
                placeholder="What brings you here today?"
                value={formData?.chiefComplaint}
                onChange={(e) => setFormData({ ...formData, chiefComplaint: e?.target?.value })}
                required
              />

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Current Symptoms <span className="text-error">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {symptoms?.map((symptom) => (
                    <Checkbox
                      key={symptom}
                      label={symptom}
                      checked={formData?.symptoms?.includes(symptom)}
                      onChange={() => handleSymptomToggle(symptom)}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Duration"
                  type="text"
                  placeholder="e.g., 3 days"
                  value={formData?.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e?.target?.value })}
                />
                <Input
                  label="Severity (1-10)"
                  type="number"
                  placeholder="Rate your pain"
                  min="1"
                  max="10"
                  value={formData?.severity}
                  onChange={(e) => setFormData({ ...formData, severity: e?.target?.value })}
                />
              </div>

              <Input
                label="Current Medications"
                type="text"
                placeholder="List any medications you're taking"
                value={formData?.medications}
                onChange={(e) => setFormData({ ...formData, medications: e?.target?.value })}
              />

              <Input
                label="Known Allergies"
                type="text"
                placeholder="List any allergies"
                value={formData?.allergies}
                onChange={(e) => setFormData({ ...formData, allergies: e?.target?.value })}
              />

              <div className="flex justify-end gap-3 pt-4">
                <Button
                  variant="default"
                  onClick={handleNext}
                  iconName="ArrowRight"
                  iconPosition="right"
                  disabled={!formData?.chiefComplaint || formData?.symptoms?.length === 0}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Consent */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">Telehealth Consent</h2>
                <p className="text-muted-foreground">Please review and accept the terms</p>
              </div>

              <div className="bg-muted rounded-lg p-6 max-h-96 overflow-y-auto space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Understanding Telehealth Services</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Telehealth involves the use of electronic communications to enable healthcare providers at different locations to share individual patient medical information for the purpose of improving patient care. The information may be used for diagnosis, therapy, follow-up and/or education.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Privacy & Security</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All consultations are conducted through HIPAA-compliant, end-to-end encrypted video conferencing. Your medical information is protected and will only be shared with authorized healthcare providers involved in your care.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Limitations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    While telehealth provides convenient access to healthcare, it has limitations. Physical examinations cannot be performed, and certain diagnostic tests require in-person visits. In case of emergency, please call 911 or visit your nearest emergency room.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Your Rights</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You have the right to withhold or withdraw consent at any time without affecting your right to future care or treatment. You have the right to request a copy of your medical records and to inspect all information obtained during the telehealth consultation.
                  </p>
                </div>
              </div>

              <Checkbox
                label="I have read and agree to the telehealth consent terms"
                description="By checking this box, you consent to receive healthcare services via telehealth"
                checked={formData?.consentGiven}
                onChange={(e) => setFormData({ ...formData, consentGiven: e?.target?.checked })}
                required
              />

              <div className="flex justify-between gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  iconName="ArrowLeft"
                  iconPosition="left"
                >
                  Back
                </Button>
                <Button
                  variant="default"
                  onClick={handleNext}
                  iconName="ArrowRight"
                  iconPosition="right"
                  disabled={!formData?.consentGiven}
                >
                  Enter Waiting Room
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Waiting Room */}
          {currentStep === 3 && (
            <div className="text-center space-y-6 py-8">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto animate-pulse">
                <Icon name="Clock" size={48} color="var(--color-primary)" />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">You're in the Waiting Room</h2>
                <p className="text-muted-foreground">Dr. Sarah Mitchell will join shortly</p>
              </div>

              <div className="bg-gradient-health-calm rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">{waitTime} min</div>
                <p className="text-sm text-muted-foreground">Estimated wait time</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                  <span className="text-sm text-foreground">Camera and microphone ready</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                  <span className="text-sm text-foreground">Connection quality: Excellent</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                  <span className="text-sm text-foreground">Health questionnaire submitted</span>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={onJoinConsultation}
                  iconName="Video"
                  iconPosition="left"
                  fullWidth
                >
                  Join Consultation Now
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Having technical issues? <button className="text-primary hover:underline">Contact Support</button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitingRoom;