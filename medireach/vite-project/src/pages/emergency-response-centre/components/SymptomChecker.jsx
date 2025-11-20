import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [severity, setSeverity] = useState(null);

  const symptoms = [
    { id: 'chest-pain', label: 'Chest Pain or Pressure', critical: true },
    { id: 'breathing', label: 'Difficulty Breathing', critical: true },
    { id: 'consciousness', label: 'Loss of Consciousness', critical: true },
    { id: 'bleeding', label: 'Severe Bleeding', critical: true },
    { id: 'fever', label: 'High Fever (>103°F)', critical: false },
    { id: 'headache', label: 'Severe Headache', critical: false },
    { id: 'abdominal', label: 'Severe Abdominal Pain', critical: false },
    { id: 'injury', label: 'Serious Injury', critical: false }
  ];

  const handleSymptomToggle = (symptomId) => {
    setSelectedSymptoms(prev => 
      prev?.includes(symptomId) 
        ? prev?.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const assessSeverity = () => {
    const criticalSelected = selectedSymptoms?.some(id => 
      symptoms?.find(s => s?.id === id)?.critical
    );
    
    if (criticalSelected) {
      setSeverity('critical');
    } else if (selectedSymptoms?.length >= 2) {
      setSeverity('urgent');
    } else if (selectedSymptoms?.length > 0) {
      setSeverity('standard');
    } else {
      setSeverity(null);
    }
  };

  const getSeverityMessage = () => {
    if (!severity) return null;

    const messages = {
      critical: {
        icon: 'AlertTriangle',
        color: 'text-red-600',
        bg: 'bg-red-50',
        border: 'border-red-200',
        title: 'Call 911 Immediately',
        description: 'Your symptoms indicate a potential medical emergency. Please call emergency services or go to the nearest emergency room immediately.'
      },
      urgent: {
        icon: 'AlertCircle',
        color: 'text-orange-600',
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        title: 'Seek Urgent Care',
        description: 'Your symptoms require prompt medical attention. Please visit an urgent care facility or connect with an emergency provider within the next few hours.'
      },
      standard: {
        icon: 'Info',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        title: 'Schedule Consultation',
        description: 'Your symptoms should be evaluated by a healthcare provider. Consider scheduling a virtual consultation or visiting your primary care physician.'
      }
    };

    const message = messages?.[severity];

    return (
      <div className={`${message?.bg} ${message?.border} border-2 rounded-xl p-6 mt-6`}>
        <div className="flex items-start gap-4">
          <div className={`${message?.color} w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0`}>
            <Icon name={message?.icon} size={24} strokeWidth={2.5} />
          </div>
          <div className="flex-1">
            <h4 className={`${message?.color} text-lg font-bold mb-2`}>{message?.title}</h4>
            <p className="text-slate-700 text-sm mb-4">{message?.description}</p>
            {severity === 'critical' && (
              <Button variant="destructive" size="lg" fullWidth iconName="Phone" iconPosition="left">
                Call 911 Now
              </Button>
            )}
            {severity === 'urgent' && (
              <Button variant="warning" size="lg" fullWidth iconName="MapPin" iconPosition="left">
                Find Nearest Urgent Care
              </Button>
            )}
            {severity === 'standard' && (
              <Button variant="default" size="lg" fullWidth iconName="Video" iconPosition="left">
                Book Virtual Consultation
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-medium">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <Icon name="Stethoscope" size={20} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Symptom Severity Checker</h3>
          <p className="text-sm text-slate-600">Select your symptoms to determine care urgency</p>
        </div>
      </div>
      <div className="space-y-3 mb-6">
        {symptoms?.map(symptom => (
          <div key={symptom?.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
            <Checkbox
              checked={selectedSymptoms?.includes(symptom?.id)}
              onChange={() => handleSymptomToggle(symptom?.id)}
            />
            <label className="flex-1 text-sm font-medium text-slate-700 cursor-pointer">
              {symptom?.label}
              {symptom?.critical && (
                <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-md font-semibold">
                  Critical
                </span>
              )}
            </label>
          </div>
        ))}
      </div>
      <Button
        variant="default"
        size="lg"
        fullWidth
        onClick={assessSeverity}
        disabled={selectedSymptoms?.length === 0}
        iconName="Activity"
        iconPosition="left"
      >
        Assess Severity
      </Button>
      {getSeverityMessage()}
    </div>
  );
};

export default SymptomChecker;