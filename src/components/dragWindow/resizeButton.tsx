import { MouseEventHandler } from "react";

export function ResizeButton({
  onMouseDown,
  onMouseUp,
}: {
  onMouseDown: MouseEventHandler<HTMLButtonElement>;
  onMouseUp: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="flex justify-end rounded-b-lg bg-gray-200">
      <button
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        className="w-3 h-3 border-b-2 border-gray-800 bg-gray-800 cursor-se-resize [clip-path:polygon(100%_100%,_100%_0%,_0%_100%)] select-none"
      ></button>
    </div>
  );
}
