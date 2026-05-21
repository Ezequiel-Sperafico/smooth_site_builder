"use client";

import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import { HTMLProps, JSX, ReactNode, useEffect, useState } from "react";
import IconButton from "../iconButton";
import { ICarStructure } from "./carousel.types";
import { CarouselCard } from "./carouselCard";

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
    <div className="w-full h-full flex flex-col gap-2">
      <div className="h-full w-full flex gap-5">
        <CarouselCard
          type="main"
          title={renderData.main.title}
          image={renderData.main.image}
        />
        <div className="w-4/10 h-full flex flex-col gap-2">
          <CarouselCard
            type="side"
            title={renderData.side[0].title}
            image={renderData.side[0].image}
          />
          <CarouselCard
            type="side"
            title={renderData.side[1].title}
            image={renderData.side[1].image}
          />
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
