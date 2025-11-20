import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CareTeamMember = ({ member, onMessage, onViewProfile }) => {
  const getRoleColor = (role) => {
    const colors = {
      'Primary Care': 'bg-blue-100 text-blue-700',
      'Specialist': 'bg-purple-100 text-purple-700',
      'Caregiver': 'bg-teal-100 text-teal-700',
      'Nurse': 'bg-emerald-100 text-emerald-700',
      'Therapist': 'bg-amber-100 text-amber-700'
    };
    return colors?.[role] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-card rounded-lg p-4 border border-border hover:shadow-medium transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <Image
            src={member?.avatar}
            alt={member?.avatarAlt}
            className="w-16 h-16 rounded-full object-cover"
          />
          {member?.isOnline && (
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-success rounded-full border-2 border-card"></div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-semibold text-foreground text-base mb-1">{member?.name}</h3>
              <p className="text-sm text-muted-foreground">{member?.specialty}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(member?.role)}`}>
              {member?.role}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={14} />
              <span>Joined {member?.joinedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="MessageSquare" size={14} />
              <span>{member?.messageCount} messages</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => onMessage(member)}
            >
              Message
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="User"
              iconPosition="left"
              onClick={() => onViewProfile(member)}
            >
              Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareTeamMember;