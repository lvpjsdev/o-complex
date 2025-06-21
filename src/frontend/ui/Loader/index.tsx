export const Loader = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex space-x-2">
        <div className="bg-foreground h-4 w-4 animate-bounce rounded-full [animation-delay:-0.3s]"></div>
        <div className="bg-foreground h-4 w-4 animate-bounce rounded-full [animation-delay:-0.15s]"></div>
        <div className="bg-foreground h-4 w-4 animate-bounce rounded-full"></div>
      </div>
    </div>
  );
};
