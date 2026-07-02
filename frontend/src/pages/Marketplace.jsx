import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import AIRecommendationBanner from "../components/marketplace/AIRecommendationBanner";
import MarketplaceFilters from "../components/marketplace/MarketplaceFilters";
import ProductGrid from "../components/marketplace/ProductGrid";
import {
  products,
  categories,
  recommendation,
} from "../data/marketplace/products";

export default function Marketplace() {
  const [search, setSearch] =
    useState("");

  const [
    activeCategory,
    setActiveCategory,
  ] = useState("Semua");

  const [aiOnly, setAiOnly] =
    useState(false);

  const filteredProducts =
    useMemo(() => {
      return products.filter(
        (product) => {
          const categoryMatch =
            activeCategory ===
              "Semua" ||
            product.category ===
              activeCategory;

          const searchMatch =
            product.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            product.description
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const aiMatch =
            !aiOnly ||
            product.recommended;

          return (
            categoryMatch &&
            searchMatch &&
            aiMatch
          );
        }
      );
    }, [
      search,
      activeCategory,
      aiOnly,
    ]);

  return (
    <div
      className="
        min-h-screen

        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-100
      "
    >
      <div
        className="
          mx-auto
          max-w-[90rem]

          px-6
          py-8
        "
      >
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mb-8"
        >
          <span
            className="
              inline-flex
              items-center

              rounded-full

              border
              border-green-200

              bg-green-50

              px-4
              py-2

              text-sm
              font-medium

              text-green-700
            "
          >
            🌾 AgroVision Marketplace
          </span>

          <h1
            className="
              mt-4

              text-4xl
              font-bold

              tracking-tight

              text-slate-900
            "
          >
            Smart Farming Store
          </h1>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-600
            "
          >
            Temukan benih, pupuk,
            pestisida, dan kebutuhan
            pertanian terbaik yang
            direkomendasikan AI
            berdasarkan kondisi lahan
            dan prediksi hasil panen.
          </p>
        </motion.div>

        {/* AI BANNER */}

        <AIRecommendationBanner
          recommendation={
            recommendation
          }
        />

        {/* FILTER */}

        <div className="mt-8">
          <MarketplaceFilters
            categories={
              categories
            }
            activeCategory={
              activeCategory
            }
            onCategoryChange={
              setActiveCategory
            }
            search={search}
            onSearchChange={
              setSearch
            }
            aiOnly={aiOnly}
            onToggleAI={() =>
              setAiOnly(
                !aiOnly
              )
            }
            totalProducts={
              filteredProducts.length
            }
          />
        </div>

        {/* PRODUCT SECTION */}

        <motion.div
          layout
          className="mt-10"
        >
          <div
            className="
              mb-5

              flex
              items-center
              justify-between
            "
          >
            <div>
              <h2
                className="
                  text-2xl
                  font-bold

                  text-slate-900
                "
              >
                Featured Products
              </h2>

              <p
                className="
                  mt-1

                  text-sm

                  text-slate-500
                "
              >
                {filteredProducts.length}
                {" "}
                products available
              </p>
            </div>
          </div>

          <ProductGrid
            products={
              filteredProducts
            }
          />
        </motion.div>
      </div>
    </div>
  );
}