import { useEffect } from 'react';
import { ArrowLeft, Check, Database, Shield, Cloud, Clock, BarChart, Lock, MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';

interface BackupCloudPageProps {
  navigateTo: (page: string) => void;
}

const BackupCloudPage = ({ navigateTo }: BackupCloudPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-[#A8CF45]" />,
      title: "Segurança Avançada",
      description: "Criptografia de ponta para proteção total dos seus dados."
    },
    {
      icon: <Cloud className="w-8 h-8 text-[#A8CF45]" />,
      title: "Acessibilidade Global",
      description: "Acesso aos seus dados de qualquer lugar, a qualquer momento."
    },
    {
      icon: <Database className="w-8 h-8 text-[#A8CF45]" />,
      title: "Escalabilidade",
      description: "Armazenamento que cresce com seu negócio."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#A8CF45]" />,
      title: "Recuperação Rápida",
      description: "Restauração eficiente em caso de falhas ou incidentes."
    },
    {
      icon: <BarChart className="w-8 h-8 text-[#A8CF45]" />,
      title: "Monitoramento Contínuo",
      description: "Acompanhamento em tempo real do estado dos backups."
    },
    {
      icon: <Lock className="w-8 h-8 text-[#A8CF45]" />,
      title: "Conformidade",
      description: "Alinhamento com LGPD e outras regulamentações."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
              Backups e Arquivamentos em Nuvem
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              A solução definitiva para proteção de dados
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
              Proteção e Gerenciamento Eficiente de Dados
            </h2>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed">
              A proteção e o gerenciamento eficiente de dados são pilares fundamentais para qualquer organização moderna. 
              Em um cenário onde informações se tornaram o ativo mais valioso das empresas, a Parmenes destaca-se como 
              parceira estratégica para garantir que seus dados estejam sempre seguros e acessíveis.
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

          {/* How We Help Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Como a Parmenes Potencializa sua Estratégia de Backup</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Consultoria especializada para identificar requisitos específicos",
                "Implantação ágil e segura com mínima interrupção",
                "Monitoramento contínuo em tempo real",
                "Suporte técnico disponível 24/7",
                "Conformidade com regulamentações de proteção de dados",
                "Soluções personalizadas para cada negócio"
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
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Benefícios para Seu Negócio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Redução de Custos</h4>
                <p className="text-[#4B4B4D]/80">
                  Economize com infraestrutura física e manutenção, pagando apenas pelo que usar.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Maior Eficiência</h4>
                <p className="text-[#4B4B4D]/80">
                  Concentre-se no core business enquanto cuidamos da proteção dos seus dados.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Confiança</h4>
                <p className="text-[#4B4B4D]/80">
                  Trabalhe com a certeza de que seus arquivos estão protegidos e sempre disponíveis.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#4B4B4D] mb-4">Inovação</h4>
                <p className="text-[#4B4B4D]/80">
                  Acesso às soluções tecnológicas mais avançadas do mercado em backup e recuperação.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-4">
              Sua tranquilidade começa aqui
            </h3>
            <p className="text-lg text-[#4B4B4D]/80 mb-8">
              Confie na Parmenes para cuidar do que realmente importa: os dados que impulsionam o seu negócio.
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

export default BackupCloudPage;