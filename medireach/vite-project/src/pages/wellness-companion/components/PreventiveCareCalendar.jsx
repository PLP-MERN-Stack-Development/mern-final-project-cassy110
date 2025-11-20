import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PreventiveCareCalendar = ({ screenings }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date()?.getMonth());
  const [selectedYear] = useState(new Date()?.getFullYear());

  const getStatusColor = (status) => {
    const colors = {
      completed: { bg: 'bg-emerald-100', text: 'text-emerald-700', icon: 'CheckCircle2' },
      upcoming: { bg: 'bg-blue-100', text: 'text-blue-700', icon: 'Calendar' },
      overdue: { bg: 'bg-red-100', text: 'text-red-700', icon: 'AlertCircle' },
      scheduled: { bg: 'bg-amber-100', text: 'text-amber-700', icon: 'Clock' }
    };
    return colors?.[status] || colors?.upcoming;
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Preventive Care Calendar</h2>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            iconName="ChevronLeft"
            onClick={() => setSelectedMonth(prev => (prev === 0 ? 11 : prev - 1))}
          />
          <span className="text-sm font-medium text-slate-700 min-w-[120px] text-center">
            {months?.[selectedMonth]} {selectedYear}
          </span>
          <Button 
            variant="ghost" 
            size="sm" 
            iconName="ChevronRight"
            onClick={() => setSelectedMonth(prev => (prev === 11 ? 0 : prev + 1))}
          />
        </div>
      </div>
      <div className="space-y-3">
        {screenings?.map((screening) => {
          const statusColors = getStatusColor(screening?.status);
          const screeningDate = new Date(screening.date);
          const isCurrentMonth = screeningDate?.getMonth() === selectedMonth;
          
          if (!isCurrentMonth) return null;

          return (
            <div 
              key={screening?.id}
              className="p-4 rounded-lg border border-slate-200 hover:border-teal-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${statusColors?.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon name={statusColors?.icon} size={20} className={statusColors?.text} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-slate-900">{screening?.name}</h3>
                      <p className="text-sm text-slate-600 mt-1">{screening?.description}</p>
                    </div>
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${statusColors?.bg} ${statusColors?.text} flex-shrink-0`}>
                      {screening?.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      <span>{screeningDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    {screening?.provider && (
                      <div className="flex items-center gap-1">
                        <Icon name="User" size={16} />
                        <span>{screening?.provider}</span>
                      </div>
                    )}
                    {screening?.frequency && (
                      <div className="flex items-center gap-1">
                        <Icon name="RefreshCw" size={16} />
                        <span>{screening?.frequency}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {screening?.status === 'upcoming' && (
                      <Button variant="default" size="sm" iconName="Calendar" iconPosition="left">
                        Schedule Now
                      </Button>
                    )}
                    {screening?.status === 'overdue' && (
                      <Button variant="destructive" size="sm" iconName="AlertCircle" iconPosition="left">
                        Schedule Urgent
                      </Button>
                    )}
                    {screening?.status === 'scheduled' && (
                      <Button variant="outline" size="sm" iconName="Eye" iconPosition="left">
                        View Details
                      </Button>
                    )}
                    {screening?.status === 'completed' && (
                      <Button variant="ghost" size="sm" iconName="FileText" iconPosition="left">
                        View Results
                      </Button>
                    )}
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

export default PreventiveCareCalendar;