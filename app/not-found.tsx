import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-noir-900 flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-serif text-6xl tracking-dramatic uppercase text-lavender-light/20">
        404
      </h1>
      <p className="mt-4 font-sans text-sm text-lavender-light/40">
        Esta página no existe.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-2 border border-lavender/20 font-sans text-xs tracking-wider uppercase text-lavender-light/60 hover:bg-lavender/10 hover:text-lavender-light transition-all"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
