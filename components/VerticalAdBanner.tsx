import React from 'react';

const VerticalAdBanner: React.FC = () => {
  return (
    <div 
      className="flex items-center justify-center w-[160px] h-[600px] border-2 border-dashed border-slate-300 text-slate-500 bg-white dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400"
      aria-label="Advertisement"
    >
      <p className="font-body text-sm text-center">Vertical Ad Banner<br/>(160x600)</p>
    </div>
  );
};

export default VerticalAdBanner;
