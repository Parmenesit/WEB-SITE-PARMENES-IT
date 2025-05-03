import { useEffect } from 'react';
import { ArrowLeft, Check, Globe, Gauge, Layout, Code, Search, Shield, MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';

interface WebsitePageProps {
  navigateTo: (page: string) => void;
}

const WebsitePage = ({ navigateTo }: WebsitePageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Layout className="w-8 h-8 text-[#A8CF45]" />,
      title: "Design Moderno e Responsivo",
      description: "Sites com visual atrativo, adaptados para todos os dispositivos."
    },
    {
      icon: <Gauge className="w-8 h-8 text-[#A8CF45]" />,
      title: "Alta Performance",
      description: "Carregamento rápido e navegação fluida para melhor experiência."
    },
    {
      icon: <Code className="w-8 h-8 text-[#A8CF45]" />,
      title: "Gestão Facilitada",
      description: "Painel administrativo intuitivo para atualização de conteúdo."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#A8CF45]" />,
      title: "Integração Social",
      description: "Conexão com WhatsApp, Instagram, Facebook e outras redes."
    },
    {
      icon: <Search className="w-8 h-8 text-[#A8CF45]" />,
      title: "Otimização SEO",
      description: "Estrutura otimizada para melhor posicionamento no Google."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#A8CF45]" />,
      title: "Segurança e Estabilidade",
      description: "Certificado SSL e proteção contra ameaças digitais."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
              Sites Institucionais
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Presença Digital Profissional: Transforme seu Site Institucional com a Parmenes IT
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
              Sua Presença Digital que Gera Resultados
            </h2>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed">
              Na era digital, o site institucional é muito mais do que um cartão de visitas online — 
              é a porta de entrada para a credibilidade, confiança e crescimento do seu negócio. 
              Na Parmenes IT, desenvolvemos sites modernos, rápidos e personalizados, projetados 
              para causar impacto e gerar resultados reais.
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
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Por que escolher a Parmenes IT?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Soluções sob medida para seu segmento e público-alvo",
                "Equipe especializada em design e desenvolvimento",
                "Foco em resultados e geração de leads",
                "Atendimento completo, do planejamento ao suporte",
                "Sites otimizados para mecanismos de busca",
                "Tecnologias modernas e alto desempenho"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="text-[#A8CF45] mt-1 flex-shrink-0" />
                  <span className="text-[#4B4B4D]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">O que oferecemos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Design Profissional</h4>
                <p className="text-[#4B4B4D]/80">
                  Layouts modernos e responsivos que transmitem profissionalismo e 
                  fortalecem sua marca no mercado digital.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Performance Otimizada</h4>
                <p className="text-[#4B4B4D]/80">
                  Sites rápidos e eficientes, otimizados para proporcionar a melhor 
                  experiência aos seus visitantes.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Gestão de Conteúdo</h4>
                <p className="text-[#4B4B4D]/80">
                  Painel administrativo intuitivo para que você possa atualizar 
                  conteúdos com facilidade e autonomia.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Integração Total</h4>
                <p className="text-[#4B4B4D]/80">
                  Conexão com redes sociais, ferramentas de marketing e sistemas 
                  corporativos para maximizar resultados.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-4">
              Sua marca merece um site à altura
            </h3>
            <p className="text-lg text-[#4B4B4D]/80 mb-8">
              Transforme sua presença digital em uma verdadeira vitrine de credibilidade, 
              inovação e sucesso.
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

export default WebsitePage;