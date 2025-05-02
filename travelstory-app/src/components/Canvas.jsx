import React from "react";
import Draggable from "react-draggable";

export default function Canvas({ items, setItems }) {
  return (
    <div
      id="canvas"
      className="flex-1 bg-white relative overflow-hidden border"
    >
      {items.map((item, index) => (
        <Draggable key={index} defaultPosition={item.position}>
          <div className="absolute">
            {item.type === "image" ? (
              <img src={item.content} className="max-w-xs" />
            ) : (
              <div
                contentEditable
                suppressContentEditableWarning
                style={{ color: item.color, fontSize: item.fontSize }}
                className="border p-1 bg-white"
              >
                {item.content}
              </div>
            )}
          </div>
        </Draggable>
      ))}
    </div>
  );
}

