import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
}) {
  if (!products?.length) {
    return (
      <div
        className="
          flex
          min-h-[300px]
          flex-col
          items-center
          justify-center
          rounded-3xl
          border
          border-dashed
          border-slate-300
          bg-white
          text-center
        "
      >
        <div className="text-5xl">
          🌾
        </div>

        <h3
          className="
            mt-4
            text-xl
            font-bold
            text-slate-900
          "
        >
          Product not defind
        </h3>

        <p
          className="
            mt-2
            max-w-md
            text-slate-500
          "
        >
          Try changing the category filter
          or search keywords
          to see other products.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="
        grid
        gap-6

        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      <AnimatePresence mode="popLayout">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}