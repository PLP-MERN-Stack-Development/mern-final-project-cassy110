import React from 'react';
import Icon from '../../../components/AppIcon';

const EmergencyHeader = () => {
  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="AlertCircle" size={28} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Emergency Response Center</h1>
                <p className="text-sm text-red-600 font-medium mt-1">24/7 Immediate Care Access</p>
              </div>
            </div>
            <p className="text-slate-600 max-w-2xl mt-3">
              Rapid connection to emergency healthcare providers with crisis intervention protocols. Get immediate medical assistance when you need it most.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-red-200 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-700">All Systems Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyHeader;