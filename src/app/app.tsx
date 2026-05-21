import { EventExecutionQueueContext } from "../contexts/eventListenerBus";
import { SideBar } from "./outerLayer/menu/sideBar";
import { TopBar } from "./outerLayer/menu/topBar";
import { ElementWindow } from "./outerLayer/windows/elementWindow";

export function App() {
  return (
    <div className="w-full h-full">
      <EventExecutionQueueContext>
        <SideBar />
        <TopBar />
        <ElementWindow
          onClose={async () => {
            "use server";
          }}
        />
        <ElementWindow
          onClose={async () => {
            "use server";
          }}
        />
      </EventExecutionQueueContext>
    </div>
  );
}
