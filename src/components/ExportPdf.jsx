import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";



const ExportPdf = () => {
  const exportToPDF = async () => {
    const canvasElement = document.getElementById("canvas");
    if (!canvasElement) return;

    const canvasImage = await html2canvas(canvasElement);
    const imgData = canvasImage.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [500,980],
    });

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const scaleX = pdfWidth / canvasWidth;
    const scaleY = pdfHeight / canvasHeight;

    const scale = Math.min(scaleX, scaleY);

    const imgWidth = canvasWidth * scale;
    const imgHeight = canvasHeight * scale;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

    pdf.save("canvas-content.pdf");
    
  };
  return (
    <button onClick={exportToPDF} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
  Export as PDF
</button>
  )
};

export default ExportPdf;
