import { DragWindow } from "@/src/components/dragWindow";
import { Grid } from "@/src/components/grid";

export function ElementWindow({ onClose }: { onClose: () => void }) {
  return (
    <DragWindow onClose={onClose} title="Elements">
      <Grid>
        <p>testeeeeeeeeeee</p>
        <p>testeeeeeeee</p>
        <p>testeeee</p>
        <p>testeeeeeeeeeeeeeeeee</p>
        <p>testeeeeeeeeeeeeeeeee</p>
        <p>testeeeeeeeeeeeeeeeee</p>
        <p>testeeeeeeeeeeeeeeeee</p>
        <p>testeeeeeeeeeeeeeeeee</p>
        <p>testeeeeeeeeeeeeeeeee</p>
        <p>testeeeeeeeeeeeeeeeee</p>
        <p>testeeeeeeeeeeeeeeeee</p>
        <p>testeeeeeeeeeeeeeeeee</p>
        <p>testeeeeeeeeeeeeeeeee</p>
        <p>testeeeeeeeeeeeeeeeee</p>
        <p>testeeeeeeeeeeeeeeeee</p>
      </Grid>
    </DragWindow>
  );
}
