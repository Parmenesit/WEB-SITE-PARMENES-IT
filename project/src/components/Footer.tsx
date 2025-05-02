import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';
import { theme } from '../styles/theme';
import sslSecureLogo from '../assets/images/security/ssl-secure.png';
import googleSafeLogo from '../assets/images/security/google-safe.png';

const Footer = () => {
  return (
    <footer className={`bg-[${theme.colors.primary}] text-[${theme.colors.white}]`}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="medium" className="max-w-[200px]" />
            <p className="text-sm">Conectando seu mundo desde 2010. Especialistas em infraestrutura, Cloud e VoIP.</p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' }
              ].map(({ icon: Icon, label, href }) => (
                <a 
                  key={label}
                  href={href}
                  className="social-icon-effect text-white hover:text-[#8fb938]"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+551132302721" className="link-effect">(11) 3230-2721</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="https://wa.me/551132302721" className="link-effect">WhatsApp: +55(11) 3230-2721</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:contato@parmenes.com.br" className="link-effect">contato@parmenes.com.br</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <a 
                  href="https://goo.gl/maps/YOUR_LOCATION" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-effect"
                >
                  São Paulo, Brazil
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Atendimento', 'Sobre Nós', 'Contato'].map((item) => (
                <li key={item}>
                  <a href="#" className="link-effect">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Seals */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Segurança</h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://www.ssl.com/article/ssl-certificates-explained/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-effect bg-white p-2 rounded w-24 h-12 flex items-center justify-center"
              >
                <img 
                  src={sslSecureLogo} 
                  alt="SSL Secure" 
                  className="w-full h-full object-contain"
                />
              </a>
              <a 
                href="https://safebrowsing.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-effect bg-white p-2 rounded w-24 h-12 flex items-center justify-center"
              >
                <img 
                  src={googleSafeLogo} 
                  alt="Google Safe Browsing" 
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Important Links Section */}
        <div className="mt-8 pt-4 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm">
              <p>© Copyright 2025 Parmenes IT - All Rights Reserved - CNPJ 37.638.493/0001-08</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-start md:justify-end text-sm">
              {[
                { text: 'Termos de Serviço', href: '/termos-de-servico' },
                { text: 'Aviso Legal', href: '/aviso-legal' },
                { text: 'Política de Privacidade', href: '/politica-de-privacidade' }
              ].map((link, index) => (
                <>
                  <a 
                    key={link.text}
                    href={link.href}
                    className="border-effect hover:text-[#8fb938]"
                  >
                    {link.text}
                  </a>
                  {index < 2 && <span className="text-white/30">|</span>}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;