import React from 'react';
import Icon from '../../../components/AppIcon';

const ActivityTimeline = ({ activities }) => {
  const getActivityIcon = (type) => {
    const icons = {
      exercise: 'Dumbbell',
      meal: 'Utensils',
      water: 'Droplet',
      sleep: 'Moon',
      meditation: 'Brain',
      medication: 'Pill',
      screening: 'Stethoscope'
    };
    return icons?.[type] || 'Activity';
  };

  const getActivityColor = (type) => {
    const colors = {
      exercise: 'bg-blue-100 text-blue-600',
      meal: 'bg-emerald-100 text-emerald-600',
      water: 'bg-cyan-100 text-cyan-600',
      sleep: 'bg-indigo-100 text-indigo-600',
      meditation: 'bg-purple-100 text-purple-600',
      medication: 'bg-red-100 text-red-600',
      screening: 'bg-teal-100 text-teal-600'
    };
    return colors?.[type] || 'bg-slate-100 text-slate-600';
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Today's Activity Timeline</h2>
        <span className="text-sm text-slate-600">{activities?.length} activities logged</span>
      </div>
      <div className="relative">
        <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-slate-200" />
        
        <div className="space-y-6">
          {activities?.map((activity, index) => (
            <div key={activity?.id} className="relative flex gap-4">
              <div className={`w-10 h-10 rounded-full ${getActivityColor(activity?.type)} flex items-center justify-center flex-shrink-0 z-10`}>
                <Icon name={getActivityIcon(activity?.type)} size={20} />
              </div>
              
              <div className="flex-1 pb-2">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-medium text-slate-900">{activity?.title}</h3>
                  <span className="text-sm text-slate-500">{activity?.time}</span>
                </div>
                <p className="text-sm text-slate-600 mb-2">{activity?.description}</p>
                
                {activity?.metrics && (
                  <div className="flex flex-wrap gap-3 text-xs text-slate-600">
                    {activity?.metrics?.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <Icon name={metric?.icon} size={14} />
                        <span>{metric?.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityTimeline;