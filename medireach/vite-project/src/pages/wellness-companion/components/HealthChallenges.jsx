import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HealthChallenges = ({ challenges }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Active Challenges</h2>
          <p className="text-sm text-slate-600 mt-1">Join community wellness challenges</p>
        </div>
        <Button variant="outline" size="sm" iconName="Search">
          Browse All
        </Button>
      </div>
      <div className="space-y-4">
        {challenges?.map((challenge) => {
          const daysLeft = Math.ceil((new Date(challenge.endDate) - new Date()) / (1000 * 60 * 60 * 24));
          
          return (
            <div key={challenge?.id} className="p-4 rounded-lg border border-slate-200 hover:border-teal-300 transition-all hover:shadow-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <Image 
                      src={challenge?.image} 
                      alt={challenge?.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-900 mb-1">{challenge?.title}</h3>
                      <p className="text-sm text-slate-600">{challenge?.description}</p>
                    </div>
                    {challenge?.joined && (
                      <span className="ml-2 px-2 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full flex-shrink-0">
                        Joined
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={16} />
                      <span>{challenge?.participants?.toLocaleString()} participants</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      <span>{daysLeft} days left</span>
                    </div>
                  </div>

                  {challenge?.joined ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Your progress</span>
                        <span className="font-medium text-slate-900">{challenge?.userProgress}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-teal-600 to-teal-500 transition-all duration-500 rounded-full"
                          style={{ width: `${challenge?.userProgress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <Button variant="outline" size="sm" fullWidth iconName="Plus" iconPosition="left">
                      Join Challenge
                    </Button>
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

export default HealthChallenges;