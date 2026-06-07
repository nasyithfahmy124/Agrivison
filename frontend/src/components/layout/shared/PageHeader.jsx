import PropTypes from "prop-types";

export default function PageHeader({
  title,
  description,
  badge,
  rightContent,
}) {
  return (
    <div className="mb-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

        {/* Left Section */}
        <div>
          {badge && (
            <span
              className="
                inline-flex
                items-center
                rounded-full
                bg-green-100
                px-3
                py-1
                text-xs
                font-medium
                text-green-700
                mb-3
              "
            >
              {badge}
            </span>
          )}

          <h1
            className="
              text-3xl
              font-bold
              text-slate-900
            "
          >
            {title}
          </h1>

          {description && (
            <p
              className="
                mt-2
                max-w-2xl
                text-slate-500
              "
            >
              {description}
            </p>
          )}
        </div>

        {/* Right Section */}
        {rightContent && (
          <div className="flex items-center gap-3">
            {rightContent}
          </div>
        )}
      </div>
    </div>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  badge: PropTypes.string,
  rightContent: PropTypes.node,
};