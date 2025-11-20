import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NotificationBanner = ({ notification, onDismiss, onAction }) => {
  const getNotificationConfig = (type) => {
    const configs = {
      urgent: {
        bg: 'bg-red-50 border-red-200',
        icon: 'AlertCircle',
        iconColor: 'text-red-600',
        textColor: 'text-red-900'
      },
      update: {
        bg: 'bg-blue-50 border-blue-200',
        icon: 'Info',
        iconColor: 'text-blue-600',
        textColor: 'text-blue-900'
      },
      success: {
        bg: 'bg-emerald-50 border-emerald-200',
        icon: 'CheckCircle',
        iconColor: 'text-emerald-600',
        textColor: 'text-emerald-900'
      },
      warning: {
        bg: 'bg-amber-50 border-amber-200',
        icon: 'AlertTriangle',
        iconColor: 'text-amber-600',
        textColor: 'text-amber-900'
      }
    };
    return configs?.[type] || configs?.update;
  };

  const config = getNotificationConfig(notification?.type);

  return (
    <div className={`rounded-lg p-4 border ${config?.bg} mb-4`}>
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 ${config?.iconColor}`}>
          <Icon name={config?.icon} size={20} />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold text-sm mb-1 ${config?.textColor}`}>
            {notification?.title}
          </h4>
          <p className={`text-sm ${config?.textColor} opacity-90`}>
            {notification?.message}
          </p>
          
          {notification?.actionLabel && (
            <div className="mt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onAction(notification)}
              >
                {notification?.actionLabel}
              </Button>
            </div>
          )}
        </div>

        <button
          onClick={() => onDismiss(notification?.id)}
          className="flex-shrink-0 p-1 hover:bg-black/5 rounded transition-colors"
          aria-label="Dismiss notification"
        >
          <Icon name="X" size={16} className={config?.iconColor} />
        </button>
      </div>
    </div>
  );
};

export default NotificationBanner;