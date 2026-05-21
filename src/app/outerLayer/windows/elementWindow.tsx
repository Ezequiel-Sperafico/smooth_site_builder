import { DragWindow } from "@/src/components/dragWindow/dragWindow";
import { Grid } from "@/src/components/grid";

export function ElementWindow({ onClose }: { onClose: () => void }) {
  return (
    <DragWindow onClose={onClose} title="Elements">
      <Grid>
        <div>
          <span>testeeeeeeeeeee</span>
        </div>
        <div>
          <span>testeeeeeeee</span>
        </div>
        <div>
          <span>testeeee</span>
        </div>
        <div>
          <span>testeeeeeeeeeeeeeeeee</span>
        </div>
        <div>
          <span>testeeeeeeeeeeeeeeeee</span>
        </div>
        <div>
          <span>testeeeeeeeeeeeeeeeee</span>
        </div>
        <div>
          <span>testeeeeeeeeeeeeeeeee</span>
        </div>
        <div>
          <span>testeeeeeeeeeeeeeeeee</span>
        </div>
        <div>
          <span>testeeeeeeeeeeeeeeeee</span>
        </div>
        <div>
          <span>testeeeeeeeeeeeeeeeee</span>
        </div>
        <div>
          <span>testeeeeeeeeeeeeeeeee</span>
        </div>
        <div>
          <span>testeeeeeeeeeeeeeeeee</span>
        </div>
        <div>
          <span>testeeeeeeeeeeeeeeeee</span>
        </div>
        <div>
          <span>testeeeeeeeeeeeeeeeee</span>
        </div>
        <div>
          <span>testeeeeeeeeeeeeeeeee</span>
        </div>
      </Grid>
    </DragWindow>
  );
}
