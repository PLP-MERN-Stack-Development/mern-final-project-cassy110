import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PatientProfileCard = ({ patient, onViewFullProfile, onSwitchProfile }) => {
  const getAgeFromDOB = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today?.getFullYear() - birthDate?.getFullYear();
    const monthDiff = today?.getMonth() - birthDate?.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today?.getDate() < birthDate?.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="bg-card rounded-lg p-5 border border-border hover:shadow-medium transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <Image
          src={patient?.avatar}
          alt={patient?.avatarAlt}
          className="w-20 h-20 rounded-full object-cover flex-shrink-0"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-1">{patient?.name}</h3>
              <p className="text-sm text-muted-foreground">
                {getAgeFromDOB(patient?.dateOfBirth)} years • {patient?.gender}
              </p>
            </div>
            {patient?.relationship && (
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                {patient?.relationship}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={12} />
              <span>DOB: {new Date(patient.dateOfBirth)?.toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Hash" size={12} />
              <span>ID: {patient?.patientId}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-border">
        <div className="bg-muted rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="Activity" size={14} color="var(--color-primary)" />
            <span className="text-xs font-medium text-muted-foreground">Active Conditions</span>
          </div>
          <p className="text-lg font-semibold text-foreground">{patient?.activeConditions}</p>
        </div>
        
        <div className="bg-muted rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="Pill" size={14} color="var(--color-secondary)" />
            <span className="text-xs font-medium text-muted-foreground">Medications</span>
          </div>
          <p className="text-lg font-semibold text-foreground">{patient?.medications}</p>
        </div>
      </div>
      {patient?.primaryCondition && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="AlertCircle" size={14} color="var(--color-accent)" />
            <span className="text-xs font-medium text-muted-foreground">Primary Condition</span>
          </div>
          <p className="text-sm text-foreground font-medium">{patient?.primaryCondition}</p>
        </div>
      )}
      {patient?.careTeamSize && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Users" size={14} color="var(--color-brand-primary)" />
            <span className="text-xs font-medium text-muted-foreground">Care Team</span>
          </div>
          <p className="text-sm text-foreground">{patient?.careTeamSize} healthcare providers</p>
        </div>
      )}
      <div className="flex items-center gap-2">
        <Button
          variant="default"
          size="sm"
          iconName="Eye"
          iconPosition="left"
          onClick={() => onViewFullProfile(patient)}
          className="flex-1"
        >
          View Profile
        </Button>
        <Button
          variant="outline"
          size="sm"
          iconName="RefreshCw"
          iconPosition="left"
          onClick={() => onSwitchProfile(patient)}
        >
          Switch
        </Button>
      </div>
    </div>
  );
};

export default PatientProfileCard;