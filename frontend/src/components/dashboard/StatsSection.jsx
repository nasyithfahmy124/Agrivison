export default function SatsSection({ children }) {
    return (
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible ">
            {children}
        </div>
    );
}