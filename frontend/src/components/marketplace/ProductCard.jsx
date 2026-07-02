import { motion } from "framer-motion";
import {
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";

export default function ProductCard({ product }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="
        group
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        shadow-sm
        hover:shadow-xl
        hover:shadow-green-500/10
        transition-all
        duration-300
      "
    >

      {product.badge && (
        <div className="p-3 pb-0">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-green-700
              px-3
              py-2
              text-xs
              font-semibold
              text-white
              shadow-lg
            "
          >
            ✨ {product.badge}
          </div>
        </div>
      )}


      <div
        className="
          relative
          flex
          h-[260px]
          items-center
          justify-center
          overflow-hidden
          bg-gradient-to-b
          from-slate-50
          to-slate-100
        "
      >
        <motion.img
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.3,
          }}
          src={product.image}
          alt={product.name}
          className="
            h-96
            object-contain
            drop-shadow-lg
          "
        />

        
      </div>


      <div className="p-5">

        <div className="flex items-center justify-between">
          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-slate-500
            "
          >
            {product.category}
          </span>

          <div
            className="
              flex
              items-center
              gap-1
              text-sm
              font-medium
              text-slate-700
            "
          >
            <FiStar
              className="
                fill-yellow-400
                text-yellow-400
              "
            />

            {product.rating}
          </div>
        </div>


        <h3
          className="
            mt-3
            line-clamp-2
            text-[30px]
            font-bold
            leading-[1.1]
            text-slate-900
          "
        >
          {product.name}
        </h3>


        <p
          className="
            mt-3
            line-clamp-3
            text-[15px]
            leading-relaxed
            text-slate-500
          "
        >
          {product.description}
        </p>

        <div className="my-5 h-px bg-slate-200" />

        <div className="flex items-end justify-between">
          <div>
            <h4
              className="
                text-[32px]
                font-bold
                text-green-700
                leading-none
              "
            >
              Rp{" "}
              {product.price.toLocaleString(
                "id-ID"
              )}
            </h4>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              / {product.unit}
            </p>
          </div>

          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            whileHover={{
              scale: 1.08,
            }}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-green-300
              text-green-900
              shadow-md
              transition-all
              hover:bg-green-500
              hover:text-white
            "
          >
            <FiShoppingCart size={22} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}