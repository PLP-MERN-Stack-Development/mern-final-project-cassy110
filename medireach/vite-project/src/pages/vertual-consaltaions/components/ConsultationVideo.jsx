import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';


const ConsultationVideo = ({ 
  isProviderConnected = false, 
  onEndCall,
  providerName = "Dr. Sarah Mitchell",
  providerSpecialty = "Internal Medicine"
}) => {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [connectionQuality, setConnectionQuality] = useState('excellent');
  const [callDuration, setCallDuration] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isProviderConnected) {
      const timer = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isProviderConnected]);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getQualityColor = () => {
    switch(connectionQuality) {
      case 'excellent': return 'text-success';
      case 'good': return 'text-brand-trust';
      case 'fair': return 'text-warning';
      case 'poor': return 'text-error';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden">
      {/* Provider Video Feed */}
      <div className="absolute inset-0">
        {isProviderConnected ? (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <Icon name="Video" size={48} color="var(--color-primary)" />
              </div>
              <p className="text-white text-lg font-medium">{providerName}</p>
              <p className="text-slate-400 text-sm">{providerSpecialty}</p>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4 mx-auto animate-pulse">
                <Icon name="UserCircle" size={48} color="var(--color-muted-foreground)" />
              </div>
              <p className="text-white text-lg">Waiting for provider...</p>
            </div>
          </div>
        )}
      </div>

      {/* Patient Video (Picture-in-Picture) */}
      <div className="absolute top-4 right-4 w-48 h-36 bg-slate-800 rounded-lg overflow-hidden border-2 border-slate-700 shadow-strong">
        {isCameraOn ? (
          <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
            <Icon name="User" size={32} color="var(--color-muted-foreground)" />
          </div>
        ) : (
          <div className="w-full h-full bg-slate-900 flex items-center justify-center">
            <Icon name="VideoOff" size={32} color="var(--color-muted-foreground)" />
          </div>
        )}
      </div>

      {/* Connection Quality Indicator */}
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${connectionQuality === 'excellent' ? 'bg-success' : connectionQuality === 'good' ? 'bg-brand-trust' : connectionQuality === 'fair' ? 'bg-warning' : 'bg-error'} animate-pulse`} />
        <span className={`text-sm font-medium ${getQualityColor()}`}>
          {connectionQuality.charAt(0).toUpperCase() + connectionQuality.slice(1)}
        </span>
      </div>

      {/* Call Duration */}
      {isProviderConnected && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
          <span className="text-white text-sm font-medium">{formatDuration(callDuration)}</span>
        </div>
      )}

      {/* Control Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setIsMicOn(!isMicOn)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              isMicOn 
                ? 'bg-slate-700 hover:bg-slate-600' :'bg-error hover:bg-error/90'
            }`}
            aria-label={isMicOn ? 'Mute microphone' : 'Unmute microphone'}
          >
            <Icon name={isMicOn ? 'Mic' : 'MicOff'} size={24} color="white" />
          </button>

          <button
            onClick={() => setIsCameraOn(!isCameraOn)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              isCameraOn 
                ? 'bg-slate-700 hover:bg-slate-600' :'bg-error hover:bg-error/90'
            }`}
            aria-label={isCameraOn ? 'Turn off camera' : 'Turn on camera'}
          >
            <Icon name={isCameraOn ? 'Video' : 'VideoOff'} size={24} color="white" />
          </button>

          <button
            onClick={() => setIsScreenSharing(!isScreenSharing)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              isScreenSharing 
                ? 'bg-primary hover:bg-primary/90' :'bg-slate-700 hover:bg-slate-600'
            }`}
            aria-label={isScreenSharing ? 'Stop sharing screen' : 'Share screen'}
          >
            <Icon name="Monitor" size={24} color="white" />
          </button>

          <button
            onClick={onEndCall}
            className="w-14 h-14 rounded-full bg-error hover:bg-error/90 flex items-center justify-center transition-all duration-300"
            aria-label="End call"
          >
            <Icon name="PhoneOff" size={24} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationVideo;