"use client";

import { LucideProps, Monitor } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import {
  DOMAttributes,
  ForwardRefExoticComponent,
  HTMLAttributes,
  ImgHTMLAttributes,
  RefAttributes,
} from "react";
import { Timer } from "./timer";
import dayjs from "dayjs";

declare type TIcon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

export interface ICardActions {
  icon: TIcon;
  onClick: DOMAttributes<Element>["onClick"];
  title?: string;
  active?: boolean;
}

export interface IPrice {
  value: number;
  onClick: DOMAttributes<Element>["onClick"];
  discountPercentage?: number;
  discountDeadline?: string;
}

export interface ICardProps {
  title: string;
  subtitle: string;
  image: ImgHTMLAttributes<HTMLImageElement>["src"];
  price?: IPrice;
  tags?: string[];
  actions?: ICardActions[];
  className?: HTMLAttributes<Element>["className"];
  style?: HTMLAttributes<Element>["style"];
  onClick?: DOMAttributes<Element>["onClick"];
}

export function Card({
  title,
  subtitle,
  image,
  price,
  tags = [],
  actions = [],
  className = "",
  style = {},
  onClick = (event) => {},
}: ICardProps) {
  return (
    <div
      onClick={onClick}
      className={`${className} bg-amber-400 rounded-2xl`}
      style={{ ...style }}
    >
      <div className="w-full text-center">
        <p className="relative text-xl font-semibold text-black">{title}</p>
      </div>
      <img
        alt="sem imagem"
        src={image}
        className="w-full h-60"
        style={{ objectFit: "cover" }}
      />
      <div className="w-full px-3 py-1">
        <p className="relative text-lg text-black">{subtitle}</p>
        <div className="flex mt-1 gap-0.5">
          {tags.map((tag, i) => (
            <div key={i} className="px-2 rounded-md bg-red-600 text-xs">
              <p>{tag}</p>
            </div>
          ))}
        </div>
        <Timer deadline={dayjs("2026-04-15 13:30:00")} />
      </div>
    </div>
  );
}
