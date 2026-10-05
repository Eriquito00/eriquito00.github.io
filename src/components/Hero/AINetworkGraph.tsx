import { useEffect, useRef } from 'react';

interface GraphNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
}

const labels = ["JavaScript", "TypeScript", "React", "Node.js", "Python", "Java", "Express", "PHP", "MySQL", "PostgreSQL", "MongoDB", "Git", "GitHub", "Docker"];
const linkDistance = 150;

const getCssColor = (name: string, fallback: string) => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
};

export const AINetworkGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const context = canvas?.getContext('2d');

    if (!canvas || !parent || !context) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes: GraphNode[] = labels.map((label) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0025,
      vy: (Math.random() - 0.5) * 0.0025,
      label,
    }));
    let animationFrame = 0;

    const resize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = parent.clientWidth * pixelRatio;
      canvas.height = parent.clientHeight * pixelRatio;
      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = () => {
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      const accent = getCssColor('--accent', '#34d399');
      const ink = getCssColor('--ink', '#e7eee5');
      context.font = '12px IBM Plex Mono, monospace';

      context.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        if (!prefersReducedMotion) {
          const minX = 16 / width;
          const maxX = Math.max(minX, (width - context.measureText(node.label).width - 12) / width);
          const minY = 20 / height;
          const maxY = Math.max(minY, (height - 16) / height);
          const nextX = node.x + node.vx;
          const nextY = node.y + node.vy;

          if (nextX < minX) {
            node.x = minX;
            node.vx = Math.abs(node.vx);
          } else if (nextX > maxX) {
            node.x = maxX;
            node.vx = -Math.abs(node.vx);
          } else {
            node.x = nextX;
          }

          if (nextY < minY) {
            node.y = minY;
            node.vy = Math.abs(node.vy);
          } else if (nextY > maxY) {
            node.y = maxY;
            node.vy = -Math.abs(node.vy);
          } else {
            node.y = nextY;
          }
        } else {
          const minX = 16 / width;
          const maxX = Math.max(minX, (width - context.measureText(node.label).width - 12) / width);
          const minY = 20 / height;
          const maxY = Math.max(minY, (height - 16) / height);
          node.x = Math.min(maxX, Math.max(minX, node.x));
          node.y = Math.min(maxY, Math.max(minY, node.y));
        }
      });

      for (let first = 0; first < nodes.length; first += 1) {
        for (let second = first + 1; second < nodes.length; second += 1) {
          const firstNode = nodes[first];
          const secondNode = nodes[second];
          const dx = (firstNode.x - secondNode.x) * width;
          const dy = (firstNode.y - secondNode.y) * height;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < linkDistance) {
            context.beginPath();
            context.moveTo(firstNode.x * width, firstNode.y * height);
            context.lineTo(secondNode.x * width, secondNode.y * height);
            context.strokeStyle = accent;
            context.globalAlpha = 1 - distance / linkDistance;
            context.lineWidth = 1;
            context.stroke();
            context.globalAlpha = 1;
          }
        }
      }

      nodes.forEach((node) => {
        const x = node.x * width;
        const y = node.y * height;
        context.beginPath();
        context.arc(x, y, 4, 0, Math.PI * 2);
        context.fillStyle = accent;
        context.fill();
        context.fillStyle = ink;
        context.fillText(node.label, x + 8, y + 4);
      });

      if (!prefersReducedMotion) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    resize();
    draw();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="ai-network-graph" role="img" aria-label="Red interactiva de tecnologías e inteligencia artificial">
      <canvas ref={canvasRef} className="ai-network-graph-canvas" />
    </div>
  );
};

export default AINetworkGraph;
