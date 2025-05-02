import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import FAQ from '../components/FAQ';
import ClientLogos from '../components/ClientLogos';
import ContactForm from '../components/ContactForm';
import CallToAction from '../components/CallToAction';
import VideoHero from '../components/VideoHero';
import { services } from '../data/services';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';

interface HomeProps {
  navigateTo: (page: string, serviceData?: any) => void;
}

const Home = ({ navigateTo }: HomeProps) => {
  const handleServiceClick = (service: any) => {
    navigateTo('service', service);
  };

  return (
    <div>
      {/* Video Hero */}
      <VideoHero />
      
      {/* Services Carousel */}
      <section className="mt-0">
        <Carousel services={services} onServiceClick={handleServiceClick} />
      </section>
      
      {/* About Section */}
      <section id="about" className={`py-16 bg-[${theme.colors.background.light}]`}>
        <AboutSection navigateTo={navigateTo} />
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className={`py-16 bg-[${theme.colors.white}]`}>
        <FAQ />
      </section>
      
      {/* Call to Action */}
      <CallToAction />
      
      {/* Client Logos */}
      <section id="clients" className={`py-16 bg-[${theme.colors.background.light}]`}>
        <ClientLogos />
      </section>
      
      {/* Contact Section */}
      <section id="contact" className={`py-16 bg-[${theme.colors.white}]`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center text-[${theme.colors.secondary}] mb-12`}>Entre em Contato</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Info and Map */}
            <div className="space-y-6">
              <div className={`bg-[${theme.colors.primary}]/10 p-8 rounded-lg`}>
                <h3 className={`text-2xl font-bold text-[${theme.colors.secondary}] mb-6`}>Nossos Contatos</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className={`text-[${theme.colors.primary}] mr-4 mt-1`} size={24} />
                    <div>
                      <h4 className={`font-semibold text-[${theme.colors.secondary}]`}>Telefone</h4>
                      <p className={`text-[${theme.colors.secondary}]`}>(11) 3230-2721</p>
                      <div className="flex items-center mt-1">
                        <a 
                          href="https://wa.me/551132302721"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-[#25D366] hover:text-[#128C7E] transition-colors"
                        >
                          <MessageCircle size={18} className="mr-2" />
                          <span className={`text-[${theme.colors.secondary}]`}>WhatsApp: +55(11) 3230-2721</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className={`text-[${theme.colors.primary}] mr-4 mt-1`} size={24} />
                    <div>
                      <h4 className={`font-semibold text-[${theme.colors.secondary}]`}>Email</h4>
                      <p className={`text-[${theme.colors.secondary}]`}>contato@parmenes.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className={`text-[${theme.colors.primary}] mr-4 mt-1`} size={24} />
                    <div>
                      <h4 className={`font-semibold text-[${theme.colors.secondary}]`}>Endereço</h4>
                      <p className={`text-[${theme.colors.secondary}]`}>São Paulo, Brazil</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className={`font-semibold text-[${theme.colors.secondary}] mb-4`}>Horário de Atendimento</h4>
                  <p className={`text-[${theme.colors.secondary}]`}>Segunda a Quinta: 8h às 18h</p>
                  <p className={`text-[${theme.colors.secondary}]`}>Sexta: 8h às 17h</p>
                </div>
              </div>

              {/* Google Maps */}
              <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234055.2795870504!2d-46.8754915576172!3d-23.6821604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1710861145333!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;