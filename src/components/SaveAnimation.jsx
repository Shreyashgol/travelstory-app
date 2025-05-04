import { animate, createSpring } from 'animejs';
import React, { useState, useEffect } from 'react';

function SaveAnimation() {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setSaved(false);

    animate('.save-button', {
      scale: [
        { to: 0.95, duration: 100 },
        { to: 1, duration: 200, easing: createSpring({ stiffness: 400 }) }
      ]
    });

    setTimeout(() => {
      setSaving(false);
      setSaved(true);
    }, 5000);
  };

  useEffect(() => {
    if (saving) {
      try {
        animate('.progress-bar', {
          width: ['0%', '100%'],
          duration: 5000,
          easing: 'inOut(2)',
        });

        animate('.progress-bar', {
          scaleX: [
            { to: 1.1, duration: 100 },
            { to: 1, duration: 200, easing: createSpring({ stiffness: 300 }) }
          ],
          delay: 2000,
        });
      } catch (error) {
        console.error('Error animating progress bar:', error);
      }
    }
  }, [saving]);

  useEffect(() => {
    if (saved) {
      try {
        animate('.success-message', {
          opacity: [0, 1],
          translateY: [20, 0],
          scale: [
            { to: 1.25, duration: 200, ease: 'inOut(3)' },
            { to: 1, ease: createSpring({ stiffness: 300 }) }
          ],
        });

        const timeout = setTimeout(() => {
          setSaved(false);
        }, 3000);

        return () => clearTimeout(timeout);
      } catch (error) {
        console.error('Error animating success message:', error);
      }
    }
  }, [saved]);

  return (
    <div className="text-center mt-10 relative">
      <button
        onClick={handleSave}
        disabled={saving}
        className={`save-button fixed top-5 right-5 px-6 py-3 text-base font-bold text-white rounded-full shadow-lg z-50 transition-all duration-300 ${
          saving
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-xl'
        }`}
      >
        {saving ? 'Saving...' : '💾 Save'}
      </button>

      {saving && (
        <div className="overlay fixed inset-0 bg-white/60 backdrop-blur-sm z-40 flex flex-col justify-center items-center">
          <div className="progress-bar h-2 w-4/5 max-w-xl bg-green-500 rounded-full transition-all duration-300"></div>
          <p className="mt-3 font-semibold text-gray-800">Saving your story...</p>
        </div>
      )}

      {saved && (
        <p className="success-message fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-90 bg-green-100 text-green-800 font-bold px-6 py-4 rounded-xl shadow-lg z-50">
          ✅ Journal saved successfully!
        </p>
      )}
    </div>
  );
}

export default SaveAnimation;




