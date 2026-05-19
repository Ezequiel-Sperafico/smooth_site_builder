"use client";

import { Context, createContext, useCallback, useEffect, useRef } from "react";
import { findMissingNumberFromArray } from "../app/utils/findMissingNumberFromArray";

type TEvent = (event: MouseEvent) => void;
type TEventWrapper = { id: number; event: TEvent };

type TAdd = (event: TEvent) => number;
type TRemove = (id: number) => void;

interface IEventContext {
  addMouseMove?: TAdd;
  addMouseUp?: TAdd;
  removeMouseMove?: TRemove;
  removeMouseUp?: TRemove;
}

export const EventContext: Context<IEventContext> = createContext({});

export function EventExecutionQueueContext({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const mouseMoveBus = useRef<TEventWrapper[]>([]);
  const mouseUpBus = useRef<TEventWrapper[]>([]);

  const addMouseMove: TAdd = useCallback((eventHandler) => {
    const newId = findMissingNumberFromArray(
      mouseMoveBus.current.map((e) => e.id),
    );
    mouseMoveBus.current.push({
      id: newId,
      event: eventHandler,
    });
    return newId;
  }, []);

  const addMouseUp: TAdd = useCallback((eventHandler) => {
    const newId = findMissingNumberFromArray(
      mouseUpBus.current.map((e) => e.id),
    );
    mouseUpBus.current.push({
      id: newId,
      event: eventHandler,
    });
    return newId;
  }, []);

  const removeMouseMove: TRemove = useCallback((rmId) => {
    mouseMoveBus.current = mouseMoveBus.current.filter(({ id }) => id !== rmId);
  }, []);

  const removeMouseUp: TRemove = useCallback((rmId) => {
    mouseUpBus.current = mouseUpBus.current.filter(({ id }) => id !== rmId);
  }, []);

  useEffect(() => {
    const mousePreventSelection = (e: Event) => {
      e.preventDefault();
    };

    const mouseMoveListener = (event: MouseEvent) => {
      if (!mouseMoveBus.current.length) return;
      for (const { event: eventHandler } of mouseMoveBus.current) {
        eventHandler(event);
      }
    };

    const mouseUpListener = (event: MouseEvent) => {
      if (!mouseUpBus.current.length) return;
      for (const { event: eventHandler } of mouseUpBus.current) {
        eventHandler(event);
      }
    };

    document.addEventListener("selectstart", mousePreventSelection);
    window.addEventListener("mousemove", mouseMoveListener);
    window.addEventListener("mouseup", mouseUpListener);

    return () => {
      document.removeEventListener("selectstart", mousePreventSelection);
      window.removeEventListener("mousemove", mouseMoveListener);
      window.removeEventListener("mouseup", mouseUpListener);
    };
  }, []);

  return (
    <EventContext
      value={{ addMouseMove, addMouseUp, removeMouseMove, removeMouseUp }}
    >
      {...Array.isArray(children) ? children : [children]}
    </EventContext>
  );
}
