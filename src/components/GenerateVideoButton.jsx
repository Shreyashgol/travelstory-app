import React from 'react';

export const GenerateVideoButton = ({ canvasElements }) => {
  const handleGenerateVideo = () => {
    const formattedElements = canvasElements.map((el) => ({
      id: el.id,
      type: el.type, 
      content: el.type === 'text' ? el.text : el.imageUrl,
      x: el.position.x,
      y: el.position.y,
    }));

    const blob = new Blob([JSON.stringify(formattedElements, null, 2)], {
      type: 'application/json',
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'travelStoryElements.json';
    a.click();
    URL.revokeObjectURL(url);

  };

  return (
    <button
      onClick={handleGenerateVideo}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Generate Travel Video
    </button>
  );
};