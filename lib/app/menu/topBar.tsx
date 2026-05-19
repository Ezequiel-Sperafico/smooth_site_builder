"use client";

import { Button } from "@/lib/components/button";
import { CollapsableMenu } from "@/lib/components/collapsableMenu";
import { IconButton } from "@/lib/components/iconButton";
import { Switch } from "@/lib/components/switch";
import { Monitor, Redo2, Smartphone, Undo2 } from "lucide-react";
import { useState } from "react";

export function TopBar() {
  const [open, setOpen] = useState(false);

  const [aspect, setAspect] = useState<"celphone" | "wide">("wide");

  return (
    <CollapsableMenu
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      axis="top"
      open={open}
      border
    >
      <div className="h-full pl-9 flex items-center justify-between">
        <div className="flex h-full items-center">
          <IconButton
            icon={Undo2}
            onClick={() => {}}
            outerClass="text-gray-800 rounded-full hover:bg-gray-800 hover:text-gray-200"
            title="Undo"
          />
          <IconButton
            icon={Redo2}
            onClick={() => {}}
            outerClass="text-gray-800 mr-3 text-gray-800 p-0.5 rounded-full hover:bg-gray-800 hover:text-gray-200"
            title="Redo"
          />
          <Switch
            value={aspect}
            options={[
              { icon: Smartphone, value: "celphone" },
              { icon: Monitor, value: "wide" },
            ]}
            onChange={(v) => {
              setAspect(v);
            }}
            className="mr-3"
          />
        </div>

        <div>
          <Button onClick={() => {}}>Salvar</Button>
        </div>
      </div>
    </CollapsableMenu>
  );
}
