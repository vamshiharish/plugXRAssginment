import "./index.css"
import React, { useState } from 'react';

const ResizableSection = ({ isResizableVisible }) => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e) => {
    setDragging(true);
    const initialX = e.clientX - position.x;
    const initialY = e.clientY - position.y;
    const handleMouseMove = (e) => {
      if (dragging) {
        const newX = e.clientX - initialX;
        const newY = e.clientY - initialY;
        setPosition({ x: newX, y: newY });
      }
    };
    const handleMouseUp = () => {
      setDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const styledDargger = {
        width: '100px',
        height: '100px',
        backgroundColor: 'lightblue',
        position: 'absolute',
        left: position.x + 'px',
        top: position.y + 'px',
        cursor: 'grab',
  }

  return (
    <>
    {isResizableVisible && <ResizableSection className="style-drager"/>}
    <div style = {isResizableVisible ? styledDargger : null}
      onMouseDown={handleMouseDown} className="drag-btn"
    >
    {isResizableVisible? <button className='cancel-btn' type="button">x</button> : null}
    </div>
    </>
  );
};

export default ResizableSection;
