import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CarePlanDocument = ({ document, onView, onEdit, onDownload }) => {
  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-success/10 text-success border-success/20',
      draft: 'bg-amber-100 text-amber-700 border-amber-200',
      archived: 'bg-gray-100 text-gray-600 border-gray-200'
    };
    return colors?.[status] || colors?.draft;
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-card rounded-lg p-5 border border-border hover:shadow-medium transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon name="FileText" size={24} color="var(--color-primary)" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-base mb-1">{document?.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{document?.description}</p>
            
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Icon name="Calendar" size={12} />
                <span>Updated {formatDate(document?.lastUpdated)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="User" size={12} />
                <span>By {document?.updatedBy}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="GitBranch" size={12} />
                <span>v{document?.version}</span>
              </div>
            </div>
          </div>
        </div>

        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(document?.status)}`}>
          {document?.status?.charAt(0)?.toUpperCase() + document?.status?.slice(1)}
        </span>
      </div>
      {document?.sections && document?.sections?.length > 0 && (
        <div className="mb-4 pb-4 border-b border-border">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="List" size={14} color="var(--color-muted-foreground)" />
            <span className="text-xs font-medium text-muted-foreground">Sections</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {document?.sections?.map((section, index) => (
              <span key={index} className="px-2 py-1 bg-muted rounded text-xs text-foreground">
                {section}
              </span>
            ))}
          </div>
        </div>
      )}
      {document?.collaborators && document?.collaborators?.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Users" size={14} color="var(--color-muted-foreground)" />
            <span className="text-xs font-medium text-muted-foreground">
              {document?.collaborators?.length} Collaborators
            </span>
          </div>
          <div className="flex -space-x-2">
            {document?.collaborators?.slice(0, 5)?.map((collaborator, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-medium text-primary"
                title={collaborator}
              >
                {collaborator?.charAt(0)}
              </div>
            ))}
            {document?.collaborators?.length > 5 && (
              <div className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-medium text-muted-foreground">
                +{document?.collaborators?.length - 5}
              </div>
            )}
          </div>
        </div>
      )}
      <div className="flex items-center gap-2">
        <Button
          variant="default"
          size="sm"
          iconName="Eye"
          iconPosition="left"
          onClick={() => onView(document)}
        >
          View
        </Button>
        <Button
          variant="outline"
          size="sm"
          iconName="Edit"
          iconPosition="left"
          onClick={() => onEdit(document)}
        >
          Edit
        </Button>
        <Button
          variant="ghost"
          size="sm"
          iconName="Download"
          iconPosition="left"
          onClick={() => onDownload(document)}
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default CarePlanDocument;