import { useEffect } from 'react';
import { ArrowLeft, Check, Server, Shield, Gauge, Settings, Users, Clock, MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';

interface CustomServersPageProps {
  navigateTo: (page: string) => void;
}

const CustomServersPage = ({ navigateTo }: CustomServersPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Server className="w-8 h-8 text-[#A8CF45]" />,
      title: "Infraestrutura Sob Medida",
      description: "Soluções personalizadas para atender às necessidades específicas do seu negócio."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#A8CF45]" />,
      title: "Segurança e Confiabilidade",
      description: "Proteção avançada de dados e alta disponibilidade dos sistemas."
    },
    {
      icon: <Gauge className="w-8 h-8 text-[#A8CF45]" />,
      title: "Alta Performance",
      description: "Hardware de última geração para máximo desempenho."
    },
    {
      icon: <Settings className="w-8 h-8 text-[#A8CF45]" />,
      title: "Escalabilidade Garantida",
      description: "Infraestrutura que cresce com seu negócio."
    },
    {
      icon: <Users className="w-8 h-8 text-[#A8CF45]" />,
      title: "Expertise Técnica",
      description: "Equipe especializada com ampla experiência em servidores."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#A8CF45]" />,
      title: "Suporte 24/7",
      description: "Monitoramento e suporte técnico disponível 24 horas."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
              Servidores Personalizados
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              A solução sob medida da Parmenes para sua infraestrutura tecnológica
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
              Infraestrutura Sob Medida para Seu Negócio
            </h2>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed">
              Na era da transformação digital, contar com uma infraestrutura de TI robusta e personalizada 
              é essencial para o sucesso de qualquer negócio. É nesse contexto que a Parmenes se destaca, 
              oferecendo soluções em servidores que vão muito além do básico, garantindo uma abordagem 
              personalizada e baseada nas necessidades específicas de cada cliente.
            </p>
          </div>

          {/* Technology Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-4">Tecnologia de Ponta</h3>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed">
              Para assegurar o máximo de eficiência e inovação, utilizamos as ferramentas tecnológicas mais 
              avançadas do mercado. A Parmenes está sempre na vanguarda das inovações, oferecendo hardware 
              de última geração, sistemas de virtualização modernos e soluções de armazenamento inteligentes. 
              Tudo isso para garantir que sua empresa tenha acesso à tecnologia necessária para operar de 
              maneira eficiente e segura.
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

          {/* Benefits Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Por Que Escolher a Parmenes?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Expertise técnica com ampla experiência em infraestrutura",
                "Apoio contínuo com suporte técnico dedicado",
                "Escalabilidade garantida para crescimento futuro",
                "Segurança e confiabilidade dos dados",
                "Hardware de última geração",
                "Monitoramento proativo e manutenção preventiva"
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
              Construa hoje a infraestrutura do amanhã
            </h3>
            <p className="text-lg text-[#4B4B4D]/80 mb-8">
              Seja para hospedagem, processamento de dados ou soluções em nuvem, a Parmenes é a parceira 
              ideal para transformar sua visão em resultados concretos.
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

export default CustomServersPage;