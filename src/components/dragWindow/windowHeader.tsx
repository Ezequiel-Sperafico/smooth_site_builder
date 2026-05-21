import { MouseEventHandler } from "react";
import { ExternalLink, X } from "lucide-react";

function HeaderButton({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-1/2 flex justify-center items-center h-full cursor-pointer hover:bg-gray-200 hover:text-gray-800 ${className}`}
    >
      {children}
    </button>
  );
}

export function WindowHeader({
  title,
  draggingStartEvent,
  draggingEndEvent,
  onClose,
}: {
  title: string;
  draggingStartEvent: MouseEventHandler<HTMLDivElement>;
  draggingEndEvent: () => void;
  onClose: () => void;
}) {
  return (
    <div className="w-full min-h-7 h-7 bg-gray-900 rounded-t-lg flex">
      <div
        className="grow flex pl-3.5 cursor-grab active:cursor-grabbing"
        onMouseDown={draggingStartEvent}
        onMouseUp={draggingEndEvent}
      >
        <p className="w-full h-full flex text-gray-200 text-[12px] items-center font-thin">
          {title}
        </p>
      </div>
      <div className="w-18 h-full flex justify-end">
        <HeaderButton onClick={() => {}}>
          <ExternalLink className="w-3 h-3" />
        </HeaderButton>
        <HeaderButton onClick={onClose} className="rounded-tr-lg">
          <X className="w-3 h-3" />
        </HeaderButton>
      </div>
    </div>
  );
}
