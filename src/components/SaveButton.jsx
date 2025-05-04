import React, { useState } from 'react';
import anime from 'animejs';

function SaveButton() {
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleSave = () => {
    setSaving(true);
    setMessage('Saving your story...');

    anime({
      targets: '#save-animation',
      width: ['0%', '100%'],
      easing: 'easeInOutQuad',
      duration: 2000,
      complete: () => {
        setSaving(false);
        setMessage('Journal saved successfully!');
      },
    });
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <button
        onClick={handleSave}
        disabled={saving}
        className={`px-5 py-2 rounded-md text-white font-semibold transition-colors duration-300 ${
          saving
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-900 hover:bg-blue-600 cursor-pointer'
        }`}
      >
        {saving ? 'Saving...' : 'Save'}
      </button>

      <div className="mt-5 w-full h-2 bg-gray-300 rounded-md overflow-hidden relative">
        <div
          id="save-animation"
          className="h-full bg-yellow-600 w-0 transition-all duration-300"
        ></div>
      </div>

      {message && (
        <p
          className={`mt-3 font-bold ${
            saving ? 'text-blue-600' : 'bg-yellow-400'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default SaveButton;
