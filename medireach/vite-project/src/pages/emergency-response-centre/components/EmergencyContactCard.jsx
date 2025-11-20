import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyContactCard = ({ type, name, specialty, availability, phone, location, distance, responseTime }) => {
  return (
    <div className="bg-white rounded-xl border-2 border-slate-200 p-5 hover:border-primary hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name={type === 'provider' ? 'UserCheck' : 'Building2'} size={24} color="white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-bold text-slate-900 mb-1">{name}</h4>
            <p className="text-sm text-slate-600 mb-2">{specialty}</p>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${availability === 'Available Now' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
              <span className={`text-xs font-semibold ${availability === 'Available Now' ? 'text-green-700' : 'text-orange-700'}`}>
                {availability}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Icon name="MapPin" size={16} color="var(--color-muted-foreground)" />
          <span>{location}</span>
          <span className="px-2 py-0.5 bg-slate-100 rounded-md text-xs font-medium">{distance}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Icon name="Clock" size={16} color="var(--color-muted-foreground)" />
          <span>Response Time: {responseTime}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="default" size="sm" fullWidth iconName="Phone" iconPosition="left">
          Call {phone}
        </Button>
        <Button variant="outline" size="sm" iconName="Navigation" iconPosition="left">
          Directions
        </Button>
      </div>
    </div>
  );
};

export default EmergencyContactCard;