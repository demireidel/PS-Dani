export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-lavender-muted" />
      <div className="mx-4 h-1.5 w-1.5 rounded-full bg-lavender/40" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-lavender-muted" />
    </div>
  );
}
