

interface ColorDotsProps {
  colors: string[];
}

export function ColorDots({ colors }: ColorDotsProps) {
  return (
    <div className="color-dots d-flex gap-3">
      {colors.map((color) => (
        <div
          key={color}
          className="dot"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}