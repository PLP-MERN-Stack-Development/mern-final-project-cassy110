import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const MessageThread = ({ message, currentUserId }) => {
  const isCurrentUser = message?.senderId === currentUserId;
  const formatTime = (date) => {
    const now = new Date();
    const messageDate = new Date(date);
    const diffInMinutes = Math.floor((now - messageDate) / 60000);
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return messageDate?.toLocaleDateString();
  };

  const getPriorityColor = (priority) => {
    const colors = {
      urgent: 'bg-red-100 border-red-300 text-red-700',
      high: 'bg-amber-100 border-amber-300 text-amber-700',
      normal: 'bg-blue-100 border-blue-300 text-blue-700'
    };
    return colors?.[priority] || colors?.normal;
  };

  return (
    <div className={`flex gap-3 mb-4 ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="flex-shrink-0">
        <Image
          src={message?.avatar}
          alt={message?.avatarAlt}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <div className={`flex-1 max-w-2xl ${isCurrentUser ? 'items-end' : 'items-start'} flex flex-col`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-foreground">{message?.senderName}</span>
          <span className="text-xs text-muted-foreground">{message?.senderRole}</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{formatTime(message?.timestamp)}</span>
        </div>

        <div className={`rounded-lg p-4 ${isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
          {message?.priority && message?.priority !== 'normal' && (
            <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium mb-2 ${getPriorityColor(message?.priority)}`}>
              <Icon name="AlertCircle" size={12} />
              <span>{message?.priority?.toUpperCase()}</span>
            </div>
          )}
          
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message?.content}</p>

          {message?.attachment && (
            <div className="mt-3 pt-3 border-t border-border/20">
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Paperclip" size={16} />
                <span className="font-medium">{message?.attachment?.name}</span>
                <span className="text-xs opacity-70">({message?.attachment?.size})</span>
              </div>
            </div>
          )}

          {message?.carePlanUpdate && (
            <div className="mt-3 pt-3 border-t border-border/20">
              <div className="flex items-center gap-2 text-sm font-medium mb-1">
                <Icon name="FileText" size={16} />
                <span>Care Plan Update</span>
              </div>
              <p className="text-xs opacity-90">{message?.carePlanUpdate}</p>
            </div>
          )}
        </div>

        {message?.isRead && isCurrentUser && (
          <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
            <Icon name="CheckCheck" size={12} />
            <span>Read</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageThread;