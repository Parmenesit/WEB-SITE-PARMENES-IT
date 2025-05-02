import { useEffect } from 'react';
import { ArrowLeft, Check, Shield, Lock, Server, Users, Bell, BarChart, MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';

interface SecurityITProps {
  navigateTo: (page: string) => void;
}

const SecurityIT = ({ navigateTo }: SecurityITProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-[#A8CF45]" />,
      title: "Proteção Avançada",
      description: "Soluções robustas contra ameaças cibernéticas e vulnerabilidades."
    },
    {
      icon: <Lock className="w-8 h-8 text-[#A8CF45]" />,
      title: "Segurança da Informação",
      description: "Práticas robustas para proteger dados críticos do seu negócio."
    },
    {
      icon: <Server className="w-8 h-8 text-[#A8CF45]" />,
      title: "Infraestrutura Segura",
      description: "Gestão completa da segurança da sua infraestrutura de TI."
    },
    {
      icon: <Users className="w-8 h-8 text-[#A8CF45]" />,
      title: "Treinamento",
      description: "Capacitação da equipe em práticas de segurança."
    },
    {
      icon: <Bell className="w-8 h-8 text-[#A8CF45]" />,
      title: "Monitoramento 24/7",
      description: "Vigilância constante contra ameaças e ataques."
    },
    {
      icon: <BarChart className="w-8 h-8 text-[#A8CF45]" />,
      title: "Análise de Riscos",
      description: "Identificação e mitigação proativa de vulnerabilidades."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
              Segurança de TI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Proteção abrangente contra ameaças cibernéticas, garantindo a integridade e confidencialidade dos seus dados.
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
              Suporte Técnico Especializado para sua Segurança
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
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Como Podemos Ajudar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Resolução rápida de problemas em sistemas e infraestrutura",
                "Consultoria estratégica para soluções tecnológicas",
                "Gestão completa de infraestrutura de TI",
                "Treinamento e capacitação de equipes",
                "Monitoramento proativo e prevenção de problemas"
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
              Proteja seu negócio agora
            </h3>
            <p className="text-lg text-[#4B4B4D]/80 mb-8">
              Entre em contato e descubra como podemos transformar os desafios tecnológicos da sua empresa em oportunidades de crescimento!
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

export default SecurityIT;