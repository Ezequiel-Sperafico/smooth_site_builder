"use client";

import dayjs from "dayjs";
import { Clock, LucideProps, Monitor } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import {
  DetailedHTMLProps,
  DOMAttributes,
  ForwardRefExoticComponent,
  HTMLAttributes,
  ImgHTMLAttributes,
  RefAttributes,
  useEffect,
  useState,
} from "react";

export interface ITimerProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  deadline: dayjs.Dayjs;
}

export function Timer({ deadline, ...props }: ITimerProps) {
  const [timeDiffArr, setTimeDiffArr] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeDiff = deadline.diff(dayjs(), "seconds");

      const days = timeDiff / 60 / 60 / 24;
      const hours = (days % 1) * 24;
      const minutes = (hours % 1) * 60;
      const seconds = (minutes % 1) * 60;
      setTimeDiffArr([
        Math.floor(days),
        Math.floor(hours),
        Math.floor(minutes),
        Math.floor(seconds),
      ]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div {...props}>
      <div className="text-black">
        <Clock style={{ height: "10px", width: "10px" }} />
        <p>
          {timeDiffArr[0] >= 1 && `${timeDiffArr[0]}d`}{" "}
          {timeDiffArr[1] >= 1 && `${timeDiffArr[1]}h`}{" "}
          {timeDiffArr[2] >= 1 && `${timeDiffArr[2]}m`}{" "}
          {timeDiffArr[3] >= 1 && `${timeDiffArr[3]}s`}{" "}
        </p>
      </div>
    </div>
  );
}
