import infrastructure from '../assets/images/infrastructure,png';
import cloud from '../assets/images/cloud,png';
import voip from '../assets/images/voip,png';
import security from '../assets/images/security,png';
import support from '../assets/images/support,png';
import monitoring from '../assets/images/monitoring,png';
import integrations from '../assets/images/integrations,png';
import customServers from '../assets/images/custom-servers,png';
import cloudServers from '../assets/images/cloud-servers,png';
import backup from '../assets/images/backup,png';
import vpn from '../assets/images/vpn,png';
import cabling from '../assets/images/cabling,png';
import wireless from '../assets/images/wireless,png';
import homeAutomation from '../assets/images/home-automation,png';

export interface Service {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  howItWorks: string;
  benefits: string[];
  image: string;
  relatedServices: string[];
}

export const services: Service[] = [
  {
    id: 15,
    title: "Sites Institucionais",
    shortDescription: "Presença Digital Profissional: Transforme seu Site Institucional com a Parmenes IT",
    description: "Na era digital, o site institucional é muito mais do que um cartão de visitas online — é a porta de entrada para a credibilidade, confiança e crescimento do seu negócio. Na Parmenes IT, desenvolvemos sites modernos, rápidos e personalizados, projetados para causar impacto e gerar resultados reais.",
    howItWorks: "Iniciamos com uma análise detalhada do seu negócio e objetivos, desenvolvemos um projeto personalizado com design moderno e responsivo, implementamos as melhores práticas de SEO e performance, e oferecemos um painel de administração intuitivo para que você possa gerenciar seu conteúdo com facilidade.",
    benefits: [
      "Design moderno e responsivo para todos os dispositivos",
      "Alta performance e carregamento rápido",
      "Painel administrativo intuitivo",
      "Integração com redes sociais e ferramentas",
      "Otimização para motores de busca (SEO)",
      "Certificado SSL e proteção contra ataques"
    ],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    relatedServices: [
      "Segurança de TI",
      "Cloud Computing",
      "Integrações Inteligentes"
    ]
  },
  {
    id: 1,
    title: "Infraestrutura de TI",
    shortDescription: "Soluções de infraestrutura robustas e escaláveis, projetadas para atender às necessidades específicas do seu negócio.",
    description: "Nossa solução de Infraestrutura de TI fornece a base tecnológica que seu negócio precisa para operar com eficiência e segurança. Projetamos e implementamos infraestruturas completas, desde redes e servidores até sistemas de armazenamento e backup, tudo personalizado de acordo com as necessidades específicas da sua empresa.",
    howItWorks: "Iniciamos com uma avaliação detalhada das suas necessidades atuais e futuras. Em seguida, desenvolvemos um projeto personalizado, implementamos a solução, realizamos testes abrangentes e fornecemos treinamento para sua equipe. Nosso serviço inclui suporte contínuo e manutenção para garantir o desempenho ideal.",
    benefits: [
      "Aumento da confiabilidade e disponibilidade dos sistemas",
      "Redução de riscos e custos operacionais",
      "Escalabilidade para crescer com seu negócio",
      "Maior segurança para seus dados e aplicações",
      "Suporte técnico especializado"
    ],
    image: infrastructure,
    relatedServices: [
      "Cloud Computing",
      "Segurança de TI",
      "Backup e Recuperação de Dados"
    ]
  },
  {
    id: 2,
    title: "Cloud Computing",
    shortDescription: "Migração e gerenciamento de ambientes em nuvem para aumentar a flexibilidade e reduzir custos operacionais.",
    description: "Nossos serviços de Cloud Computing permitem que sua empresa aproveite todos os benefícios da computação em nuvem. Oferecemos soluções de migração segura para a nuvem, além de gerenciamento contínuo de ambientes em nuvem pública, privada ou híbrida, otimizando recursos e reduzindo custos.",
    howItWorks: "Avaliamos sua infraestrutura atual, identificamos as cargas de trabalho ideais para migração, criamos um plano detalhado de migração, executamos a transição com tempo de inatividade mínimo e fornecemos gerenciamento contínuo para otimização de desempenho e custos.",
    benefits: [
      "Redução significativa de custos de infraestrutura",
      "Maior flexibilidade e escalabilidade",
      "Acesso a recursos de computação de última geração",
      "Recuperação de desastres aprimorada",
      "Pagamento apenas pelos recursos utilizados"
    ],
    image: cloud,
    relatedServices: [
      "Infraestrutura de TI",
      "Backup como Serviço",
      "Consultoria em TI"
    ]
  },
  {
    id: 3,
    title: "Soluções VoIP",
    shortDescription: "Comunicação unificada com tecnologia VoIP para integrar voz, dados e vídeo de forma eficiente e econômica.",
    description: "Nossas Soluções VoIP transformam a maneira como sua empresa se comunica. Integramos voz, dados e vídeo em uma única plataforma, proporcionando comunicação eficiente e econômica. Com nossos sistemas VoIP, sua empresa pode realizar chamadas pela internet, reduzindo drasticamente os custos com telefonia tradicional.",
    howItWorks: "Realizamos uma análise da sua infraestrutura de comunicação existente, projetamos uma solução VoIP personalizada, implementamos o sistema com configuração de hardware e software necessários, e oferecemos treinamento completo para sua equipe. Também fornecemos monitoramento e suporte contínuos.",
    benefits: [
      "Redução de até 60% nos custos de telefonia",
      "Integração com sistemas de CRM e ERP",
      "Mobilidade para trabalho remoto",
      "Recursos avançados de chamadas e conferências",
      "Escalabilidade sem investimentos significativos em hardware"
    ],
    image: voip,
    relatedServices: [
      "Consultoria em TI",
      "Infraestrutura de Rede",
      "Soluções de Colaboração"
    ]
  },
  {
    id: 4,
    title: "Segurança de TI",
    shortDescription: "Proteção abrangente contra ameaças cibernéticas, garantindo a integridade e confidencialidade dos seus dados.",
    description: "Nossa solução de Segurança de TI oferece proteção abrangente contra as crescentes ameaças cibernéticas. Implementamos múltiplas camadas de segurança, desde firewalls avançados e sistemas de detecção de intrusões até proteção contra malware e ransomware, garantindo que seus dados e sistemas estejam seguros contra ataques.",
    howItWorks: "Começamos com uma avaliação completa de vulnerabilidades, desenvolvemos uma estratégia de segurança personalizada, implementamos as soluções de proteção necessárias, realizamos testes de penetração e fornecemos monitoramento contínuo e resposta a incidentes.",
    benefits: [
      "Proteção contra as mais recentes ameaças cibernéticas",
      "Conformidade com regulamentações de segurança e privacidade",
      "Monitoramento proativo e detecção precoce de ameaças",
      "Resposta rápida a incidentes de segurança",
      "Treinamento de conscientização em segurança para funcionários"
    ],
    image: security,
    relatedServices: [
      "Backup e Recuperação de Dados",
      "Gestão de Identidade e Acesso",
      "Consultoria em Conformidade"
    ]
  },
  {
    id: 5,
    title: "Monitoramento com Zabbix",
    shortDescription: "Se existe, monitoramos! Controle total do seu ambiente com a melhor plataforma de monitoramento.",
    description: "No mundo cada vez mais conectado, a gestão e monitoramento de ativos, dispositivos e sistemas se tornou essencial. Com o Zabbix, monitoramos tudo o que se comunica e está plugado, garantindo alta performance, segurança e disponibilidade.",
    howItWorks: "Implementamos o Zabbix para monitorar toda sua infraestrutura, desde servidores e redes até aplicações e dispositivos IoT. Configuramos alertas personalizados e dashboards intuitivos para visualização em tempo real do status de todos os seus sistemas.",
    benefits: [
      "Monitoramento 24/7 de toda infraestrutura",
      "Detecção precoce de problemas",
      "Análise de tendências e planejamento de capacidade",
      "Alertas automáticos e personalizados",
      "Relatórios detalhados de desempenho"
    ],
    image: monitoring,
    relatedServices: [
      "Infraestrutura de TI",
      "Cloud Computing",
      "Segurança de TI"
    ]
  },
  {
    id: 6,
    title: "Suporte Técnico",
    shortDescription: "Suporte técnico especializado para garantir o pleno funcionamento dos seus sistemas.",
    description: "Nossa equipe de suporte técnico altamente qualificada está pronta para resolver qualquer problema e garantir que seus sistemas operem com máxima eficiência. Oferecemos atendimento personalizado e soluções rápidas para minimizar qualquer impacto em suas operações.",
    howItWorks: "Disponibilizamos múltiplos canais de atendimento, com profissionais especializados prontos para resolver desde problemas simples até questões técnicas complexas. Nosso sistema de tickets garante o acompanhamento eficiente de todas as solicitações.",
    benefits: [
      "Atendimento rápido e eficiente",
      "Equipe altamente qualificada",
      "Monitoramento proativo de sistemas",
      "Suporte remoto e presencial",
      "Documentação detalhada de todas as soluções"
    ],
    image: support,
    relatedServices: [
      "Infraestrutura de TI",
      "Cloud Computing",
      "Monitoramento com Zabbix"
    ]
  },
  {
    id: 7,
    title: "Integrações Inteligentes",
    shortDescription: "Soluções Integradas para Otimizar Processos e Resultados",
    description: "Nossas Integrações Inteligentes conectam sistemas, plataformas e ferramentas de forma harmoniosa, garantindo que os dados fluam livremente e sejam utilizados de maneira eficiente. Eliminamos gargalos operacionais, melhoramos a precisão nas tomadas de decisão e reduzimos custos associados a processos manuais e redundâncias.",
    howItWorks: "Nossa equipe de especialistas analisa suas necessidades específicas, desenvolve soluções personalizadas utilizando metodologias ágeis, implementa as integrações de forma segura e oferece suporte contínuo para garantir o funcionamento ideal do sistema.",
    benefits: [
      "Decisões baseadas em dados em tempo real",
      "Redução significativa de processos manuais",
      "Melhoria na experiência do cliente",
      "Maior eficiência operacional",
      "Escalabilidade e adaptabilidade do negócio"
    ],
    image: integrations,
    relatedServices: [
      "Infraestrutura de TI",
      "Cloud Computing",
      "Monitoramento com Zabbix"
    ]
  },
  {
    id: 8,
    title: "Servidores Personalizados",
    shortDescription: "A Solução Sob Medida para Sua Infraestrutura Tecnológica",
    description: "Oferecemos soluções em servidores que vão muito além do básico, garantindo uma abordagem personalizada e baseada nas necessidades específicas de cada cliente. Nossa equipe analisa seu cenário, identifica desafios e projeta servidores que otimizam o desempenho, a segurança e a escalabilidade.",
    howItWorks: "Iniciamos com uma análise detalhada do seu ambiente atual, identificamos requisitos específicos, desenvolvemos um projeto personalizado, implementamos a solução com hardware de última geração e oferecemos suporte contínuo para garantir o máximo desempenho.",
    benefits: [
      "Infraestrutura otimizada para suas necessidades específicas",
      "Hardware de última geração",
      "Escalabilidade garantida para crescimento futuro",
      "Suporte técnico especializado",
      "Monitoramento proativo e manutenção preventiva"
    ],
    image: customServers,
    relatedServices: [
      "Infraestrutura de TI",
      "Cloud Computing",
      "Monitoramento com Zabbix"
    ]
  },
  {
    id: 9,
    title: "Servidores em Cloud",
    shortDescription: "Escalabilidade e Segurança com as Soluções da Parmenes",
    description: "Na era digital, o desempenho e a segurança dos servidores são cruciais para o sucesso de qualquer empresa. Oferecemos soluções robustas e personalizadas em servidores cloud, ajudando sua empresa a alcançar novos patamares de eficiência e segurança. Nossas soluções em cloud são projetadas para escalar vertical e horizontalmente, garantindo que sua operação não sofra interrupções, mesmo em momentos de alta demanda.",
    howItWorks: "Realizamos uma análise completa das suas necessidades, implementamos servidores cloud otimizados, configuramos sistemas de proteção avançada e monitoramento contínuo, e fornecemos suporte especializado 24/7 para garantir a máxima disponibilidade e desempenho.",
    benefits: [
      "Escalabilidade sob medida para o crescimento do seu negócio",
      "Proteção avançada contra ataques cibernéticos",
      "Monitoramento contínuo e suporte 24/7",
      "Backup automatizado e recuperação de dados",
      "Conformidade com LGPD e GDPR"
    ],
    image: cloudServers,
    relatedServices: [
      "Cloud Computing",
      "Segurança de TI",
      "Monitoramento com Zabbix"
    ]
  },
  {
    id: 10,
    title: "Backups e Arquivamentos em Nuvem",
    shortDescription: "A Solução Definitiva para Proteção de Dados",
    description: "A proteção e o gerenciamento eficiente de dados são pilares fundamentais para qualquer organização moderna. Oferecemos soluções robustas de backup e arquivamento em nuvem com criptografia de ponta, garantindo que seus dados estejam sempre seguros e acessíveis. Nossa solução proporciona acessibilidade global, escalabilidade conforme a necessidade e recuperação rápida em caso de incidentes.",
    howItWorks: "Iniciamos com uma consultoria especializada para identificar requisitos específicos, implementamos a solução personalizada com transição ágil e segura, configuramos monitoramento contínuo e fornecemos suporte 24/7 para garantir a integridade dos seus dados.",
    benefits: [
      "Segurança avançada com criptografia de ponta",
      "Acessibilidade global aos dados",
      "Escalabilidade conforme crescimento",
      "Recuperação rápida de desastres",
      "Conformidade com LGPD e outras regulamentações"
    ],
    image: backup,
    relatedServices: [
      "Cloud Computing",
      "Segurança de TI",
      "Servidores em Cloud"
    ]
  },
  {
    id: 11,
    title: "Conexões Seguras com VPN",
    shortDescription: "Proteja seus Dados e Acessos com Soluções VPN Profissionais",
    description: "Em um mundo cada vez mais digital, garantir a segurança dos seus dados e acessos é essencial. Nossa tecnologia VPN oferece proteção robusta para suas comunicações, garantindo que todas as informações transmitidas entre dispositivos e servidores sejam criptografadas, protegendo dados pessoais, comerciais e financeiros contra ameaças cibernéticas.",
    howItWorks: "Implementamos uma solução VPN personalizada após análise detalhada das suas necessidades, configuramos a infraestrutura com os mais altos padrões de segurança, realizamos testes abrangentes e fornecemos treinamento completo para sua equipe, além de monitoramento contínuo e suporte técnico especializado.",
    benefits: [
      "Criptografia avançada para proteção de dados",
      "Acesso remoto seguro à rede corporativa",
      "Alta performance sem comprometer a segurança",
      "Privacidade garantida em conexões públicas",
      "Suporte técnico especializado 24/7"
    ],
    image: vpn,
    relatedServices: [
      "Segurança de TI",
      "Infraestrutura de TI",
      "Cloud Computing"
    ]
  },
  {
    id: 12,
    title: "Cabeamento Estruturado",
    shortDescription: "Excelência em Infraestrutura de Redes com Cabeamento Organizado e Eficiente",
    description: "Quando o assunto é infraestrutura de redes de comunicação, a Parmenes IT se destaca como referência em soluções de cabeamento estruturado. Desenvolvemos e implementamos projetos personalizados que garantem redes organizadas, estáveis e preparadas para o futuro, utilizando materiais de alta qualidade e as melhores práticas do mercado.",
    howItWorks: "Nossa abordagem começa com uma análise detalhada das necessidades do cliente, seguida pelo desenvolvimento de um projeto personalizado. Implementamos soluções com cabeamento óptico e metálico de alta qualidade, realizamos a organização completa de racks e painéis de conexão, e estabelecemos um sistema de identificação e padronização detalhado.",
    benefits: [
      "Infraestrutura de rede organizada e eficiente",
      "Cabeamento de alta qualidade e durabilidade",
      "Organização profissional de racks e painéis",
      "Sistema de identificação detalhado",
      "Preparação para crescimento futuro"
    ],
    image: cabling,
    relatedServices: [
      "Infraestrutura de TI",
      "Segurança de TI",
      "Monitoramento com Zabbix"
    ]
  },
  {
    id: 13,
    title: "Projetos de Redes Sem Fio",
    shortDescription: "Soluções Wi-Fi de Alta Performance para Ambientes Corporativos",
    description: "Em um mundo cada vez mais conectado, a qualidade da sua rede sem fio pode fazer toda a diferença no desempenho dos negócios e na experiência dos usuários. A Parmenes IT é especialista em desenvolver projetos de redes Wi-Fi de alta performance, alinhados com as mais modernas tecnologias disponíveis no mercado. Nossas soluções garantem cobertura total, eliminando zonas de sombra e proporcionando uma conexão estável mesmo em ambientes com alta densidade de usuários.",
    howItWorks: "Nossa abordagem começa com uma análise detalhada do ambiente, incluindo mapeamento de interferências e estudo de cobertura. Desenvolvemos um projeto personalizado utilizando as melhores tecnologias, como Wi-Fi 6 e Wi-Fi 6E, implementamos a solução com equipamentos de alta qualidade e realizamos testes abrangentes para garantir a cobertura ideal em todas as áreas.",
    benefits: [
      "Cobertura total sem zonas de sombra",
      "Alta performance mesmo com múltiplos usuários",
      "Segurança avançada com WPA3",
      "Monitoramento em tempo real",
      "Escalabilidade para crescimento futuro"
    ],
    image: wireless,
    relatedServices: [
      "Infraestrutura de TI",
      "Segurança de TI",
      "Cabeamento Estruturado"
    ]
  },
  {
    id: 14,
    title: "Automação Residencial",
    shortDescription: "Transforme sua Casa em um Ambiente Inteligente e Conectado",
    description: "Na Parmenes IT, acreditamos que a tecnologia pode transformar vidas, trazendo mais conforto, praticidade e segurança ao seu lar. Oferecemos soluções de automação residencial que incorporam o que há de mais sofisticado no mercado de IoT (Internet das Coisas), permitindo o controle total da sua casa através do smartphone ou comandos de voz.",
    howItWorks: "Iniciamos com uma análise detalhada das suas necessidades e do ambiente, desenvolvemos um projeto personalizado, instalamos os dispositivos inteligentes selecionados, configuramos a integração com assistentes virtuais e oferecemos treinamento completo para você aproveitar ao máximo sua casa inteligente.",
    benefits: [
      "Controle total da iluminação com cenários personalizados",
      "Climatização inteligente com eficiência energética",
      "Sistema de segurança avançado com monitoramento remoto",
      "Integração com principais assistentes virtuais",
      "Eletrodomésticos conectados para maior praticidade"
    ],
    image: homeAutomation,
    relatedServices: [
      "Segurança de TI",
      "Infraestrutura de TI",
      "Projetos de Redes Sem Fio"
    ]
  }
];