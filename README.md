TravelStory – Approach & Technical 

Approach
The goal was to build an intuitive and interactive web application for creating travel journals. The core interaction revolves around a drag-and-drop canvas where users can creatively place and manipulate content. The focus was on delivering smooth UX, modular code, and modern UI patterns while fulfilling all the required functionality:
  - Dynamic canvas for text/image placement.
  - Smooth saving animation using anime.js.
  - Export options including a video montage via Remotion and a PDF export using html2canvas + jsPDF .

Tech Choices

Feature                      Tech Stack
Frontend Framework           React with Vite for fast dev & build performance
Styling                      Tailwind CSS – utility-first, rapid prototyping
Draggable Elements           react-draggable for positioning text/images
Animation                    anime.js for save animation and smooth UI transitions
Video Generation             Remotion for programmatic React-based video creation
PDF Export                   html2canvas to capture canvas, jsPDF for export
Canvas Responsiveness        Tailwind + dynamic sizing to support 13”–15” laptops


Functionality Implementation
  - Canvas: Full-screen div acting as a drop zone. All elements are rendered within it and made draggable.
  - Text Editing: Users can edit content, color, font size in a floating editor/modal.
  - Image Upload: Drag-and-drop or upload button; images added to canvas.
  - Saving: Triggers an anime.js-based loading animation, then a success state.
  - Video Export: Renders the same canvas layout in a Remotion timeline with element animations.
  - PDF Export: Uses html2canvas to snapshot the canvas and convert it to a downloadable PDF using jsPDF.


Assumptions

-Users will be on modern browsers (Chrome, Firefox, Safari) on laptop-sized screens.
-Canvas interactivity (drag) is prioritized over rigid layout structure.
-Video generation is kept simple: one entry animation per element, no audio or transitions.
-PDF is exported from the static layout, without animations or interactivity.


<img width="1493" alt="Screenshot 2025-05-05 at 1 39 49 PM" src="https://github.com/user-attachments/assets/571e34fb-d1c8-4e35-9e59-1e5c72cef7a0" />



