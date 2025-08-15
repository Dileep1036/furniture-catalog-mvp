export default function Contact() {
  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-slate-600 mt-2">Have questions? Reach us at <a className="underline" href="mailto:hello@furnicraft.example">hello@furnicraft.example</a>.</p>
      <div className="mt-8 grid gap-4">
        <a className="px-5 py-3 rounded-xl border inline-block" href="https://wa.me/910000000000" target="_blank" rel="noreferrer">WhatsApp</a>
        <a className="px-5 py-3 rounded-xl border inline-block" href="tel:+910000000000">Call Us</a>
      </div>
    </div>
  );
}