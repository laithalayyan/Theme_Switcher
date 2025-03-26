
import { useTheme } from '../context/ThemeContext';
import { Palette } from 'lucide-react';
import { ColorDots } from './ColorDots';

export function ThemedComponent() {
  const { theme } = useTheme();
  const colors = ['#3b82f6', '#60a5fa', '#93c5fd'];
  
  return (
    <div className="theme-card card p-4 rounded-4 shadow-lg slide-in">
      <div className="d-flex align-items-center gap-3 mb-4">
        <div className="float-animation">
          <Palette size={32} style={{ color: 'var(--accent)' }} />
        </div>
        <h2 className="display-6 m-0" style={{ color: 'var(--accent)' }}>
          Theme Switcher
        </h2>
      </div>
      
      <div className="d-flex flex-column gap-4">
        <div className="p-3 rounded-3 bg-opacity-10 bg-secondary">
          <p className="m-0">
            Current theme: <span className="fw-bold" style={{ color: 'var(--accent)' }}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </span>
          </p>
        </div>

        <p className="text-opacity-75">
          Experience seamless theme switching with our React Context API implementation.
          The interface automatically adapts to your preference, providing optimal
          visibility and comfort in both light and dark environments.
        </p>

        <ColorDots colors={colors} />
      </div>
    </div>
  );
}