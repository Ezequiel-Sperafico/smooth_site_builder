"use client";

import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import { HTMLProps, JSX, ReactNode, useEffect, useState } from "react";
import IconButton from "../iconButton";

interface ICarAction {
  action: () => void;
  text?: string;
  icon?: JSX.ElementType;
  classes?: HTMLProps<HTMLElement>["className"];
}

interface ICarItem {
  title: string;
  subtitle?: string;
  actions?: ICarAction[];
  image: string;
}

interface ICarStructure {
  main: ICarItem;
  side: ICarItem[];
}

export function Carousel({ structure = [] }: { structure: ICarStructure[] }) {
  const lastPageIndex = structure.length - 1;
  const [page, setPage] = useState(0);
  const [renderData, setRenderData] = useState(structure[page]);

  const paginate = (newPage: number) => {
    if (newPage <= lastPageIndex && newPage >= 0) {
      setPage(newPage);
      setRenderData(structure[newPage]);
    }
  };

  return (
    <div className="w-dvw h-150 bg-green-400 flex flex-col gap-2">
      <div className="h-9/10 w-full flex justify-center gap-5">
        <div className="w-6/10 bg-amber-400 rounded-2xl relative flex flex-col justify-end p-8">
          <img
            alt="sem imagem"
            src={renderData.main.image}
            className="top-0 left-0 w-full h-full absolute rounded-2xl"
          />
          <p className="relative text-6xl text-black">
            {renderData.main.title}
          </p>
          {renderData.main.subtitle && (
            <p className="relative text-xl text-black">
              {renderData.main.subtitle}
            </p>
          )}
        </div>

        <div className="w-3/10 h-full flex flex-col gap-2">
          <div
            className="w-full bg-amber-300  rounded-2xl relative flex items-end"
            style={{ height: "calc(50% - 4px)" }}
          >
            <img
              alt="sem imagem"
              src={renderData.side[0].image}
              className="top-0 left-0 w-full h-full absolute rounded-2xl"
            />
            <p className="relative">{renderData.side[0].title}</p>
          </div>

          <div
            className="w-full bg-amber-700 rounded-2xl relative flex items-end"
            style={{ height: "calc(50% - 4px)" }}
          >
            <img
              alt="sem imagem"
              src={renderData.side[1].image}
              className="top-0 left-0 w-full h-full absolute rounded-2xl"
            />
            <p className="relative">{renderData.side[1].title}</p>
          </div>
        </div>
      </div>

      <div className="h-1/10 w-full flex justify-center gap-0.5">
        <IconButton icon={ChevronLeft} onclick={() => paginate(page - 1)} />
        {structure.map((_, i) => {
          return (
            <IconButton
              forceHover={i === page}
              key={i}
              icon={Dot}
              size="large"
              onclick={() => {
                paginate(i);
              }}
            />
          );
        })}
        <IconButton icon={ChevronRight} onclick={() => paginate(page + 1)} />
      </div>
    </div>
  );
}
