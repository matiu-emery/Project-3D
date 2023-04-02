import { useEffect, useRef } from 'react';


//CANVAS DIPLAY 
export function Scene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    createScene(canvas);
  }, []);

   return <canvas ref={canvasRef} width={800} height={600} />;
}
