"use client";

import { ExternalLink, X } from "lucide-react";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
  useContext,
} from "react";
import { EventContext } from "../contexts/eventListenerBus";

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

function WindowHeader({
  title,
  draggingStartEvent,
  draggingEndEvent,
  onClose,
}: {
  title: string;
  draggingStartEvent: (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => void;
  draggingEndEvent: () => void;
  onClose: () => void;
}) {
  return (
    <div className="w-full h-9 bg-gray-900 rounded-t-lg flex">
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

function ResizeButton({
  onMouseDown,
  onMouseUp,
}: {
  onMouseDown: (event?: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseUp: (event?: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <div className="flex justify-end rounded-b-lg bg-gray-200">
      <button
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        className="w-3.5 h-3.5 border-b-2 border-gray-800 bg-gray-800 cursor-se-resize [clip-path:polygon(100%_100%,_100%_0%,_0%_100%)] select-none"
      ></button>
    </div>
  );
}

export function DragWindow({
  layer = 1,
  onClose,
  title,
  children,
}: {
  layer?: number;
  title: string;
  onClose: () => void;
  children?: React.ReactNode | React.ReactNode[];
}) {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [width, setWidth] = useState<number>(350);
  const [height, setHeight] = useState<number>(300);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const dragging = useRef<boolean>(false);
  const resizing = useRef<boolean>(false);

  const { addMouseMove, addMouseUp, removeMouseMove, removeMouseUp } =
    useContext(EventContext);

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
        else if (newX + (width - 1) / 5 > window.innerWidth)
          setX(window.innerWidth - (width - 1) / 5);
        else setX(newX);

        console.log(newY);

        if (newY <= 0) setY(0);
        else if (newY + (height - 1) / 5 > window.innerHeight)
          setY(window.innerHeight - (height - 1) / 5);
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
    const mouseMoveListenerId = addMouseMove?.(mousePositionEvent) || 0;
    const mouseUpListenerId =
      addMouseUp?.(() => {
        draggingEndEvent();
        resizingEndEvent();
      }) || 0;

    return () => {
      document.removeEventListener("selectstart", mousePreventSelection);
      removeMouseMove?.(mouseMoveListenerId);
      removeMouseUp?.(mouseUpListenerId);
    };
  }, [
    draggingEndEvent,
    mousePositionEvent,
    resizingEndEvent,
    addMouseMove,
    addMouseUp,
    removeMouseMove,
    removeMouseUp,
  ]);

  return (
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
      <WindowHeader
        draggingStartEvent={draggingStartEvent}
        draggingEndEvent={draggingEndEvent}
        onClose={onClose}
        title={title}
      />
      <div className="bg-gray-200 flex h-full">{children}</div>
      <ResizeButton
        onMouseDown={resizingStartEvent}
        onMouseUp={resizingEndEvent}
      />
    </div>
  );
}
