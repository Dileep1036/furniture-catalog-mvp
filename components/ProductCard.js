export default function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-soft transition-shadow">
      <div className="aspect-square w-full overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.name}</h3>
        {product.price && (
          <p className="text-sm text-slate-600 mt-1">₹{product.price.toLocaleString()}</p>
        )}
      </div>
    </div>
  );
}