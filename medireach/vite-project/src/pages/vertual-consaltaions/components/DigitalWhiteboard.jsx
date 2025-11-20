import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DigitalWhiteboard = ({ isOpen, onClose }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState('pen');
  const [color, setColor] = useState('#2563EB');
  const [lineWidth, setLineWidth] = useState(3);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const colors = [
    { name: 'Blue', value: '#2563EB' },
    { name: 'Red', value: '#DC2626' },
    { name: 'Green', value: '#059669' },
    { name: 'Black', value: '#1E293B' },
    { name: 'Yellow', value: '#D97706' }
  ];

  const tools = [
    { name: 'Pen', icon: 'Pen', value: 'pen' },
    { name: 'Eraser', icon: 'Eraser', value: 'eraser' },
    { name: 'Text', icon: 'Type', value: 'text' }
  ];

  useEffect(() => {
    if (canvasRef?.current) {
      const canvas = canvasRef?.current;
      canvas.width = canvas?.offsetWidth * 2;
      canvas.height = canvas?.offsetHeight * 2;
      canvas.style.width = `${canvas?.offsetWidth}px`;
      canvas.style.height = `${canvas?.offsetHeight}px`;

      const context = canvas?.getContext('2d');
      context?.scale(2, 2);
      context.lineCap = 'round';
      context.strokeStyle = color;
      context.lineWidth = lineWidth;
      contextRef.current = context;
    }
  }, []);

  useEffect(() => {
    if (contextRef?.current) {
      contextRef.current.strokeStyle = tool === 'eraser' ? '#FFFFFF' : color;
      contextRef.current.lineWidth = tool === 'eraser' ? lineWidth * 3 : lineWidth;
    }
  }, [tool, color, lineWidth]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef?.current?.beginPath();
    contextRef?.current?.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef?.current?.lineTo(offsetX, offsetY);
    contextRef?.current?.stroke();
  };

  const stopDrawing = () => {
    contextRef?.current?.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef?.current;
    const context = canvas?.getContext('2d');
    context.fillStyle = '#FFFFFF';
    context?.fillRect(0, 0, canvas?.width, canvas?.height);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-strong w-full max-w-5xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="PenTool" size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Digital Whiteboard</h3>
              <p className="text-xs text-muted-foreground">Illustrate medical concepts visually</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close whiteboard"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-4 p-4 border-b border-border bg-muted/30">
          {/* Tools */}
          <div className="flex items-center gap-2">
            {tools?.map((t) => (
              <button
                key={t?.value}
                onClick={() => setTool(t?.value)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  tool === t?.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background hover:bg-muted'
                }`}
                aria-label={t?.name}
              >
                <Icon name={t?.icon} size={20} />
              </button>
            ))}
          </div>

          <div className="w-px h-8 bg-border" />

          {/* Colors */}
          <div className="flex items-center gap-2">
            {colors?.map((c) => (
              <button
                key={c?.value}
                onClick={() => setColor(c?.value)}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                  color === c?.value ? 'border-foreground scale-110' : 'border-transparent'
                }`}
                style={{ backgroundColor: c?.value }}
                aria-label={c?.name}
              />
            ))}
          </div>

          <div className="w-px h-8 bg-border" />

          {/* Line Width */}
          <div className="flex items-center gap-2">
            <Icon name="Minus" size={16} />
            <input
              type="range"
              min="1"
              max="10"
              value={lineWidth}
              onChange={(e) => setLineWidth(Number(e?.target?.value))}
              className="w-24"
            />
            <Icon name="Plus" size={16} />
          </div>

          <div className="flex-1" />

          {/* Actions */}
          <Button
            variant="outline"
            size="sm"
            iconName="RotateCcw"
            iconPosition="left"
            onClick={clearCanvas}
          >
            Clear
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="Download"
            iconPosition="left"
          >
            Save
          </Button>
        </div>

        {/* Canvas */}
        <div className="flex-1 p-4 overflow-hidden">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            className="w-full h-full bg-white rounded-lg shadow-medium cursor-crosshair"
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalWhiteboard;