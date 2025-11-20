import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentEmergencyActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'consultation',
      title: 'Emergency Virtual Consultation',
      provider: 'Dr. Michael Chen',
      date: '2025-11-18',
      time: '10:30 AM',
      status: 'Completed',
      severity: 'Urgent',
      icon: 'Video',
      color: 'orange'
    },
    {
      id: 2,
      type: 'facility',
      title: 'Urgent Care Visit',
      provider: 'CityHealth Urgent Care',
      date: '2025-11-15',
      time: '3:45 PM',
      status: 'Completed',
      severity: 'Standard',
      icon: 'Building2',
      color: 'blue'
    },
    {
      id: 3,
      type: 'symptom',
      title: 'Symptom Assessment',
      provider: 'Self-Assessment Tool',
      date: '2025-11-12',
      time: '8:20 PM',
      status: 'Reviewed',
      severity: 'Standard',
      icon: 'Activity',
      color: 'green'
    }
  ];

  const colorClasses = {
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-700',
      icon: 'var(--color-warning)'
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      icon: 'var(--color-primary)'
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      icon: 'var(--color-success)'
    }
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-medium">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
            <Icon name="Clock" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Recent Emergency Activity</h3>
            <p className="text-sm text-slate-600">Your emergency care history</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {activities?.map(activity => {
          const colors = colorClasses?.[activity?.color];
          return (
            <div key={activity?.id} className="border-2 border-slate-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className={`${colors?.bg} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon name={activity?.icon} size={24} color={colors?.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-base font-bold text-slate-900">{activity?.title}</h4>
                    <span className={`${colors?.bg} ${colors?.text} px-2 py-1 rounded-md text-xs font-semibold whitespace-nowrap`}>
                      {activity?.severity}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{activity?.provider}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      <span>{activity?.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      <span>{activity?.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-green-700">{activity?.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="w-full mt-4 py-3 text-sm font-semibold text-primary hover:bg-slate-50 rounded-lg transition-colors">
        View All Emergency History
      </button>
    </div>
  );
};

export default RecentEmergencyActivity;