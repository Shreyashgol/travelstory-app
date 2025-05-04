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

    pdf.addImage(imgData, "PNG", 0, 0, canvasImage.width, canvasImage.height);
    pdf.save("TravelStory_Journal.pdf");
  };
  return (
    <button onClick={exportToPDF} class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
  Export as PDF
</button>
  )
};

export default ExportPdf;
