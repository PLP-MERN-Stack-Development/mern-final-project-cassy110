import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const HealthMetricsCard = ({ metrics }) => {
  const getMetricColor = (category) => {
    const colors = {
      exercise: { bg: 'bg-blue-50', icon: 'text-blue-600', progress: 'bg-blue-600' },
      nutrition: { bg: 'bg-emerald-50', icon: 'text-emerald-600', progress: 'bg-emerald-600' },
      sleep: { bg: 'bg-purple-50', icon: 'text-purple-600', progress: 'bg-purple-600' },
      hydration: { bg: 'bg-cyan-50', icon: 'text-cyan-600', progress: 'bg-cyan-600' },
      mindfulness: { bg: 'bg-amber-50', icon: 'text-amber-600', progress: 'bg-amber-600' }
    };
    return colors?.[category] || colors?.exercise;
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Today's Health Metrics</h2>
        <Button variant="ghost" size="sm" iconName="RefreshCw">
          Sync
        </Button>
      </div>
      <div className="space-y-4">
        {metrics?.map((metric) => {
          const colors = getMetricColor(metric?.category);
          const percentage = (metric?.current / metric?.goal) * 100;
          
          return (
            <div key={metric?.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${colors?.bg} flex items-center justify-center`}>
                    <Icon name={metric?.icon} size={20} className={colors?.icon} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{metric?.name}</p>
                    <p className="text-sm text-slate-600">{metric?.current} / {metric?.goal} {metric?.unit}</p>
                  </div>
                </div>
                <span className={`text-sm font-medium ${percentage >= 100 ? 'text-emerald-600' : 'text-slate-600'}`}>
                  {Math.round(percentage)}%
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${colors?.progress} transition-all duration-500 rounded-full`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HealthMetricsCard;