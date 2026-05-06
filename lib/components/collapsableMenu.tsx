import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { HTMLAttributes, JSX } from "react";
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
          button: "top-0 right-0 rounded-b-xl mx-2",
          iconClose: ChevronDown,
          iconOpen: ChevronUp,
        }
      : axis === "left"
        ? {
            bar: `left-0 h-dvh w-9 flex-col ${border ? "border-r border-r-gray-800" : ""}`,
            button: "left-0 bottom-0 rounded-r-xl my-2",
            iconClose: ChevronRight,
            iconOpen: ChevronLeft,
          }
        : axis === "bottom"
          ? {
              bar: `bottom-0 w-dvw h-9 ${border ? "border-t border-t-gray-800" : ""}`,
              button: "bottom-0 right-0 rounded-t-xl mx-2",
              iconClose: ChevronUp,
              iconOpen: ChevronDown,
            }
          : {
              bar: `right-0 h-dvh w-9 flex-col ${border ? "border-l border-l-gray-800" : ""}`,
              button: "right-0 bottom-0 rounded-l-xl my-2",
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
      <div>
        <IconButton
          onClick={onClose}
          outerClass={classPosition.button}
          innerClass="text-gray-800"
          icon={classPosition.iconOpen}
          size="lg"
        />
      </div>
    </div>
  ) : (
    <IconButton
      onClick={onOpen}
      outerClass={`bg-gray-200 border-gray-300 flex justify-center items-center fixed ${classPosition.button}`}
      innerClass="text-gray-800"
      icon={classPosition.iconClose}
      size="lg"
    />
  );
}
