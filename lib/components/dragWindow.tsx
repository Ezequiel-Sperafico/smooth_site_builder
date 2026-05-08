"use client";

import { ExternalLink, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
  MouseEventHandler,
} from "react";

function HeaderButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`w-1/2 flex justify-center items-center h-full cursor-pointer hover:bg-gray-200 hover:text-gray-800 ${className}`}
    >
      {children}
    </button>
  );
}

function ResizeButton({
  onMouseDown,
  onMouseUp,
}: {
  onMouseDown: (event?: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseUp: (event?: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <button
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className="w-4 h-4 border-b-2 border-gray-800 bg-gray-800 cursor-se-resize [clip-path:polygon(100%_100%,_100%_0%,_0%_100%)] select-none"
    ></button>
  );
}

export function DragWindow({
  layer = 1,
  open,
  onClose,
  title,
}: {
  layer?: number;
  open: boolean;
  title: string;
  onClose: () => void;
}) {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [width, setWidth] = useState<number>(350);
  const [height, setHeight] = useState<number>(300);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const dragging = useRef<boolean>(false);
  const resizing = useRef<boolean>(false);

  const draggingStartEvent = useCallback(
    ({ nativeEvent }: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
      setOffsetX(nativeEvent.offsetX);
      setOffsetY(nativeEvent.offsetY);
      dragging.current = true;
    },
    [],
  );

  const draggingEndEvent = useCallback(() => (dragging.current = false), []);

  const resizingStartEvent = useCallback(() => {
    resizing.current = true;
  }, []);

  const resizingEndEvent = useCallback(() => (resizing.current = false), []);

  const mousePositionEvent = useCallback(
    (event: MouseEvent) => {
      if (dragging.current && event.buttons === 1) {
        const newX = event.clientX - offsetX;
        const newY = event.clientY - offsetY;

        if (newX <= 0) setX(0);
        else if (newX + width / 5 > window.innerWidth)
          setX(window.innerWidth - width / 5);
        else setX(newX);

        console.log(newY);

        if (newY <= 0) setY(0);
        else if (newY + height / 5 > window.innerHeight)
          setY(window.innerHeight - height / 5);
        else setY(newY);
      } else dragging.current = false;

      if (resizing.current && event.buttons === 1) {
        setWidth(event.clientX - x);
        setHeight(event.clientY - y);
      }
    },
    [offsetX, offsetY, x, y, width, height],
  );

  useEffect(() => {
    const mousePreventSelection = (e: Event) => {
      e.preventDefault();
    };
    document.addEventListener("selectstart", mousePreventSelection);
    window.addEventListener("mousemove", mousePositionEvent);
    window.addEventListener("mouseup", () => {
      draggingEndEvent();
      resizingEndEvent();
    });

    return () => {
      document.removeEventListener("selectstart", mousePreventSelection);
      window.removeEventListener("mousemove", mousePositionEvent);
      window.removeEventListener("mouseup", draggingEndEvent);
    };
  }, [draggingEndEvent, mousePositionEvent, resizingEndEvent]);

  return (
    open && (
      <div
        style={{
          top: `${y}px`,
          left: `${x}px`,
          height: `${height}px`,
          width: `${width}px`,
          zIndex: layer,
        }}
        className="top-10 left-10 fixed min-w-10 min-h-15 flex flex-col justify-between"
      >
        <div className="w-full h-6 bg-gray-900 rounded-t-lg flex">
          <div
            className="grow flex pl-2 cursor-grab active:cursor-grabbing"
            onMouseDown={draggingStartEvent}
            onMouseUp={draggingEndEvent}
          >
            <p className="w-full h-full text-gray-200 text-[13px]">{title}</p>
          </div>
          <div className="w-12 h-full flex justify-end">
            <HeaderButton>
              <ExternalLink className="w-[14] h-[14]" />
            </HeaderButton>
            <HeaderButton className="rounded-tr-lg">
              <X className="w-[14] h-[14]" />
            </HeaderButton>
          </div>
        </div>
        <div className="bg-gray-200 flex h-full"></div>
        <div className="flex justify-end rounded-b-lg bg-gray-200">
          <ResizeButton
            onMouseDown={resizingStartEvent}
            onMouseUp={resizingEndEvent}
          />
        </div>
      </div>
    )
  );
}
