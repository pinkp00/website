const bubbleItems = [
  {
    label: 'Timetable',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="5" width="16" height="15" rx="3" stroke="white" strokeWidth="1.7" fill="rgba(255,255,255,0.12)" />
        <path d="M8 3V7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 3V7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8.5 12H15.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8.5 16H15.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    className: 'top-[64%] left-1/2 -translate-x-1/2 w-16 h-16 animate-float-a',
    bgColor: 'from-orange-400 via-orange-500 to-orange-600',
  },
  {
    label: 'Cloud Based',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 18H6a4 4 0 010-8c.6 0 1.15.14 1.65.37A6 6 0 1120 16h-1z" fill="white" opacity="0.95" />
      </svg>
    ),
    className: 'top-12 left-8 w-16 h-16 animate-float-d',
    bgColor: 'from-violet-500 via-purple-500 to-purple-600',
  },
  {
    label: 'Calendar',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4Z" stroke="white" strokeWidth="1.7" fill="rgba(255,255,255,0.12)" />
        <path d="M8 2V6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 2V6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8.5 12H15.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    className: 'top-12 right-8 w-16 h-16 animate-float-c',
    bgColor: 'from-emerald-500 via-emerald-400 to-lime-500',
  },
  {
    label: 'Room Finding',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="white" opacity="0.95" />
        <circle cx="12" cy="9" r="2.5" fill="white" />
      </svg>
    ),
    className: 'top-[44%] left-2 w-16 h-16 animate-float-b',
    bgColor: 'from-sky-500 via-cyan-500 to-blue-500',
  },
  {
    label: 'Notifications',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" fill="white" opacity="0.95" />
        <path d="M18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 10-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1 1v1h14v-1l-1-1z" fill="#ffffff" />
      </svg>
    ),
    className: 'top-[44%] right-2 w-16 h-16 animate-float-b',
    bgColor: 'from-pink-500 via-fuchsia-500 to-rose-500',
  },
]

export default function AnimatedVisual({ laptopImg }: { laptopImg: string }) {
  return (
    <div className="relative w-full overflow-visible px-4 lg:px-0">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[460px] h-[460px] rounded-full border border-violet-400/25 opacity-35" />
        <div className="absolute w-[456px] h-[456px] rounded-full border border-violet-300/30 border-dashed opacity-45" />
        <div className="absolute w-[456px] h-[456px] rounded-full">
          <span className="absolute w-2.5 h-2.5 rounded-full bg-violet-300 opacity-90 shadow-[0_0_18px_rgba(148,163,255,0.4)]" style={{ left: '50%', top: '2%', transform: 'translateX(-50%)' }} />
          <span className="absolute w-2.5 h-2.5 rounded-full bg-violet-300 opacity-90 shadow-[0_0_18px_rgba(148,163,255,0.4)]" style={{ left: '50%', bottom: '2%', transform: 'translateX(-50%)' }} />
          <span className="absolute w-2.5 h-2.5 rounded-full bg-violet-300 opacity-90 shadow-[0_0_18px_rgba(148,163,255,0.4)]" style={{ left: '2%', top: '50%', transform: 'translateY(-50%)' }} />
          <span className="absolute w-2.5 h-2.5 rounded-full bg-violet-300 opacity-90 shadow-[0_0_18px_rgba(148,163,255,0.4)]" style={{ right: '2%', top: '50%', transform: 'translateY(-50%)' }} />
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
          <div className={`w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br ${item.bgColor} text-white/95 shadow-[0_20px_45px_rgba(0,0,0,0.18)] border border-white/10 backdrop-blur-sm`}>
            {item.icon}
          </div>
          <div className="absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 text-[11px] font-medium text-white/80 tracking-[0.12em] uppercase">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  )
}
