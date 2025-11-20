import React from 'react';
import Icon from '../../../components/AppIcon';

const NearbyFacilitiesMap = () => {
  return (
    <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-medium">
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Map" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Nearby Emergency Facilities</h3>
            <p className="text-sm text-slate-600">Real-time locations and availability</p>
          </div>
        </div>
      </div>
      
      <div className="relative w-full h-96">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Nearby Emergency Facilities Map"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=40.7128,-74.0060&z=13&output=embed"
          className="border-0"
        />
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg px-4 py-2 border border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-slate-700">5 Facilities Nearby</span>
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-slate-600">
            <Icon name="Navigation" size={16} />
            <span>Your Location: New York, NY</span>
          </div>
          <button className="text-primary font-semibold hover:underline">
            Update Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default NearbyFacilitiesMap;