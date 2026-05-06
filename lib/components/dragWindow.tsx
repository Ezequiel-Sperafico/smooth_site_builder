"use client";

import { useEffect, useRef, useState } from "react";

export function DragWindow() {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [width, setWidth] = useState<number>(350);
  const [height, setHeight] = useState<number>(300);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const dragging = useRef<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const draggingStartEvent = (event: MouseEvent) => {
    console.log(event);
    setOffsetX(event.offsetX);
    setOffsetY(event.offsetY);
    dragging.current = true;
  };
  const draggingEndEvent = () => (dragging.current = false);

  useEffect(() => {
    const mousePositionEvent = (event: MouseEvent) => {
      console.log(dragging.current);
      if (dragging.current) {
        setX(event.clientX - offsetX);
        setY(event.clientY - offsetY);
      }
    };

    window.addEventListener("mousemove", mousePositionEvent);

    ref.current?.addEventListener("mousedown", draggingStartEvent);
    ref.current?.addEventListener("mouseup", draggingEndEvent);

    return () => {
      window.removeEventListener("mousemove", mousePositionEvent);
      ref.current?.removeEventListener("mousedown", draggingStartEvent);
      ref.current?.removeEventListener("mouseup", draggingEndEvent);
    };
  }, [ref, offsetX, offsetY]);

  return (
    <div
      ref={ref}
      style={{
        top: `${y}px`,
        left: `${x}px`,
        height: `${height}px`,
        width: `${width}px`,
      }}
      className="bg-gray-200 rounded-lg h-40 w-35 top-10 left-10 fixed"
    >
      <div className="flex flex-col justify-between h-full">
        <div className=""></div>
        <div className="flex justify-end">
          <button className="w-4 h-4 bg-red-600 cursor-pointer [clip-path:polygon(100%_100%,_100%_0%,_0%_100%)]"></button>
        </div>
      </div>
    </div>
  );
}
