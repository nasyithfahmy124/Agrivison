import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownResponse({
  content,
}) {
  return (
    <div className="max-w-4xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-h1:text-3xl prose-h1:font-bold prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-xl prose-h3:font-semibold prose-p:text-slate-700 prose-strong:text-slate-900 prose-li:text-slate-700 prose-table:w-full prose-th:bg-slate-50 prose-th:border prose-th:border-slate-200 prose-td:border prose-td:border-slate-200 prose-code:text-green-700 prose-pre:bg-slate-900">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content?.trim()}
        </ReactMarkdown>
      </div>
    </div>
  );
}