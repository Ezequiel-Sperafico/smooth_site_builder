import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { JSX } from "react";
import { IconButton } from "./iconButton";

export interface ICollapsableMenuProps {
  axis: "top" | "bottom" | "left" | "right";
  children: React.ReactNode[] | React.ReactNode;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  border?: boolean;
}

export function CollapsableMenu({
  axis,
  open,
  children,
  onClose,
  onOpen,
  border = false,
}: ICollapsableMenuProps) {
  const classPosition: {
    bar: HTMLDivElement["className"];
    button: HTMLDivElement["className"];
    iconOpen: JSX.ElementType;
    iconClose: JSX.ElementType;
  } =
    axis === "top"
      ? {
          bar: `top-0 w-dvw h-9 ${border ? "border-b border-b-gray-800" : ""}`,
          button: "top-0 right-0 mx-5 w-8 rounded-b-xl mx-2",
          iconClose: ChevronDown,
          iconOpen: ChevronUp,
        }
      : axis === "left"
        ? {
            bar: `left-0 h-dvh w-9 flex-col ${border ? "border-r border-r-gray-800" : ""}`,
            button: "left-0 bottom-0 h-8 my-5 rounded-r-xl",
            iconClose: ChevronRight,
            iconOpen: ChevronLeft,
          }
        : axis === "bottom"
          ? {
              bar: `bottom-0 w-dvw h-9 ${border ? "border-t border-t-gray-800" : ""}`,
              button: "bottom-0 right-5 w-8 mx-5 rounded-t-xl mx-2",
              iconClose: ChevronUp,
              iconOpen: ChevronDown,
            }
          : {
              bar: `right-0 h-dvh w-9 flex-col ${border ? "border-l border-l-gray-800" : ""}`,
              button: "right-0 bottom-0 h-8 my-5 rounded-l-xl",
              iconClose: ChevronLeft,
              iconOpen: ChevronRight,
            };

  return open ? (
    <div
      className={`fixed bg-gray-200 flex justify-between ${classPosition.bar}`}
    >
      <div className="w-full h-full">
        {...Array.isArray(children) ? children : [children]}
      </div>
      <div
        className={`flex items-center justify-center ${classPosition.button}`}
      >
        <IconButton
          onClick={onClose}
          innerClass="text-gray-800"
          icon={classPosition.iconOpen}
          size="md"
        />
      </div>
    </div>
  ) : (
    <div
      className={`fixed h-8 w-8 bg-gray-200 border-gray-300 flex justify-center items-center ${classPosition.button}`}
    >
      <IconButton
        onClick={onOpen}
        innerClass="text-gray-800"
        icon={classPosition.iconClose}
        size="md"
      />
    </div>
  );
}
