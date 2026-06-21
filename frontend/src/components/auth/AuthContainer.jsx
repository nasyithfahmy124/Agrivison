export default function AuthContainer({ children, branding }) {
  return (
    <div className="overflow-hidden rounded-[40px] bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_30px_80px_rgba(0,0,0,0.08)] grid grid-cols-1 lg:grid-cols-2 min-h-[720px]">
    
      {children}

      {branding}
    </div>
  );
}