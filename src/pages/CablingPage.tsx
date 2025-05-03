import { useEffect } from 'react';
import { ArrowLeft, Check, Cable, Network, Layout, PenTool as Tool, Settings, Shield, MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';

interface CablingPageProps {
  navigateTo: (page: string) => void;
}

const CablingPage = ({ navigateTo }: CablingPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Cable className="w-8 h-8 text-[#A8CF45]" />,
      title: "Cabeamento de Alta Qualidade",
      description: "Materiais premium para garantir durabilidade e performance."
    },
    {
      icon: <Network className="w-8 h-8 text-[#A8CF45]" />,
      title: "Organização Profissional",
      description: "Estruturação eficiente de racks e painéis de conexão."
    },
    {
      icon: <Layout className="w-8 h-8 text-[#A8CF45]" />,
      title: "Identificação Detalhada",
      description: "Sistema completo de identificação e padronização."
    },
    {
      icon: <Tool className="w-8 h-8 text-[#A8CF45]" />,
      title: "Manutenção Simplificada",
      description: "Fácil acesso e gestão da infraestrutura."
    },
    {
      icon: <Settings className="w-8 h-8 text-[#A8CF45]" />,
      title: "Escalabilidade",
      description: "Preparação para crescimento e expansões futuras."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#A8CF45]" />,
      title: "Certificação",
      description: "Testes e certificações de todas as conexões."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
              Cabeamento Estruturado
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Excelência em infraestrutura de redes com cabeamento organizado e eficiente
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
              Infraestrutura de Redes de Excelência
            </h2>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed">
              Quando o assunto é infraestrutura de redes de comunicação, a Parmenes IT se destaca como 
              referência em soluções de cabeamento estruturado, proporcionando eficiência e organização 
              para empresas que buscam alta performance em suas operações. Nossa experiência alia tecnologia 
              de ponta, planejamento estratégico e compromisso com a qualidade.
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

          {/* Services Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">O que a Parmenes IT oferece?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Organização Eficiente</h4>
                <p className="text-[#4B4B4D]/80">
                  Desenvolvemos e implementamos projetos de cabeamento estruturado personalizados, 
                  garantindo redes organizadas, estáveis e preparadas para o futuro.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Cabeamento de Qualidade</h4>
                <p className="text-[#4B4B4D]/80">
                  Trabalhamos com cabeamento óptico e metálico de alta qualidade, utilizando 
                  materiais de ponta para garantir o melhor desempenho.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Organização de Racks</h4>
                <p className="text-[#4B4B4D]/80">
                  Realizamos a reorganização completa com patch cords, painéis de conexão e 
                  identificação detalhada de cada componente.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Padronização</h4>
                <p className="text-[#4B4B4D]/80">
                  Implementamos identificação e padronização detalhada em toda a infraestrutura, 
                  otimizando a gestão da rede.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Por que escolher a Parmenes IT?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Especialistas qualificados em cabeamento estruturado",
                "Compromisso com materiais e tecnologias de ponta",
                "Projetos escaláveis para crescimento futuro",
                "Suporte técnico personalizado",
                "Certificação de todas as instalações",
                "Garantia de qualidade e performance"
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
              Transforme sua infraestrutura de rede
            </h3>
            <p className="text-lg text-[#4B4B4D]/80 mb-8">
              Entre em contato conosco e descubra como podemos otimizar suas redes!
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

export default CablingPage;