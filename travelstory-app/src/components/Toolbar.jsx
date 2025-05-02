import React from "react";

export default function Toolbar({ items, setItems,issaving,setIsSaving }) {
  const handleAddText = () => {
    const newText = {type: "text", content: "New Text", fontSize: "16px", color: "#000000", position: { x: 50, y: 50 }};
    setItems([...items, newText]);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const newImage = {type: "image", content: event.target.result, position: { x: 100, y: 100 } };
      setItems([...items, newImage]);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-2 bg-gray-100 flex gap-2 items-center">
      <button className="px-4 py-1 bg-blue-500 text-white rounded" onClick={handleAddText}>
      Add Text
      </button>
      <input type="file" accept="image/*" className="px-2" onChange={handleImageUpload} />
      <button className="px-4 py-1 bg-green-500 text-white rounded" onClick={() => setIsSaving(true)}>
        Save
      </button>
    </div>
  );
}
