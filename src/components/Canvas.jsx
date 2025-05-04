import React from "react";
import DraggableElement from "./DraggableElement";

function Canvas({ elements, handleDragStop }) {
  return (
    <div
      id="canvas"
      className="mt-5 mx-auto w-[93%] max-w-7xl h-[80vh] md:h-[85vh] lg:h-[90vh] border-2  border-gray-500 relative bg-#fbf5f1"
    >
      {elements.map((element, index) => (
        <DraggableElement
          key={index}
          element={element}
          index={index}
          handleDragStop={handleDragStop}
        />
      ))}
    </div>
  );
}

export default Canvas;
