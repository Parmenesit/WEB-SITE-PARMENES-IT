import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=551132302721&text=Como%20Podemos%20ajudar%20Hoje?"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[72px] right-6 z-50 bg-[#25D366]/80 hover:bg-[#128C7E]/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;