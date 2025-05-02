import { useEffect } from 'react';
import { ArrowLeft, Check, Link, Zap, Target, Gauge, BarChart, Settings, MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';

interface IntegrationsPageProps {
  navigateTo: (page: string) => void;
}

const IntegrationsPage = ({ navigateTo }: IntegrationsPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Link className="w-8 h-8 text-[#A8CF45]" />,
      title: "Expertise Tecnológica",
      description: "Equipe especializada em diversas tecnologias e metodologias ágeis."
    },
    {
      icon: <Settings className="w-8 h-8 text-[#A8CF45]" />,
      title: "Soluções Customizadas",
      description: "Integrações personalizadas para as necessidades específicas do seu negócio."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#A8CF45]" />,
      title: "Automatização de Processos",
      description: "Eliminação de tarefas repetitivas para focar no estratégico."
    },
    {
      icon: <Target className="w-8 h-8 text-[#A8CF45]" />,
      title: "Monitoramento Contínuo",
      description: "Acompanhamento em tempo real e suporte especializado."
    },
    {
      icon: <Gauge className="w-8 h-8 text-[#A8CF45]" />,
      title: "Eficiência Operacional",
      description: "Otimização de processos e redução de custos operacionais."
    },
    {
      icon: <BarChart className="w-8 h-8 text-[#A8CF45]" />,
      title: "Decisões Baseadas em Dados",
      description: "Acesso a dados consolidados em tempo real."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
              Integrações Inteligentes
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Soluções integradas para otimizar processos e impulsionar resultados
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
              Transformando Tecnologia em Resultados
            </h2>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed">
              Nos dias atuais, a informação é um dos ativos mais valiosos para qualquer negócio. 
              É por isso que a Parmenes IT se dedica a oferecer soluções tecnológicas de ponta por meio 
              de integrações inteligentes, desenvolvendo ferramentas personalizadas que otimizarão os 
              processos e alavancarão os resultados da sua empresa.
            </p>
          </div>

          {/* What are Smart Integrations */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-4">O que são Integrações Inteligentes?</h3>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed">
              As integrações inteligentes consistem em conectar sistemas, plataformas e ferramentas de forma 
              harmoniosa, garantindo que os dados fluam livremente e sejam utilizados de maneira eficiente. 
              Isso elimina gargalos operacionais, melhora a precisão nas tomadas de decisão e reduz custos 
              associados a processos manuais e redundâncias.
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
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Benefícios para o Seu Negócio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Decisões baseadas em dados em tempo real",
                "Redução significativa de processos manuais",
                "Melhoria na experiência do cliente",
                "Maior eficiência operacional",
                "Escalabilidade e adaptabilidade do negócio",
                "Redução de custos operacionais"
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
              Transforme sua operação hoje
            </h3>
            <p className="text-lg text-[#4B4B4D]/80 mb-8">
              Entre em contato conosco e descubra como podemos transformar sua operação por meio das nossas integrações inteligentes.
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

export default IntegrationsPage;