"use client";

import { CollapsableMenu } from "@/lib/components/collapsableMenu";
import { Switch } from "@/lib/components/switch";
import { Monitor, Smartphone } from "lucide-react";
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
      <div className="h-full pl-11 flex items-center">
        <Switch
          value={aspect}
          options={[
            { icon: Smartphone, value: "celphone" },
            { icon: Monitor, value: "wide" },
          ]}
          onChange={(v) => {
            setAspect(v);
          }}
        />
      </div>
    </CollapsableMenu>
  );
}
