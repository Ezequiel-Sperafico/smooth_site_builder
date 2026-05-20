import { EventExecutionQueueContext } from "../contexts/eventListenerBus";
import { SideBar } from "./menu/sideBar";
import { TopBar } from "./menu/topBar";
import { ElementWindow } from "./windows/elementWindow";

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
