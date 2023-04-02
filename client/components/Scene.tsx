import { useEffect, useRef } from 'react';
import { createScene } from '../../server/scene';

//CANVAS DIPLAY 
export function Scene() {
  // Create a reference to the HTML canvas element
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Use the useEffect hook to create the 3D scene once the component has mounted
  useEffect(() => {
    // Get the current value of the canvas reference
    const canvas = canvasRef.current;
    // If the canvas reference is null, return early
    if (!canvas) return;
    // Create the 3D scene using the createScene function and pass in the canvas element
    createScene(canvas);
  }, []);

  // Return the canvas element with a reference to the canvasRef
  return <canvas ref={canvasRef} width={800} height={600} />;
}
