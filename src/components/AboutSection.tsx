import { ArrowUpRight, Server, Cloud, Phone, Shield, Activity, Headset as HeadsetHelp, Link, Database, Lock, Cable, Wifi, Home, Globe } from 'lucide-react';
import { theme } from '../styles/theme';
import { useTranslation } from 'react-i18next';

const AboutSection = ({ navigateTo }: { navigateTo: (page: string) => void }) => {
  const { t } = useTranslation();

  const services = [
    // ... all previous services except the last one
    {
      icon: <Server className={`text-[${theme.colors.primary}]`} size={32} />,
      title: "Servidores Personalizados",
      desc: "Soluções de infraestrutura robustas e escaláveis para empresas de todos os portes.",
      page: "servers"
    },
    {
      icon: <Cloud className={`text-[${theme.colors.primary}]`} size={32} />,
      title: "Cloud Computing",
      desc: "Migração e gerenciamento de ambientes em nuvem com segurança e eficiência.",
      page: "cloud"
    },
    {
      icon: <Database className={`text-[${theme.colors.primary}]`} size={32} />,
      title: "Backup em Nuvem",
      desc: "Proteção e gerenciamento eficiente dos seus dados com backup em nuvem.",
      page: "backup"
    },
    {
      icon: <Shield className={`text-[${theme.colors.primary}]`} size={32} />,
      title: "Segurança",
      desc: "Proteção completa para seus dados e sistemas contra ameaças cibernéticas.",
      page: "security"
    },
    {
      icon: <Activity className={`text-[${theme.colors.primary}]`} size={32} />,
      title: "Monitoramento com Zabbix",
      desc: "Se existe, monitoramos! Controle total do seu ambiente com a melhor plataforma de monitoramento.",
      page: "zabbix"
    },
    {
      icon: <HeadsetHelp className={`text-[${theme.colors.primary}]`} size={32} />,
      title: "Suporte Técnico",
      desc: "Suporte especializado 24/7 para garantir o funcionamento contínuo dos seus sistemas.",
      page: "support"
    },
    {
      icon: <Link className={`text-[${theme.colors.primary}]`} size={32} />,
      title: "Integrações Inteligentes",
      desc: "Conecte sistemas e otimize processos com nossas soluções de integração personalizadas.",
      page: "integrations"
    },
    {
      icon: <Lock className={`text-[${theme.colors.primary}]`} size={32} />,
      title: "Conexões VPN",
      desc: "Proteja seus dados e acessos com nossas soluções VPN profissionais.",
      page: "vpn"
    },
    {
      icon: <Cable className={`text-[${theme.colors.primary}]`} size={32} />,
      title: "Cabeamento Estruturado",
      desc: "Infraestrutura de redes organizada e eficiente para alta performance.",
      page: "cabling"
    },
    {
      icon: <Wifi className={`text-[${theme.colors.primary}]`} size={32} />,
      title: "Redes Sem Fio",
      desc: "Soluções Wi-Fi corporativas de alta performance e cobertura total.",
      page: "wireless"
    },
    {
      icon: <Home className={`text-[${theme.colors.primary}]`} size={32} />,
      title: "Automação Residencial",
      desc: "Transforme sua casa em um ambiente inteligente e conectado.",
      page: "automation"
    },
    {
      icon: <Phone className={`text-[${theme.colors.primary}]`} size={32} />,
      title: "Soluções VoIP",
      desc: "Comunicação unificada com tecnologia VoIP para integrar voz, dados e vídeo.",
      page: "voip"
    }
  ];

  // Separate the last service (Sites Institucionais)
  const lastService = {
    icon: <Globe className={`text-[${theme.colors.primary}]`} size={32} />,
    title: "Sites Institucionais",
    desc: "Presença digital profissional com sites modernos, responsivos e otimizados.",
    page: "website"
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* About Content */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className={`text-3xl font-bold text-[${theme.colors.secondary}] mb-4`}>Parmenes IT</h2>
        <h3 className={`text-xl text-[${theme.colors.primary}] mb-8`}>Conectando seu mundo!</h3>
        
        <p className={`text-[${theme.colors.secondary}] leading-relaxed mb-8`}>
          Há 15 anos, somos sinônimo de inovação e excelência em soluções tecnológicas. 
          Especialistas em infraestrutura, com foco em atender as necessidades de Gerenciadoras 
          de Risco, entregamos soluções que fazem a diferença no mercado.
        </p>
        
        <p className={`text-[${theme.colors.secondary}] leading-relaxed mb-8`}>
          Somos a Parmenes IT, uma referência no mercado de tecnologia com 15 anos de experiência. 
          Nossa missão é clara: transformar desafios em soluções inovadoras e eficientes, 
          superando expectativas e impulsionando resultados.
        </p>
        
        <div className={`bg-[${theme.colors.primary}]/10 border-l-4 border-[${theme.colors.primary}] p-6 rounded-r mb-8 text-left`}>
          <p className={`text-[${theme.colors.secondary}] font-medium`}>
            Nosso Compromisso! Focamos em gerenciar riscos e oferecer suporte dedicado, 
            sempre com um toque de inovação e criatividade.
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-16">
          <span className={`text-4xl font-bold text-[${theme.colors.primary}] mr-4`}>15</span>
          <p className={`text-[${theme.colors.secondary}] text-left max-w-lg`}>
            anos de experiência em infraestrutura voltada para gerenciamento de riscos 
            e outros segmentos que demandam tecnologia para agilizar processos, 
            modernizar operações e reduzir custos.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300 cursor-pointer`}
            onClick={() => service.page ? navigateTo(service.page) : null}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className={`text-lg font-semibold text-[${theme.colors.secondary}] mb-2`}>{service.title}</h3>
            <p className={`text-[${theme.colors.secondary}]/80 mb-4 text-sm`}>{service.desc}</p>
            <button 
              className={`flex items-center text-[${theme.colors.primary}] hover:text-[#8fb938] transition-colors text-sm font-medium`}
            >
              <span>Saiba mais</span>
              <ArrowUpRight size={16} className="ml-1" />
            </button>
          </div>
        ))}
      </div>

      {/* Last Service in Full Row */}
      <div className="mt-6">
        <div 
          className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300 cursor-pointer mx-auto max-w-3xl`}
          onClick={() => lastService.page ? navigateTo(lastService.page) : null}
        >
          <div className="mb-4">{lastService.icon}</div>
          <h3 className={`text-lg font-semibold text-[${theme.colors.secondary}] mb-2`}>{lastService.title}</h3>
          <p className={`text-[${theme.colors.secondary}]/80 mb-4 text-sm`}>{lastService.desc}</p>
          <button 
            className={`flex items-center text-[${theme.colors.primary}] hover:text-[#8fb938] transition-colors text-sm font-medium`}
          >
            <span>Saiba mais</span>
            <ArrowUpRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;