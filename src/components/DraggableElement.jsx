import React from "react";
import Draggable from "react-draggable";

function DraggableElement({ element, index, handleDragStop }) {
  return (
    <Draggable
      key={index}
      position={element.position}
      onStop={(e, data) => handleDragStop(e, data, index)}
      nodeRef={element.nodeRef}
      bounds="parent"
    >
      {element.type === "text" ? (
        <div
          ref={element.nodeRef}
          className="absolute test-base bg-white px-3 py-1.5 border border-gray-300 cursor-move select-none max-w-xs break-words"
        >
          {element.content}
        </div>
      ) : (
        <img
          ref={element.nodeRef}
          src={element.url}
          alt="uploaded"
          className="absolute max-w-[100px] w-full cursor-move border border-gray-300 object-contain"
        />
      )}
    </Draggable>
  );
}

export default DraggableElement;
