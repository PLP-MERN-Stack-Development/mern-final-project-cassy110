import React from 'react';
import Icon from '../../../components/AppIcon';

const EmergencyProtocolsSection = () => {
  const protocols = [
    {
      id: 1,
      title: 'Cardiac Emergency',
      icon: 'Heart',
      color: 'red',
      steps: [
        'Call 911 immediately',
        'Have patient sit or lie down',
        'Loosen tight clothing',
        'If trained, perform CPR if needed',
        'Stay with patient until help arrives'
      ]
    },
    {
      id: 2,
      title: 'Severe Bleeding',
      icon: 'Droplet',
      color: 'orange',
      steps: [
        'Apply direct pressure to wound',
        'Elevate injured area above heart',
        'Use clean cloth or bandage',
        'Do not remove embedded objects',
        'Call 911 if bleeding persists'
      ]
    },
    {
      id: 3,
      title: 'Breathing Difficulty',
      icon: 'Wind',
      color: 'blue',
      steps: [
        'Help patient sit upright',
        'Loosen restrictive clothing',
        'Encourage slow, deep breaths',
        'Use prescribed inhaler if available',
        'Call 911 if condition worsens'
      ]
    },
    {
      id: 4,
      title: 'Allergic Reaction',
      icon: 'AlertTriangle',
      color: 'amber',
      steps: [
        'Use EpiPen if prescribed',
        'Call 911 immediately',
        'Have patient lie down',
        'Monitor breathing and pulse',
        'Be prepared to perform CPR'
      ]
    }
  ];

  const colorClasses = {
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      iconBg: 'bg-red-600',
      text: 'text-red-700'
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      iconBg: 'bg-orange-600',
      text: 'text-orange-700'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      iconBg: 'bg-blue-600',
      text: 'text-blue-700'
    },
    amber: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      iconBg: 'bg-amber-600',
      text: 'text-amber-700'
    }
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-medium">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-primary rounded-lg flex items-center justify-center">
          <Icon name="BookOpen" size={20} color="white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Emergency Response Protocols</h3>
          <p className="text-sm text-slate-600">Quick reference guides for common emergencies</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {protocols?.map(protocol => {
          const colors = colorClasses?.[protocol?.color];
          return (
            <div key={protocol?.id} className={`${colors?.bg} ${colors?.border} border-2 rounded-xl p-5`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`${colors?.iconBg} w-10 h-10 rounded-lg flex items-center justify-center`}>
                  <Icon name={protocol?.icon} size={20} color="white" />
                </div>
                <h4 className={`${colors?.text} text-lg font-bold`}>{protocol?.title}</h4>
              </div>
              <ol className="space-y-2">
                {protocol?.steps?.map((step, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className={`${colors?.text} font-bold flex-shrink-0`}>{index + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
      <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
        <div className="flex items-start gap-3">
          <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-700">
            <span className="font-semibold">Important:</span> These protocols are for reference only. Always call 911 for life-threatening emergencies. If you're unsure about the severity, err on the side of caution and seek immediate medical attention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyProtocolsSection;