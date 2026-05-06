import { HTMLProps, JSX } from "react";

export interface ICarAction {
  action: () => void;
  text?: string;
  icon?: JSX.ElementType;
  classes?: HTMLProps<HTMLElement>["className"];
}

export interface ICarItem {
  title: string;
  subtitle?: string;
  actions?: ICarAction[];
  image: string;
}

export interface ICarStructure {
  main: ICarItem;
  side: ICarItem[];
}
