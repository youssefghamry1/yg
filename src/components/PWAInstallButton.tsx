import React, { useState } from 'react';
import { Download, Smartphone, X, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  className?: string;
  isAr?: boolean;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ className = '', isAr = false }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) {
    return (
      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-semibold text-emerald-300 ${className}`}>
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        <span>{isAr ? 'التطبيق مثبت' : 'App Installed'}</span>
      </div>
    );
  }

  if (isInstallable) {
    return (
      <button
        onClick={install}
        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#F0D9A2] via-[#E5C78B] to-[#C6A15B] hover:brightness-110 shadow-[0_0_15px_rgba(229,199,139,0.35)] cursor-pointer transition-all active:scale-95 ${className}`}
      >
        <Download className="w-3.5 h-3.5" />
        <span>{isAr ? 'تثبيت كـ تطبيق' : 'Install App'}</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#E5C78B] bg-[#07130D] border border-[#C6A15B]/40 hover:border-[#E5C78B] cursor-pointer transition-all ${className}`}
        >
          <Smartphone className="w-3.5 h-3.5 text-[#E5C78B]" />
          <span>{isAr ? 'تثبيت على الآيفون' : 'Install on iOS'}</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
            <div className="w-full max-w-sm rounded-2xl bg-[#0B1F16] border border-[#C6A15B]/50 p-6 shadow-2xl text-slate-100 space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-950/80 pb-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#E5C78B]">
                  <Smartphone className="w-4 h-4" />
                  <span>{isAr ? 'تثبيت المنصة على iPhone / iPad' : 'Install on iPhone / iPad'}</span>
                </div>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
                <p>
                  1. {isAr ? 'اضغط على زر المشاركة' : 'Tap the'} <strong>{isAr ? '«مشاركة» (Share)' : 'Share button'}</strong> {isAr ? 'في شريط سفلي متصفح Safari.' : 'in Safari toolbar.'}
                </p>
                <p>
                  2. {isAr ? 'مرر للأسفل واختر' : 'Scroll down and tap'} <strong>{isAr ? '«إضافة إلى الصفحة الرئيسية» (Add to Home Screen)' : 'Add to Home Screen'}</strong>.
                </p>
                <p>
                  3. {isAr ? 'اضغط «إضافة» (Add) في الزاوية العلوية لتشغيل المنصة كتطبيق كامل.' : 'Tap Add in the top-right corner to launch as a standalone app.'}
                </p>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-2.5 rounded-xl bg-[#07130D] border border-emerald-500/30 text-xs font-bold text-white hover:bg-emerald-950/60 transition-colors"
              >
                {isAr ? 'فهمت، حسناً' : 'Got it'}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // Generic fallback button to allow users on desktop or non-detected to see install guide / info
  return (
    <button
      onClick={() => {
        if ('standalone' in window.navigator) {
          setShowIOSGuide(true);
        } else {
          alert(isAr ? 'لتثبيت التطبيق على جهازك: اضغط على القائمة في متصفحك واختر "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية".' : 'To install: Open your browser menu and click "Install App" or "Add to Home Screen".');
        }
      }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#E5C78B] bg-[#07130D] border border-[#C6A15B]/30 hover:border-[#E5C78B] cursor-pointer transition-all ${className}`}
    >
      <Download className="w-3.5 h-3.5" />
      <span>{isAr ? 'تثبيت التطبيق' : 'Install App'}</span>
    </button>
  );
};
