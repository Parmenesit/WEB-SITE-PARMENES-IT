import { theme } from '../styles/theme';
import Logo from './Logo';

const VideoHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/0x5mf8BUJZY?autoplay=1&loop=1&playlist=0x5mf8BUJZY&t=20&mute=1&playsinline=1&controls=0&showinfo=0&autohide=1&allowfullscreen=true&mode=transparent"
          title="Parmenes IT Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            pointerEvents: 'none',
            transform: 'scale(1.2)',
          }}
        />
      </div>
      
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: theme.colors.black, opacity: theme.opacity.medium }}
      />

      <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <Logo size="large" className="mb-8 max-w-[400px] w-full" />
        <p className={`text-[${theme.colors.white}] text-xl md:text-2xl`}>
          Conectando seu mundo!
        </p>
      </div>
    </section>
  );
};

export default VideoHero;