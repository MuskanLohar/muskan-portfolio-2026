import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const Toast = ({ message, type = 'info', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />
  };

  const borders = {
    success: 'border-emerald-500/40 bg-slate-950/95',
    error: 'border-rose-500/40 bg-slate-950/95',
    info: 'border-cyan-500/40 bg-slate-950/95'
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-md w-full animate-in slide-in-from-bottom-5 duration-300">
      <div className={`glass-card p-4 rounded-2xl border ${borders[type]} shadow-2xl flex items-center justify-between gap-3`}>
        <div className="flex items-center gap-3">
          {icons[type]}
          <p className="text-xs sm:text-sm text-slate-100 font-medium">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Dismiss toast"
          className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
