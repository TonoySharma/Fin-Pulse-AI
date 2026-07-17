"use client";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden h-[450px] animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-44 bg-slate-800/80" />

      {/* Content Skeleton */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-2.5">
          <div className="h-5 bg-slate-800 rounded-md w-3/4" />
          <div className="h-3.5 bg-slate-800/60 rounded-md w-full" />
          <div className="h-3.5 bg-slate-800/60 rounded-md w-5/6" />
        </div>

        {/* Meta Grid Skeleton */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60">
          <div className="h-4 bg-slate-800 rounded w-1/2" />
          <div className="h-4 bg-slate-800 rounded w-2/3 justify-self-end" />
          <div className="h-4 bg-slate-800 rounded w-3/4" />
          <div className="h-4 bg-slate-800 rounded w-1/2 justify-self-end" />
        </div>

        {/* Button Skeleton */}
        <div className="h-10 bg-slate-800 rounded-xl w-full" />
      </div>
    </div>
  );
}