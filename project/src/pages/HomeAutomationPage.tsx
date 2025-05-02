import { useEffect } from 'react';
import { ArrowLeft, Check, Home, Lightbulb, Thermometer, Shield, Mic, Power, MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';

interface HomeAutomationPageProps {
  navigateTo: (page: string) => void;
}

const HomeAutomationPage = ({ navigateTo }: HomeAutomationPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#A8CF45]" />,
      title: "Iluminação Inteligente",
      description: "Controle automatizado com cenários personalizados para cada momento."
    },
    {
      icon: <Thermometer className="w-8 h-8 text-[#A8CF45]" />,
      title: "Climatização Smart",
      description: "Gestão eficiente da temperatura e qualidade do ar."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#A8CF45]" />,
      title: "Segurança Avançada",
      description: "Monitoramento e controle de acesso integrados."
    },
    {
      icon: <Mic className="w-8 h-8 text-[#A8CF45]" />,
      title: "Assistentes Virtuais",
      description: "Integração com Alexa, Google Assistant e Apple HomeKit."
    },
    {
      icon: <Power className="w-8 h-8 text-[#A8CF45]" />,
      title: "Gestão de Energia",
      description: "Controle inteligente do consumo de energia."
    },
    {
      icon: <Home className="w-8 h-8 text-[#A8CF45]" />,
      title: "Casa Conectada",
      description: "Eletrodomésticos e dispositivos integrados."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
              Automação Residencial
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Transforme sua casa em um ambiente inteligente e conectado
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
              O Futuro da Casa Inteligente
            </h2>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed">
              Na Parmenes IT, acreditamos que a tecnologia pode transformar vidas, trazendo mais 
              conforto, praticidade e segurança ao seu lar. Nossas soluções de automação residencial 
              incorporam o que há de mais sofisticado no mercado de IoT (Internet das Coisas), 
              permitindo o controle total da sua casa através do smartphone ou comandos de voz.
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
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Soluções Inteligentes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Iluminação Personalizada</h4>
                <p className="text-[#4B4B4D]/80">
                  Crie cenários de iluminação para cada momento do dia, com controle 
                  automático de intensidade e cores.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Conforto Térmico</h4>
                <p className="text-[#4B4B4D]/80">
                  Climatização inteligente que se adapta às suas preferências e 
                  rotina, economizando energia.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Segurança Integrada</h4>
                <p className="text-[#4B4B4D]/80">
                  Câmeras, sensores e fechaduras inteligentes conectados ao seu 
                  smartphone para monitoramento em tempo real.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Controle por Voz</h4>
                <p className="text-[#4B4B4D]/80">
                  Integração com assistentes virtuais para controle hands-free de 
                  todos os dispositivos.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Benefícios da Automação</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Controle total da iluminação com cenários personalizados",
                "Climatização inteligente com eficiência energética",
                "Sistema de segurança avançado com monitoramento remoto",
                "Integração com principais assistentes virtuais",
                "Eletrodomésticos conectados para maior praticidade",
                "Economia de energia e sustentabilidade"
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
              Transforme sua casa hoje mesmo
            </h3>
            <p className="text-lg text-[#4B4B4D]/80 mb-8">
              Entre em contato e descubra como podemos tornar sua casa mais inteligente e conectada!
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

export default HomeAutomationPage;