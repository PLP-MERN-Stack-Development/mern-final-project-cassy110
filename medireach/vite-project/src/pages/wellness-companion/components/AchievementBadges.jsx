import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadges = ({ achievements }) => {
  const getBadgeGradient = (tier) => {
    const gradients = {
      bronze: 'from-amber-600 to-amber-700',
      silver: 'from-slate-400 to-slate-500',
      gold: 'from-yellow-500 to-yellow-600',
      platinum: 'from-purple-500 to-purple-600'
    };
    return gradients?.[tier] || gradients?.bronze;
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Achievement Badges</h2>
          <p className="text-sm text-slate-600 mt-1">Celebrate your wellness milestones</p>
        </div>
        <Icon name="Award" size={24} className="text-teal-600" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {achievements?.map((achievement) => (
          <div 
            key={achievement?.id}
            className={`relative p-4 rounded-lg border-2 transition-all ${
              achievement?.unlocked 
                ? 'border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-50 hover:shadow-md' 
                : 'border-slate-200 bg-slate-50 opacity-60'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getBadgeGradient(achievement?.tier)} flex items-center justify-center mb-3 ${!achievement?.unlocked && 'grayscale'}`}>
                <Icon name={achievement?.icon} size={28} color="white" />
              </div>
              <h3 className="font-medium text-slate-900 text-sm mb-1">{achievement?.name}</h3>
              <p className="text-xs text-slate-600">{achievement?.description}</p>
              {achievement?.unlocked && (
                <p className="text-xs text-teal-600 font-medium mt-2">
                  Unlocked {new Date(achievement.unlockedDate)?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </p>
              )}
            </div>
            {!achievement?.unlocked && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-lg">
                <Icon name="Lock" size={20} className="text-slate-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementBadges;