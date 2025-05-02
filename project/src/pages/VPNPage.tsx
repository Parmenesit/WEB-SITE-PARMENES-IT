import { useEffect } from 'react';
import { ArrowLeft, Check, Shield, Lock, Globe, Zap, Users, Clock, MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';

interface VPNPageProps {
  navigateTo: (page: string) => void;
}

const VPNPage = ({ navigateTo }: VPNPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-[#A8CF45]" />,
      title: "Segurança de Dados",
      description: "Criptografia avançada para proteção total das suas informações."
    },
    {
      icon: <Lock className="w-8 h-8 text-[#A8CF45]" />,
      title: "Privacidade Garantida",
      description: "Proteção da identidade e atividades online em conexões públicas."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#A8CF45]" />,
      title: "Acesso Remoto Seguro",
      description: "Conexão segura à rede corporativa de qualquer lugar."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#A8CF45]" />,
      title: "Alta Performance",
      description: "Conexões estáveis e rápidas sem comprometer a segurança."
    },
    {
      icon: <Users className="w-8 h-8 text-[#A8CF45]" />,
      title: "Soluções Personalizadas",
      description: "VPN adaptada às necessidades específicas do seu negócio."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#A8CF45]" />,
      title: "Suporte 24/7",
      description: "Equipe técnica disponível para suporte a qualquer momento."
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
              Conexões Seguras com VPN
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Proteja seus dados e acessos com soluções VPN profissionais
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
              Segurança e Privacidade para Seu Negócio
            </h2>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed">
              Em um mundo cada vez mais digital, garantir a segurança dos seus dados e acessos é essencial. 
              É aqui que a Parmenes entra em ação, oferecendo soluções robustas de VPN para proteger 
              informações sensíveis e manter a privacidade em um ambiente online.
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

          {/* Security Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Segurança em Nível Máximo</h3>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed mb-8">
              A Parmenes entende que a confidencialidade dos dados é vital. Com nossa tecnologia VPN, 
              todos os dados transmitidos entre os dispositivos e servidores são criptografados, protegendo 
              informações pessoais, comerciais e financeiras contra ameaças cibernéticas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Criptografia avançada para proteção de dados",
                "Acesso remoto seguro à rede corporativa",
                "Alta performance sem comprometer a segurança",
                "Privacidade garantida em conexões públicas",
                "Suporte técnico especializado 24/7",
                "Conformidade com regulamentações de segurança"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="text-[#A8CF45] mt-1 flex-shrink-0" />
                  <span className="text-[#4B4B4D]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">O Compromisso da Parmenes com a Segurança</h3>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed">
              Com uma equipe altamente qualificada e tecnologia de ponta, a Parmenes se posiciona como 
              parceira confiável para proteger você e sua empresa contra os crescentes riscos do mundo digital. 
              Ao escolher nossa solução de VPN, você ganha mais do que segurança; você obtém tranquilidade 
              para focar no que realmente importa.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-4">
              Proteja seus dados hoje mesmo
            </h3>
            <p className="text-lg text-[#4B4B4D]/80 mb-8">
              Descubra como a Parmenes pode transformar a forma como você protege seus dados e acessos.
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

export default VPNPage;