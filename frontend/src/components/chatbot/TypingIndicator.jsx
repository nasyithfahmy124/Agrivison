export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 animate-bounce rounded-full bg-green-600" />
      <div className="h-2 w-2 animate-bounce rounded-full bg-green-600" style={{ animationDelay: "0.1s" }}/>
      <div className="h-2 w-2 animate-bounce rounded-full bg-green-600" style={{ animationDelay: "0.2s" }}/>

    </div>
  );
}