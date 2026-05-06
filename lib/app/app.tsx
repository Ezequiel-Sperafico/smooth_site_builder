import { DragWindow } from "../components/dragWindow";
import { SideBar } from "./menu/sideBar";
import { TopBar } from "./menu/topBar";

export function App() {
  return (
    <div className="w-full h-full">
      <SideBar />
      <TopBar />
      <DragWindow />
      <DragWindow />
      <DragWindow />
      <DragWindow />
      <DragWindow />
      <DragWindow />
      <DragWindow />
      <DragWindow />
      <DragWindow />
      <DragWindow />
    </div>
  );
}
