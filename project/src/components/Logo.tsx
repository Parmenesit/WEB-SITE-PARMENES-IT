import { useMemo } from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Logo = ({ className = '', size = 'medium' }: LogoProps) => {
  const dimensions = useMemo(() => {
    const sizes = {
      small: { height: 40, width: 160 },
      medium: { height: 60, width: 240 },
      large: { height: 80, width: 320 }
    };
    return sizes[size];
  }, [size]);

  return (
    <img 
      src="/src/assets/images/logo.png"
      alt="Parmenes IT" 
      className={`w-auto object-contain ${className}`}
      style={{
        height: dimensions.height,
        width: dimensions.width,
        maxWidth: '100%'
      }}
    />
  );
};

export default Logo;