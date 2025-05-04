import React from "react";
import DraggableElement from "./DraggableElement";

function Canvas({ elements, handleDragStop }) {
  return (
    <>
    <h1 className="text-center mb font-bold text-5xl m-20">Drive into your Memories</h1>
    <div
      id="canvas"
      className="mx-auto w-[93%] max-w-7xl h-[80vh] md:h-[85vh] lg:h-[50vh] border-2  border-gray-500 relative bg-#fbf5f1 mb-50 mt-40"
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
    </>
  );
}

export default Canvas;
