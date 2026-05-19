import { DragWindow } from "@/lib/components/dragWindow";

export function ElementWindow({ onClose }: { onClose: () => void }) {
  return (
    <DragWindow onClose={onClose} title="Elements">
      <></>
    </DragWindow>
  );
}
