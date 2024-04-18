import "./App.css";
import Dnd from "./pages/dnd/Dnd";
// import First from "./pages/reactHookForm/First";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <>
      {/* <First /> */}

      <DndProvider backend={HTML5Backend}>
        <Dnd />
      </DndProvider>
    </>
  );
}

export default App;
