import React from "react";

export function ReactIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className="text-cyan-400 inline-block">
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NodeIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 inline-block">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
      <path d="M12 22V12" />
      <path d="M21 7l-9 5-9-5" />
    </svg>
  );
}

export function MongoIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-green-500 inline-block">
      <path d="M12 2C11.5 3.5 8 9.5 8 13.5C8 16.5 9.8 19 12 21C14.2 19 16 16.5 16 13.5C16 9.5 12.5 3.5 12 2Z" />
    </svg>
  );
}

export function ExpressIcon({ size = 15 }) {
  return (
    <span className="font-mono font-bold text-slate-300 text-[11px] leading-none">ex</span>
  );
}

export function TailwindIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-sky-400 inline-block">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5 0.76 0.19 1.31 0.74 1.91 1.35C13.39 10.83 14.52 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-0.76-0.19-1.31-0.74-1.91-1.35C15.61 7.17 14.48 6 12 6zm-7 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5 0.76 0.19 1.31 0.74 1.91 1.35C2.39 16.83 3.52 18 6 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-0.76-0.19-1.31-0.74-1.91-1.35C9.61 13.17 8.48 12 6 12z"/>
    </svg>
  );
}

export function ApiIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 inline-block">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <path d="M6 9v12" />
    </svg>
  );
}