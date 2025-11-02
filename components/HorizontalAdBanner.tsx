import React from 'react';

const HorizontalAdBanner: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full bg-slate-200 py-4 dark:bg-slate-800">
        <div 
          className="flex items-center justify-center h-[90px] w-full max-w-[728px] border-2 border-dashed border-slate-400 text-slate-500 bg-slate-100 dark:bg-slate-700 dark:border-slate-500 dark:text-slate-400"
          aria-label="Advertisement"
        >
            <p className="font-body text-sm">Horizontal Ad Banner (728x90)</p>
        </div>
    </div>
  );
};

export default HorizontalAdBanner;