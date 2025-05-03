import { useEffect } from 'react';
import { ArrowLeft, Check, Cloud, Shield, Gauge, Server, BarChart, Clock, MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';

interface CloudComputingPageProps {
  navigateTo: (page: string) => void;
}

const CloudComputingPage = ({ navigateTo }: CloudComputingPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-[#A8CF45]" />,
      title: "Escalabilidade Inteligente",
      description: "Infraestrutura que cresce conforme sua demanda, vertical e horizontalmente."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#A8CF45]" />,
      title: "Segurança Avançada",
      description: "Proteção robusta contra ameaças e conformidade com LGPD/GDPR."
    },
    {
      icon: <Gauge className="w-8 h-8 text-[#A8CF45]" />,
      title: "Alta Performance",
      description: "Servidores otimizados para máximo desempenho e baixa latência."
    },
    {
      icon: <Server className="w-8 h-8 text-[#A8CF45]" />,
      title: "Backup Automatizado",
      description: "Políticas de backup e recuperação de dados eficientes."
    },
    {
      icon: <BarChart className="w-8 h-8 text-[#A8CF45]" />,
      title: "Monitoramento 24/7",
      description: "Acompanhamento em tempo real de todos os recursos."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#A8CF45]" />,
      title: "Suporte Especializado",
      description: "Equipe técnica disponível 24 horas por dia."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
              Servidores em Cloud
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Escalabilidade e segurança com as soluções da Parmenes
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
              Potencialize seu Negócio com Cloud Computing
            </h2>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed">
              Na era digital, o desempenho e a segurança dos servidores são cruciais para o sucesso de qualquer empresa. 
              A Parmenes entende essa necessidade e oferece soluções robustas e personalizadas em servidores cloud, 
              ajudando sua empresa a alcançar novos patamares de eficiência e segurança.
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

          {/* Why Choose Us */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Por que escolher a Parmenes para suas soluções em Cloud?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Escalabilidade sob medida para o crescimento do seu negócio",
                "Proteção avançada contra ataques cibernéticos",
                "Monitoramento contínuo e suporte 24/7",
                "Backup automatizado e recuperação de dados",
                "Conformidade com LGPD e GDPR",
                "Infraestrutura otimizada para desempenho"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="text-[#A8CF45] mt-1 flex-shrink-0" />
                  <span className="text-[#4B4B4D]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-4">Segurança de Ponta</h3>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed mb-6">
              Entendemos que a segurança dos dados é essencial para manter a confiança de seus clientes e a 
              integridade do seu negócio. Nossa infraestrutura cloud oferece proteção avançada contra ameaças, 
              monitoramento contínuo e políticas de backup automatizadas, garantindo a segurança e disponibilidade 
              dos seus dados.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-4">
              Construa o futuro da sua infraestrutura digital
            </h3>
            <p className="text-lg text-[#4B4B4D]/80 mb-8">
              Entre em contato conosco e descubra como nossas soluções em cloud podem transformar seu negócio.
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

export default CloudComputingPage;