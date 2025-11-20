import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyInfoCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const medicalInfo = [
    { label: 'Blood Type', value: 'O+', icon: 'Droplet' },
    { label: 'Allergies', value: 'Penicillin, Shellfish', icon: 'AlertTriangle' },
    { label: 'Current Medications', value: 'Lisinopril 10mg, Metformin 500mg', icon: 'Pill' },
    { label: 'Emergency Contact', value: 'Jane Doe - (555) 123-4567', icon: 'Phone' },
    { label: 'Insurance', value: 'Blue Cross Blue Shield - Policy #12345', icon: 'CreditCard' },
    { label: 'Primary Physician', value: 'Dr. Sarah Johnson - (555) 987-6543', icon: 'UserCheck' }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 p-6 shadow-medium">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Icon name="FileText" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Emergency Medical Information</h3>
            <p className="text-sm text-slate-600">Pre-populated for faster care</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName={isExpanded ? 'ChevronUp' : 'ChevronDown'}
          iconPosition="right"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </Button>
      </div>
      {isExpanded && (
        <div className="space-y-3 mt-4">
          {medicalInfo?.map((info, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={info?.icon} size={16} color="var(--color-primary)" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">{info?.label}</p>
                  <p className="text-sm font-medium text-slate-900">{info?.value}</p>
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" size="sm" fullWidth iconName="Edit" iconPosition="left" className="mt-4">
            Update Medical Information
          </Button>
        </div>
      )}
    </div>
  );
};

export default EmergencyInfoCard;