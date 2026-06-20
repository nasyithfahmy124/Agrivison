import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
  FiCopy,
} from "react-icons/fi";

export default function MarkdownResponse({
  content,
}) {
  const copyCode = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      className="
        relative

        overflow-hidden

        rounded-[32px]

        border
        border-slate-200/80

        bg-white/90

        backdrop-blur-xl

        shadow-[0_20px_80px_rgba(0,0,0,0.05)]

        p-7
      "
    >
      <div
        className="
          absolute
          top-0
          right-0

          h-40
          w-40

          rounded-full

          bg-green-200/30

          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0

          h-32
          w-32

          rounded-full

          bg-emerald-100/30

          blur-3xl
        "
      />

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1
              className="
                mb-6

                text-4xl
                font-bold

                tracking-tight

                text-slate-900
              "
            >
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2
              className="
                mt-8
                mb-4

                flex
                items-center
                gap-2

                text-2xl
                font-bold

                text-slate-900
              "
            >
              <span
                className="
                  h-2
                  w-2

                  rounded-full

                  bg-green-500
                "
              />
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3
              className="
                mt-6
                mb-3

                text-lg
                font-semibold

                text-slate-800
              "
            >
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p
              className="
                mb-4

                leading-8

                text-slate-700
              "
            >
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul
              className="
                mb-5

                space-y-2

                pl-5
              "
            >
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol
              className="
                mb-5

                space-y-2

                pl-5
              "
            >
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li
              className="
                text-slate-700
              "
            >
              {children}
            </li>
          ),

          blockquote: ({
            children,
          }) => {
            const text =
              String(children);

            if (
              text.includes(
                "Insight"
              )
            ) {
              return (
                <div
                  className="
                    my-6

                    rounded-3xl

                    border

                    border-green-200

                    bg-gradient-to-r
                    from-green-50
                    to-emerald-50

                    p-5
                  "
                >
                  <div
                    className="
                      mb-3

                      flex
                      items-center
                      gap-2

                      font-semibold

                      text-green-700
                    "
                  >
                    <FiInfo />
                    Insight AgroVision
                  </div>

                  <div>
                    {children}
                  </div>
                </div>
              );
            }

            if (
              text.includes(
                "Warning"
              )
            ) {
              return (
                <div
                  className="
                    my-6

                    rounded-3xl

                    border

                    border-amber-200

                    bg-amber-50

                    p-5
                  "
                >
                  <div
                    className="
                      mb-3

                      flex
                      items-center
                      gap-2

                      font-semibold

                      text-amber-700
                    "
                  >
                    <FiAlertTriangle />
                    Important Warning
                  </div>

                  {children}
                </div>
              );
            }

            return (
              <blockquote
                className="
                  my-5

                  rounded-r-2xl

                  border-l-4

                  border-green-500

                  bg-green-50

                  px-5
                  py-4

                  italic

                  text-slate-700
                "
              >
                {children}
              </blockquote>
            );
          },

          table: ({
            children,
          }) => (
            <div
              className="
                my-6

                overflow-hidden

                rounded-3xl

                border

                border-slate-200
              "
            >
              <table
                className="
                  w-full
                  border-collapse
                "
              >
                {children}
              </table>
            </div>
          ),

          thead: ({
            children,
          }) => (
            <thead
              className="
                bg-slate-100
              "
            >
              {children}
            </thead>
          ),

          th: ({ children }) => (
            <th
              className="
                border-b

                border-slate-200

                px-4
                py-3

                text-left

                font-semibold

                text-slate-900
              "
            >
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td
              className="
                border-b

                border-slate-100

                px-4
                py-3

                text-slate-700
              "
            >
              {children}
            </td>
          ),

          code: ({
            inline,
            children,
          }) =>
            inline ? (
              <code
                className="
                  rounded-lg

                  bg-green-50

                  px-2
                  py-1

                  text-sm

                  font-medium

                  text-green-700
                "
              >
                {children}
              </code>
            ) : (
              <div
                className="
                  my-5

                  overflow-hidden

                  rounded-3xl

                  border

                  border-slate-800
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between

                    bg-slate-900

                    px-4
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs

                      uppercase

                      tracking-wider

                      text-slate-400
                    "
                  >
                    Code
                  </span>

                  <button
                    onClick={() =>
                      copyCode(
                        String(
                          children
                        )
                      )
                    }
                    className="
                      flex
                      items-center
                      gap-2

                      text-xs

                      text-slate-300

                      hover:text-white
                    "
                  >
                    <FiCopy />
                    Copy
                  </button>
                </div>

                <pre
                  className="
                    overflow-x-auto

                    bg-slate-950

                    p-5

                    text-sm

                    text-slate-100
                  "
                >
                  <code>
                    {children}
                  </code>
                </pre>
              </div>
            ),

          strong: ({
            children,
          }) => (
            <strong
              className="
                font-semibold

                text-green-700
              "
            >
              {children}
            </strong>
          ),

          hr: () => (
            <div
              className="
                my-8

                h-px

                bg-gradient-to-r
                from-transparent
                via-slate-300
                to-transparent
              "
            />
          ),
        }}
      >
        {content?.trim()}
      </ReactMarkdown>

      <div
        className="
          mt-8

          flex
          items-center
          gap-2

          text-xs

          text-slate-400
        "
      >
        <FiCheckCircle />
        Generated by AgroVision AI
      </div>
    </div>
  );
}