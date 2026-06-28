export default function MarketplaceSkeleton() {
  return (
    <div
      className="
        grid
        gap-6

        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {Array.from({
        length: 8,
      }).map((_, index) => (
        <div
          key={index}
          className="
            overflow-hidden

            rounded-[28px]

            border
            border-slate-200

            bg-white
          "
        >
          <div
            className="
              h-56

              animate-pulse

              bg-slate-200
            "
          />

          <div className="space-y-3 p-5">
            <div
              className="
                h-3
                w-20

                animate-pulse

                rounded-full

                bg-slate-200
              "
            />

            <div
              className="
                h-5
                w-full

                animate-pulse

                rounded-full

                bg-slate-200
              "
            />

            <div
              className="
                h-4
                w-3/4

                animate-pulse

                rounded-full

                bg-slate-200
              "
            />
          </div>
        </div>
      ))}
    </div>
  );
}