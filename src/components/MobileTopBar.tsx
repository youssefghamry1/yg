import React, { useState } from 'react';
import { Bell, Globe, Sparkles, MessageCircle, Menu } from 'lucide-react';
import { NotificationsModal } from './NotificationsModal';

interface MobileTopBarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenMore: () => void;
  isAr?: boolean;
}

export const MobileTopBar: React.FC<MobileTopBarProps> = ({
  currentTab,
  onNavigate,
  onOpenMore,
  isAr = true,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <header className="lg:hidden sticky top-0 z-40 bg-[#050806]/95 backdrop-blur-2xl border-b border-emerald-950/80 px-3.5 h-15 flex items-center justify-between shadow-md">
        {/* Brand Lockup */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-full border border-[#C6A15B]/70 p-0.5 bg-[#07130D] shrink-0 shadow-[0_0_12px_rgba(198,161,91,0.3)]">
            <img
              src="/assets/aistudio/image_ef5d64bf.png"
              alt="شعار يوسف غمري"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col text-start">
            <span className="font-cinzel font-bold text-white text-xs sm:text-sm gold-gradient-text uppercase leading-none">
              {isAr ? 'يوسف غمري' : 'Youssef Ghamry'}
            </span>
            <span className="text-[10px] text-emerald-400 font-medium leading-tight mt-1">
              {isAr ? 'مطور Full-Stack · مواقع وأنظمة وتطبيقات' : 'Full-Stack Developer | Web & Apps'}
            </span>
          </div>
        </button>

        {/* Right Action Icons: Notifications Bell and More Menu */}
        <div className="flex items-center gap-2">

          {/* Notifications Trigger with Pulse Dot */}
          <button
            onClick={() => setShowNotifications(true)}
            className="relative w-10 h-10 rounded-xl bg-[#07130D] border border-emerald-500/30 flex items-center justify-center text-slate-300 hover:text-white transition-all active:scale-95 cursor-pointer shadow-sm"
            title={isAr ? 'مركز الإشعارات' : 'Notifications'}
            aria-label="Notifications"
          >
            <Bell className="w-4.5 h-4.5 text-[#E5C78B]" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#050806] animate-pulse"></span>
          </button>


          {/* Menu Drawer Trigger */}
          <button
            onClick={onOpenMore}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B1F16] to-[#07130D] border border-emerald-500/40 flex items-center justify-center text-emerald-300 hover:text-white transition-all active:scale-95 cursor-pointer shadow-sm"
            aria-label="Open More Menu"
          >
            <Menu className="w-4.5 h-4.5" />
          </button>
        </div>
      </header>

      {/* Notifications Modal */}
      <NotificationsModal
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
        onNavigate={onNavigate}
        isAr={isAr}
      />
    </>
  );
};
