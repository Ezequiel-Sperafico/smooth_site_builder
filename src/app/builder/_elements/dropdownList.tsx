import React, { RefObject, useEffect, useRef } from "react";

interface DropdownListProps {
  list: { id: number; label: string; onClick?: () => void }[];
  outerStyles?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  onClose: () => void;
}

export default function DropdownList({
  list,
  outerStyles,
  innerStyle,
  onClose,
}: DropdownListProps) {
  const ref: RefObject<HTMLDivElement | null> = useRef(null);

  const outsideElementClickHandler = (event: PointerEvent) => {
    if (!ref?.current?.contains(event?.target as Node)) onClose();
  };

  useEffect(() => {
    window.removeEventListener("click", outsideElementClickHandler);
    return () => {
      window.removeEventListener("click", outsideElementClickHandler);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute top-15 border rounded-2xl"
      style={outerStyles}
    >
      <section>
        {list.map(({ id, label, onClick }, index) => (
          <div key={id}>
            <div
              className={
                "bg-secondary cursor-pointer px-4 py-1.5 text-lg " +
                (index === 0
                  ? " rounded-t-2xl"
                  : index === list.length - 1
                    ? " rounded-b-2xl"
                    : "")
              }
              onClick={onClick}
              style={innerStyle}
            >
              {label}
            </div>

            {index !== list.length - 1 && (
              <div className="w-full flex justify-center">
                <div className="border-t w-11/12" />
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
