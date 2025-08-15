export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="container max-w-6xl py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">F</div>
          <p className="mt-3 text-sm text-slate-600">Premium furniture, crafted for modern living.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#">Shipping & Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><a href="#" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">Pinterest</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} FurniCraft. All rights reserved.
      </div>
    </footer>
  );
}