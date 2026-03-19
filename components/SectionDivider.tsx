export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-20" aria-hidden="true">
      {/* Left decorative end dot */}
      <div className="h-1 w-1 rounded-full bg-lavender/20" />

      {/* Left gradient line */}
      <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent via-lavender/20 to-lavender/40" />

      {/* Left thin angled line */}
      <div className="mx-1 h-px w-6 rotate-[15deg] bg-lavender/30" />

      {/* Center diamond with glow */}
      <div className="relative mx-3 flex items-center justify-center">
        {/* Glow effect */}
        <div className="absolute h-8 w-8 rounded-full bg-lavender/10 blur-md" />
        {/* Outer diamond */}
        <div className="relative h-3 w-3 rotate-45 border border-lavender/30">
          {/* Inner diamond */}
          <div className="absolute inset-0.5 rotate-0 bg-lavender/15" />
        </div>
      </div>

      {/* Right thin angled line */}
      <div className="mx-1 h-px w-6 -rotate-[15deg] bg-lavender/30" />

      {/* Right gradient line */}
      <div className="h-px w-20 md:w-32 bg-gradient-to-l from-transparent via-lavender/20 to-lavender/40" />

      {/* Right decorative end dot */}
      <div className="h-1 w-1 rounded-full bg-lavender/20" />
    </div>
  );
}
