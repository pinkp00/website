const bubbleItems = [
  {
    label: 'Timetable',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="5" width="16" height="15" rx="3" stroke="white" strokeWidth="1.7" fill="rgba(255,255,255,0.08)" />
        <path d="M8 3V7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 3V7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8.5 12H15.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8.5 16H15.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    className: 'bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 animate-float-a',
    bgColor: 'from-orange-500 to-orange-600',
  },
  {
    label: 'Notifications',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" fill="white" opacity="0.95" />
        <path d="M18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 10-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1 1v1h14v-1l-1-1z" fill="#ffffff" />
      </svg>
    ),
    className: 'top-16 right-0 w-16 h-16 animate-float-b',
    bgColor: 'from-pink-500 to-pink-600',
  },
  {
    label: 'Room Finding',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="white" opacity="0.95" />
        <circle cx="12" cy="9" r="2.5" fill="white" />
      </svg>
    ),
    className: 'top-24 right-6 w-16 h-16 animate-float-c',
    bgColor: 'from-blue-500 to-blue-600',
  },
  {
    label: 'Calendar',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4Z" stroke="white" strokeWidth="1.7" fill="rgba(255,255,255,0.08)" />
        <path d="M8 2V6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 2V6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8.5 12H15.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    className: 'top-12 left-0 w-16 h-16 animate-float-d',
    bgColor: 'from-green-500 to-green-600',
  },
  {
    label: 'Cloud Based',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 18H6a4 4 0 010-8c.6 0 1.15.14 1.65.37A6 6 0 1120 16h-1z" fill="white" opacity="0.95" />
      </svg>
    ),
    className: 'top-28 left-6 w-16 h-16 animate-float-c',
    bgColor: 'from-purple-500 to-purple-600',
  },
]

export default function AnimatedVisual({ laptopImg }: { laptopImg: string }) {
  return (
    <div className="relative w-full overflow-visible px-4 lg:px-0">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full border border-white/15 opacity-30 animate-orbit-spin" />
        <div className="absolute w-[380px] h-[380px] rounded-full border border-[#8b5cf6]/40 border-dashed opacity-35 animate-orbit-spin-reverse" />
        <div className="absolute w-[280px] h-[280px] rounded-full border border-[#60a5fa]/25 opacity-25" />

        <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute w-3 h-3 rounded-full bg-[#a855f7] opacity-95 orbit-dot-1" style={{ left: '50%', top: '0%' }} />
          <span className="absolute w-2.5 h-2.5 rounded-full bg-[#8b5cf6] opacity-85 orbit-dot-2" style={{ left: '100%', top: '50%' }} />
          <span className="absolute w-2 h-2 rounded-full bg-[#7c3aed] opacity-80 orbit-dot-3" style={{ left: '0%', top: '50%' }} />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[380px]">
        <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle,_rgba(139,92,246,0.18),_transparent_55%)] blur-3xl opacity-70" />
        <div className="relative z-20 flex items-center justify-center">
          <img
            src={laptopImg}
            alt="AZHly laptop preview"
            className="relative w-full max-w-[380px] rounded-[24px] shadow-[0_36px_70px_rgba(79,70,229,0.24)] animate-float-laptop"
          />
        </div>
      </div>

      {bubbleItems.map((item) => (
        <div key={item.label} className={`absolute ${item.className} z-30`}>
          <div className={`w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br ${item.bgColor} text-white/95 shadow-lg`}>
            {item.icon}
          </div>
          <div className="absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 text-xs text-white/70 tracking-wide">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  )
}
