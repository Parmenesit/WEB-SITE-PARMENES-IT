import { useEffect } from 'react';
import { ArrowLeft, Check, Headset, Clock, Target, Users, Shield, Wrench, MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';

interface TechnicalSupportProps {
  navigateTo: (page: string) => void;
}

const TechnicalSupport = ({ navigateTo }: TechnicalSupportProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Headset className="w-8 h-8 text-[#A8CF45]" />,
      title: "Especialização Avançada",
      description: "Equipe altamente qualificada com ampla experiência em diversas tecnologias."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#A8CF45]" />,
      title: "Disponibilidade e Agilidade",
      description: "Atendimento rápido e eficiente para minimizar impactos operacionais."
    },
    {
      icon: <Target className="w-8 h-8 text-[#A8CF45]" />,
      title: "Monitoramento Proativo",
      description: "Identificação e resolução de problemas antes que causem interrupções."
    },
    {
      icon: <Users className="w-8 h-8 text-[#A8CF45]" />,
      title: "Atendimento Personalizado",
      description: "Soluções adaptadas às necessidades específicas de cada cliente."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#A8CF45]" />,
      title: "Segurança da Informação",
      description: "Práticas robustas para proteção de dados e sistemas."
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#A8CF45]" />,
      title: "Resolução de Problemas",
      description: "Soluções rápidas e eficazes para qualquer desafio técnico."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
              Suporte Técnico
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Garantindo o pleno funcionamento dos seus sistemas com excelência e dedicação
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
              Suporte Técnico Especializado para Seu Negócio
            </h2>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed">
              Em um mundo onde a tecnologia desempenha um papel crucial em praticamente todos os aspectos dos negócios, 
              contar com um suporte técnico especializado é essencial para garantir que os sistemas da sua empresa operem 
              de forma eficiente e segura. A Parmenes IT é sua parceira ideal para enfrentar os desafios tecnológicos 
              com soluções personalizadas e eficientes.
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

          {/* Services Scope */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Como Podemos Ajudar Sua Empresa</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Resolução rápida de falhas em sistemas e infraestrutura",
                "Consultoria estratégica para soluções tecnológicas",
                "Gestão completa de infraestrutura de TI",
                "Treinamento e capacitação de equipes",
                "Monitoramento proativo de sistemas",
                "Suporte remoto e presencial especializado"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="text-[#A8CF45] mt-1 flex-shrink-0" />
                  <span className="text-[#4B4B4D]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Por Que Escolher a Parmenes IT?</h3>
            <p className="text-lg text-[#4B4B4D]/80 mb-8">
              Com uma abordagem focada em resultados, a Parmenes IT se destaca como um parceiro de confiança 
              para empresas que buscam otimizar suas operações tecnológicas. Nós não apenas resolvemos problemas; 
              trabalhamos para evitar que eles ocorram, permitindo que você se concentre no crescimento do seu negócio.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-4">
              Transforme seus desafios em oportunidades
            </h3>
            <p className="text-lg text-[#4B4B4D]/80 mb-8">
              Entre em contato conosco e descubra como podemos transformar os desafios tecnológicos da sua empresa em oportunidades de crescimento!
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

export default TechnicalSupport;