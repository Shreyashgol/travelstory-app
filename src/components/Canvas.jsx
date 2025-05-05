import React from "react";
import DraggableElement from "./DraggableElement";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

function Canvas({ elements, handleDragStop }) {
  const exportToPDF = async () => {
    const canvasElement = document.getElementById("canvas");
    if (!canvasElement) return;

    const canvasImage = await html2canvas(canvasElement);
    const imgData = canvasImage.toDataURL("image/png");

    const pdfWidth = 590;
    const pdfHeight = 842;

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [pdfWidth, pdfHeight],
    });

    const canvasWidth = canvasImage.width;
    const canvasHeight = canvasImage.height;

    const scaleX = pdfWidth / canvasWidth;
    const scaleY = pdfHeight / canvasHeight;

    const scale = Math.min(scaleX, scaleY);

    const imgWidth = canvasWidth * scale;
    const imgHeight = canvasHeight * scale;

    const offsetX = (pdfWidth - imgWidth) / 2;
    const offsetY = (pdfHeight - imgHeight) / 2;

    pdf.addImage(imgData, "PNG", offsetX, offsetY, imgWidth, imgHeight);
    pdf.save("TravelStory.pdf");
  };

  return (
    <>
    <h1 className="text-center mb font-bold text-5xl m-20 text-blue-500 bg-white">Drive into your Memories</h1>
    <div
      id="canvas"
      className="mx-auto w-[93%] max-w-7xl h-[80vh] md:h-[85vh] lg:h-[50vh] border-2  border-gray-500 relative bg-#fbf5f1 mb-50 mt-4"
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
    <div className="flex justify-center mt-4">
      <button
        onClick={exportToPDF}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Export as PDF
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Generate a Video
      </button>
    </div>
    </>
  );
}

export default Canvas;
