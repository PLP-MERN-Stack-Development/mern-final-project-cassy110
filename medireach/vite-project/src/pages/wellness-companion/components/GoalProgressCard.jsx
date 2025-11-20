import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GoalProgressCard = ({ goals }) => {
  const getStatusColor = (status) => {
    const colors = {
      'on-track': { bg: 'bg-emerald-50', text: 'text-emerald-700', icon: 'TrendingUp' },
      'at-risk': { bg: 'bg-amber-50', text: 'text-amber-700', icon: 'AlertCircle' },
      'completed': { bg: 'bg-blue-50', text: 'text-blue-700', icon: 'CheckCircle2' }
    };
    return colors?.[status] || colors?.['on-track'];
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Active Health Goals</h2>
        <Button variant="ghost" size="sm" iconName="Plus">
          Add Goal
        </Button>
      </div>
      <div className="space-y-4">
        {goals?.map((goal) => {
          const statusColors = getStatusColor(goal?.status);
          const daysRemaining = Math.ceil((new Date(goal.targetDate) - new Date()) / (1000 * 60 * 60 * 24));
          
          return (
            <div key={goal?.id} className="p-4 rounded-lg border border-slate-200 hover:border-teal-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-slate-900">{goal?.title}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors?.bg} ${statusColors?.text}`}>
                      {goal?.status?.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{goal?.description}</p>
                </div>
                <Icon name={statusColors?.icon} size={20} className={statusColors?.text} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Progress</span>
                  <span className="font-medium text-slate-900">{goal?.progress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-600 to-teal-500 transition-all duration-500 rounded-full"
                    style={{ width: `${goal?.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{daysRemaining} days remaining</span>
                  <span>Target: {new Date(goal.targetDate)?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoalProgressCard;