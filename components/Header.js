import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container max-w-6xl flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">F</div>
          <span className="font-semibold tracking-tight">FurniCraft</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:opacity-80">Home</Link>
          <Link href="/products" className="hover:opacity-80">Products</Link>
          <Link href="/about" className="hover:opacity-80">About</Link>
          <Link href="/contact" className="hover:opacity-80">Contact</Link>
        </nav>
        <div className="md:hidden">
          <details>
            <summary className="cursor-pointer">Menu</summary>
            <div className="absolute right-4 mt-2 w-40 rounded-xl border bg-white shadow-soft p-2 flex flex-col gap-2">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}