import { motion, AnimatePresence } from "framer-motion";

import {
  FiX,
  FiFileText,
  FiAlertTriangle,
  FiCheckCircle,
} from "react-icons/fi";

export default function AddEntryModal({
  open,
  onClose,
  onSubmit,
  formData,
  setFormData,
}) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-50

              bg-black/30

              backdrop-blur-sm
            "
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-50

              w-[95%]
              max-w-2xl

              -translate-x-1/2
              -translate-y-1/2

              rounded-[32px]

              border
              border-slate-200

              bg-white

              p-8

              shadow-2xl
            "
          >
            {/* Header */}

            <div
              className="
                flex
                items-start
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
                  Add Activity Entry
                </h2>

                <p
                  className="
                    mt-2

                    text-sm

                    text-slate-500
                  "
                >
                  Record a farming
                  activity, issue, or
                  field observation.
                </p>
              </div>

              <button
                onClick={onClose}
                className="
                  rounded-xl

                  p-2

                  text-slate-500

                  transition-all

                  hover:bg-slate-100
                "
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="
                mt-8

                space-y-5
              "
            >
              {/* Title */}

              <div>
                <label
                  className="
                    mb-2
                    block

                    text-sm
                    font-medium

                    text-slate-700
                  "
                >
                  Activity Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={
                    formData.title
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter activity title"
                  className="
                    w-full

                    rounded-2xl

                    border
                    border-slate-200

                    px-4
                    py-3

                    outline-none

                    transition-all

                    focus:border-green-500
                  "
                />
              </div>

              {/* Type */}

              <div>
                <label
                  className="
                    mb-2
                    block

                    text-sm
                    font-medium

                    text-slate-700
                  "
                >
                  Entry Type
                </label>

                <select
                  name="type"
                  value={
                    formData.type
                  }
                  onChange={
                    handleChange
                  }
                  className="
                    w-full

                    rounded-2xl

                    border
                    border-slate-200

                    px-4
                    py-3

                    outline-none

                    focus:border-green-500
                  "
                >
                  <option value="success">
                    Success
                  </option>

                  <option value="warning">
                    Warning
                  </option>

                  <option value="neutral">
                    Information
                  </option>
                </select>
              </div>

              {/* Description */}

              <div>
                <label
                  className="
                    mb-2
                    block

                    text-sm
                    font-medium

                    text-slate-700
                  "
                >
                  Description
                </label>

                <textarea
                  rows={5}
                  name="description"
                  value={
                    formData.description
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Describe the activity..."
                  className="
                    w-full

                    resize-none

                    rounded-2xl

                    border
                    border-slate-200

                    px-4
                    py-3

                    outline-none

                    focus:border-green-500
                  "
                />
              </div>

              {/* Preview */}

              <div
                className="
                  rounded-2xl

                  bg-slate-50

                  p-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-sm
                    font-medium

                    text-slate-700
                  "
                >
                  {formData.type ===
                    "success" && (
                    <FiCheckCircle />
                  )}

                  {formData.type ===
                    "warning" && (
                    <FiAlertTriangle />
                  )}

                  {formData.type ===
                    "neutral" && (
                    <FiFileText />
                  )}

                  Live Preview
                </div>

                <p
                  className="
                    mt-3

                    text-sm

                    text-slate-500
                  "
                >
                  {
                    formData.title
                  }
                </p>
              </div>

              {/* Footer */}

              <div
                className="
                  flex
                  justify-end
                  gap-3
                "
              >
                <button
                  type="button"
                  onClick={onClose}
                  className="
                    rounded-2xl

                    border
                    border-slate-200

                    px-5
                    py-3

                    font-medium

                    text-slate-700
                  "
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="
                    rounded-2xl

                    bg-green-700

                    px-5
                    py-3

                    font-medium

                    text-white

                    transition-all

                    hover:bg-green-800
                  "
                >
                  Save Entry
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}