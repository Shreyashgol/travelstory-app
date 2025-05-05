import React, { useState } from "react";
import { FaPlus, FaImage,  FaFilePdf } from "react-icons/fa";

const Toolbar = ({textInput, setTextInput, handleAddText, handleImageUpload, elements,}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });


  return (
    <div className="flex gap-3 m-3">
      
      <textarea
        placeholder="Enter text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        rows={2}
        className="bg-white text-black border border-zinc-600 rounded-md p-2 resize-none w-full md:w-48 focus:outline-none h-full"
      />

      <button
        onClick={handleAddText}
        className="bg-amber-400 hover:bg-amber-600 p-2 rounded-full text-white"
        title="Add Text"
      >
        <FaPlus />
      </button>

      <label
        htmlFor="imageUpload"
        className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full text-white cursor-pointer"
        title="Upload Image"
      >
        <FaImage />
      </label>

      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

    
    </div>
  );
}

export default Toolbar;


