import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PersonalizedRecommendations = ({ recommendations }) => {
  const getCategoryColor = (category) => {
    const colors = {
      nutrition: { bg: 'bg-emerald-50', icon: 'text-emerald-600' },
      exercise: { bg: 'bg-blue-50', icon: 'text-blue-600' },
      mental: { bg: 'bg-purple-50', icon: 'text-purple-600' },
      sleep: { bg: 'bg-indigo-50', icon: 'text-indigo-600' },
      lifestyle: { bg: 'bg-amber-50', icon: 'text-amber-600' }
    };
    return colors?.[category] || colors?.lifestyle;
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Personalized Recommendations</h2>
          <p className="text-sm text-slate-600 mt-1">Based on your health data and goals</p>
        </div>
        <Icon name="Sparkles" size={24} className="text-teal-600" />
      </div>
      <div className="space-y-4">
        {recommendations?.map((rec) => {
          const colors = getCategoryColor(rec?.category);
          
          return (
            <div 
              key={rec?.id}
              className="p-4 rounded-lg border border-slate-200 hover:border-teal-300 transition-all hover:shadow-sm"
            >
              <div className="flex gap-4">
                {rec?.image && (
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg overflow-hidden">
                      <Image 
                        src={rec?.image} 
                        alt={rec?.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg ${colors?.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon name={rec?.icon} size={20} className={colors?.icon} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-slate-900">{rec?.title}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors?.bg} ${colors?.icon}`}>
                          {rec?.category}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{rec?.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3 ml-[52px]">
                    <div className="flex items-center gap-1">
                      <Icon name="Target" size={16} />
                      <span>{rec?.impact}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{rec?.duration}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 ml-[52px]">
                    <Button variant="default" size="sm" iconName="Plus" iconPosition="left">
                      Add to Plan
                    </Button>
                    <Button variant="ghost" size="sm" iconName="Info" iconPosition="left">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;