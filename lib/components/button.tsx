export function Button({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-[12px] rounded-lg cursor-pointer bg-gray-800 border-2 border-gray-800 text-gray-200 hover:text-gray-800 hover:bg-gray-200 active:bg-gray-800 active:text-gray-200 ${className}`}
    >
      {children}
    </button>
  );
}
