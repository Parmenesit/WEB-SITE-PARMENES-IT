import { useEffect } from 'react';
import { ArrowLeft, Check, Phone, Headset, Server, Link as LinkIcon, Globe, Users, MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';

interface VoIPPageProps {
  navigateTo: (page: string) => void;
}

const VoIPPage = ({ navigateTo }: VoIPPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Phone className="w-8 h-8 text-[#A8CF45]" />,
      title: "PABX IP",
      description: "Central telefônica moderna e escalável, acessível de qualquer lugar."
    },
    {
      icon: <Headset className="w-8 h-8 text-[#A8CF45]" />,
      title: "Atendimento Automático",
      description: "URA inteligente para direcionamento eficiente de chamadas."
    },
    {
      icon: <Server className="w-8 h-8 text-[#A8CF45]" />,
      title: "Gravação de Chamadas",
      description: "Sistema completo de gravação para controle e qualidade."
    },
    {
      icon: <LinkIcon className="w-8 h-8 text-[#A8CF45]" />,
      title: "Integração CRM/ERP",
      description: "Conexão com sistemas corporativos para gestão unificada."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#A8CF45]" />,
      title: "Mobilidade Total",
      description: "Use ramais em qualquer lugar do mundo com internet."
    },
    {
      icon: <Users className="w-8 h-8 text-[#A8CF45]" />,
      title: "Teletrabalho",
      description: "Suporte completo para equipes remotas e híbridas."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
              Soluções VoIP
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Comunicação empresarial inteligente e econômica
            </p>
            <button 
              onClick={() => navigateTo('home')}
              className="inline-flex items-center text-white hover:text-[#A8CF45] transition-colors opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]"
            >
              <ArrowLeft size={20} className="mr-2" />
              <span>Voltar para a página inicial</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#4B4B4D] mb-6 text-center">
              Modernize sua Comunicação Empresarial
            </h2>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed">
              Na Parmenes IT, entendemos que a comunicação é o coração de qualquer negócio. 
              Por isso, oferecemos soluções VoIP (Voz sobre IP) de última geração, que garantem 
              mais eficiência, mobilidade e economia para sua empresa. Substitua sistemas telefônicos 
              tradicionais por uma plataforma moderna e flexível, que utiliza a internet para realizar 
              chamadas com alta qualidade e muito mais recursos.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#4B4B4D] mb-3">{feature.title}</h3>
                <p className="text-[#4B4B4D]/80">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Solutions Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Nossas Soluções</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Centrais Telefônicas IP</h4>
                <p className="text-[#4B4B4D]/80">
                  Gerencie todos os ramais da sua empresa com uma central moderna e escalável, 
                  acessível de qualquer lugar.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">URA Inteligente</h4>
                <p className="text-[#4B4B4D]/80">
                  Crie menus interativos para direcionar as chamadas de forma eficiente, 
                  reduzindo o tempo de espera.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Integração Corporativa</h4>
                <p className="text-[#4B4B4D]/80">
                  Conecte sua telefonia a CRMs, ERPs e outras ferramentas, centralizando 
                  informações e otimizando o atendimento.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Mobilidade Total</h4>
                <p className="text-[#4B4B4D]/80">
                  Use ramais VoIP em qualquer lugar do mundo, mantendo a comunicação da 
                  equipe integrada, mesmo fora do escritório.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Por que escolher a Parmenes IT?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Infraestrutura de alta qualidade com equipamentos robustos",
                "Soluções personalizadas para cada negócio",
                "Equipe técnica especializada e certificada",
                "Suporte completo desde o planejamento até a implantação",
                "Redução significativa nos custos de telefonia",
                "Integração com sistemas corporativos existentes"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="text-[#A8CF45] mt-1 flex-shrink-0" />
                  <span className="text-[#4B4B4D]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-4">
              Modernize sua comunicação hoje
            </h3>
            <p className="text-lg text-[#4B4B4D]/80 mb-8">
              Entre em contato e descubra como podemos transformar a comunicação da sua empresa!
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=551132302721&text=Como%20Podemos%20ajudar%20Hoje?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glow-effect bg-[#A8CF45] hover:bg-[#8fb938] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span>Fale com um Especialista</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoIPPage;