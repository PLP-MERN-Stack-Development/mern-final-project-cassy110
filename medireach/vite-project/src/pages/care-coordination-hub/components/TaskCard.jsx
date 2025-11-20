import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const TaskCard = ({ task, onToggleComplete, onAssign, onViewDetails }) => {
  const getPriorityConfig = (priority) => {
    const configs = {
      urgent: { color: 'text-red-600', bg: 'bg-red-100', icon: 'AlertCircle' },
      high: { color: 'text-amber-600', bg: 'bg-amber-100', icon: 'AlertTriangle' },
      medium: { color: 'text-blue-600', bg: 'bg-blue-100', icon: 'Info' },
      low: { color: 'text-gray-600', bg: 'bg-gray-100', icon: 'Minus' }
    };
    return configs?.[priority] || configs?.medium;
  };

  const formatDueDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.ceil((date - now) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { text: 'Overdue', color: 'text-red-600' };
    if (diffDays === 0) return { text: 'Due today', color: 'text-amber-600' };
    if (diffDays === 1) return { text: 'Due tomorrow', color: 'text-amber-600' };
    return { text: `Due in ${diffDays} days`, color: 'text-muted-foreground' };
  };

  const priorityConfig = getPriorityConfig(task?.priority);
  const dueDate = formatDueDate(task?.dueDate);

  return (
    <div className={`bg-card rounded-lg p-4 border border-border hover:shadow-medium transition-all duration-300 ${task?.isCompleted ? 'opacity-60' : ''}`}>
      <div className="flex items-start gap-3">
        <div className="pt-1">
          <Checkbox
            checked={task?.isCompleted}
            onChange={(e) => onToggleComplete(task?.id, e?.target?.checked)}
            size="default"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className={`font-semibold text-foreground text-base ${task?.isCompleted ? 'line-through' : ''}`}>
              {task?.title}
            </h3>
            <div className={`flex items-center gap-1 px-2 py-1 rounded ${priorityConfig?.bg} flex-shrink-0`}>
              <Icon name={priorityConfig?.icon} size={12} className={priorityConfig?.color} />
              <span className={`text-xs font-medium ${priorityConfig?.color}`}>
                {task?.priority?.toUpperCase()}
              </span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-3">{task?.description}</p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Icon name="User" size={12} />
              <span>Assigned to {task?.assignedTo}</span>
            </div>
            <div className={`flex items-center gap-1 ${dueDate?.color}`}>
              <Icon name="Clock" size={12} />
              <span>{dueDate?.text}</span>
            </div>
            {task?.category && (
              <div className="flex items-center gap-1">
                <Icon name="Tag" size={12} />
                <span>{task?.category}</span>
              </div>
            )}
          </div>

          {task?.subtasks && task?.subtasks?.length > 0 && (
            <div className="mb-3 pb-3 border-b border-border">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="ListChecks" size={14} color="var(--color-muted-foreground)" />
                <span className="text-xs font-medium text-muted-foreground">
                  Subtasks ({task?.subtasks?.filter(st => st?.completed)?.length}/{task?.subtasks?.length})
                </span>
              </div>
              <div className="space-y-1">
                {task?.subtasks?.map((subtask, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Icon 
                      name={subtask?.completed ? "CheckCircle2" : "Circle"} 
                      size={14} 
                      color={subtask?.completed ? "var(--color-success)" : "var(--color-muted-foreground)"}
                    />
                    <span className={subtask?.completed ? 'line-through text-muted-foreground' : 'text-foreground'}>
                      {subtask?.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              iconName="UserPlus"
              iconPosition="left"
              onClick={() => onAssign(task)}
            >
              Reassign
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="Eye"
              iconPosition="left"
              onClick={() => onViewDetails(task)}
            >
              Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;