import { useEffect } from 'react';
import { ArrowLeft, Check, Activity, Shield, Gauge, Bell, BarChart, Zap, MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';

interface ZabbixMonitoringProps {
  navigateTo: (page: string) => void;
}

const ZabbixMonitoring = ({ navigateTo }: ZabbixMonitoringProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Activity className="w-8 h-8 text-[#A8CF45]" />,
      title: "Monitoramento Abrangente",
      description: "Monitore servidores, redes, aplicações, IoT, dispositivos móveis e muito mais."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#A8CF45]" />,
      title: "Segurança Avançada",
      description: "Detecção proativa de ameaças e vulnerabilidades em tempo real."
    },
    {
      icon: <Gauge className="w-8 h-8 text-[#A8CF45]" />,
      title: "Alta Performance",
      description: "Processamento eficiente de milhões de métricas por segundo."
    },
    {
      icon: <Bell className="w-8 h-8 text-[#A8CF45]" />,
      title: "Alertas Inteligentes",
      description: "Notificações personalizadas baseadas em comportamentos anômalos."
    },
    {
      icon: <BarChart className="w-8 h-8 text-[#A8CF45]" />,
      title: "Análise Avançada",
      description: "Visualizações detalhadas e relatórios personalizados."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#A8CF45]" />,
      title: "Automação",
      description: "Respostas automáticas a eventos e incidentes detectados."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
              Monitoramento com Zabbix
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              Se existe, monitoramos! Controle total do seu ambiente com a melhor plataforma de monitoramento.
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
              Por que o Zabbix é o melhor no mercado?
            </h2>
            <p className="text-lg text-[#4B4B4D]/80 leading-relaxed">
              No mundo cada vez mais conectado, a gestão e monitoramento de ativos, dispositivos e sistemas se tornou essencial para garantir alta performance, segurança e disponibilidade. É nesse cenário que o Zabbix se destaca como uma solução poderosa, flexível e confiável para monitorar tudo o que se comunica e está plugado.
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

          {/* Monitoring Scope */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#4B4B4D] mb-6">Monitoramento de Tudo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Redes: Roteadores, switches, firewalls e conexões",
                "Sistemas: Servidores Linux, Windows, Unix e outros",
                "Aplicações: Bancos de dados, sistemas ERP, serviços web",
                "Dispositivos IoT: Sensores, câmeras, equipamentos de automação",
                "Ambientes Físicos: Energia elétrica, temperatura, umidade"
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
              Transforme o caos em controle
            </h3>
            <p className="text-lg text-[#4B4B4D]/80 mb-8">
              Eleve seu ambiente operacional ao próximo nível com o poder do Zabbix!
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

export default ZabbixMonitoring;