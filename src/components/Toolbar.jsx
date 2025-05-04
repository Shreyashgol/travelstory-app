import React, { useState } from "react";
import { FaPlus, FaImage,  FaFilePdf } from "react-icons/fa";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Toolbar = ({textInput, setTextInput, handleAddText, handleImageUpload, elements,}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - toolbarPosition.x,
      y: e.clientY - toolbarPosition.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setToolbarPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const exportToPDF = async () => {
    const canvasElement = document.getElementById('journal-canvas');
    if (!canvasElement) return;
  
    const canvasImage = await html2canvas(canvasElement);
    const imgData = canvasImage.toDataURL('image/png');
  
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvasImage.width, canvasImage.height],
    });
  
    pdf.addImage(imgData, 'PNG', 0, 0, canvasImage.width, canvasImage.height);
    pdf.save('TravelStory_Journal.pdf');
  };
  

  return (
    <div
      className={`fixed bottom-5 right-5 bg-zinc-900 rounded-xl p-4 shadow-xl flex flex-wrap md:flex-nowrap items-center gap-3 z-[9999] cursor-grab ${
        isDragging ? "cursor-grabbing" : ""
      }`}
      style={{
        transform: `translate(${toolbarPosition.x}px, ${toolbarPosition.y}px)`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      
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


