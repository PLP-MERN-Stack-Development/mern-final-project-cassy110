import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActionCard = ({ icon, title, description, actionText, variant, onClick, urgency }) => {
  const variantStyles = {
    critical: 'bg-gradient-to-br from-red-600 to-red-700 text-white border-red-700',
    urgent: 'bg-gradient-to-br from-orange-500 to-orange-600 text-white border-orange-600',
    standard: 'bg-white text-slate-900 border-slate-200 hover:border-primary hover:shadow-lg'
  };

  const iconBgStyles = {
    critical: 'bg-white/20',
    urgent: 'bg-white/20',
    standard: 'bg-red-50'
  };

  const iconColorStyles = {
    critical: 'white',
    urgent: 'white',
    standard: 'var(--color-error)'
  };

  return (
    <div className={`${variantStyles?.[variant]} border-2 rounded-2xl p-6 transition-all duration-300 hover:scale-105 shadow-medium`}>
      <div className="flex items-start gap-4">
        <div className={`${iconBgStyles?.[variant]} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}>
          <Icon name={icon} size={28} color={iconColorStyles?.[variant]} strokeWidth={2.5} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold">{title}</h3>
            {urgency && (
              <span className="px-2 py-1 bg-white/20 rounded-md text-xs font-semibold whitespace-nowrap">
                {urgency}
              </span>
            )}
          </div>
          <p className={`text-sm mb-4 ${variant === 'standard' ? 'text-slate-600' : 'text-white/90'}`}>
            {description}
          </p>
          <Button
            variant={variant === 'standard' ? 'default' : 'outline'}
            size="sm"
            fullWidth
            onClick={onClick}
            className={variant !== 'standard' ? 'bg-white text-slate-900 hover:bg-white/90 border-white' : ''}
          >
            {actionText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickActionCard;