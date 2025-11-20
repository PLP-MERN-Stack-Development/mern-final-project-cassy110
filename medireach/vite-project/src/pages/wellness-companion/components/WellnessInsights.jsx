import React from 'react';
import Icon from '../../../components/AppIcon';

const WellnessInsights = ({ insights }) => {
  const getInsightColor = (type) => {
    const colors = {
      positive: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-600', iconName: 'TrendingUp' },
      warning: { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-600', iconName: 'AlertTriangle' },
      info: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', iconName: 'Info' },
      achievement: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', iconName: 'Award' }
    };
    return colors?.[type] || colors?.info;
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Wellness Insights</h2>
          <p className="text-sm text-slate-600 mt-1">AI-powered health analysis</p>
        </div>
        <Icon name="Brain" size={24} className="text-teal-600" />
      </div>
      <div className="space-y-4">
        {insights?.map((insight) => {
          const colors = getInsightColor(insight?.type);
          
          return (
            <div 
              key={insight?.id}
              className={`p-4 rounded-lg border-2 ${colors?.border} ${colors?.bg}`}
            >
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Icon name={colors?.iconName} size={20} className={colors?.icon} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-slate-900 mb-1">{insight?.title}</h3>
                  <p className="text-sm text-slate-700 mb-3">{insight?.message}</p>
                  
                  {insight?.recommendation && (
                    <div className="bg-white/60 rounded-lg p-3 mb-3">
                      <p className="text-sm font-medium text-slate-900 mb-1">Recommendation:</p>
                      <p className="text-sm text-slate-700">{insight?.recommendation}</p>
                    </div>
                  )}

                  {insight?.action && (
                    <button className={`text-sm font-medium ${colors?.icon} hover:underline flex items-center gap-1`}>
                      {insight?.action}
                      <Icon name="ArrowRight" size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WellnessInsights;