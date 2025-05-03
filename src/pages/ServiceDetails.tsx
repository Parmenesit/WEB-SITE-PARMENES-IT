import { ArrowLeft, Check, MessageCircle } from 'lucide-react';
import { Service } from '../data/services';

interface ServiceDetailsProps {
  service: Service | null;
  navigateTo: (page: string) => void;
}

const ServiceDetails = ({ service, navigateTo }: ServiceDetailsProps) => {
  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-[#4B4B4D]">Serviço não encontrado.</p>
        <button 
          onClick={() => navigateTo('home')}
          className="mt-4 inline-flex items-center text-[#A8CF45] hover:text-[#8fb938]"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span>Voltar para a página inicial</span>
        </button>
      </div>
    );
  }

  // Map service names to their respective page routes
  const serviceRoutes: { [key: string]: string } = {
    'Cloud Computing': 'cloud',
    'Segurança de TI': 'security',
    'Backup e Recuperação de Dados': 'backup',
    'Consultoria em TI': 'support',
    'Infraestrutura de TI': 'servers',
    'Backup como Serviço': 'backup',
    'Infraestrutura de Rede': 'cabling',
    'Soluções de Colaboração': 'voip',
    'Gestão de Identidade e Acesso': 'security',
    'Consultoria em Conformidade': 'security',
    'Monitoramento com Zabbix': 'zabbix',
    'Redes Sem Fio': 'wireless',
    'Automação Residencial': 'automation',
    'Soluções VoIP': 'voip',
    'Cabeamento Estruturado': 'cabling'
  };

  const handleRelatedServiceClick = (serviceName: string) => {
    const route = serviceRoutes[serviceName];
    if (route) {
      navigateTo(route);
    }
  };

  return (
    <div>
      {/* Hero */}
      <div 
        className="relative h-[300px] md:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="max-w-2xl mx-auto text-lg">{service.shortDescription}</p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => navigateTo('home')}
            className="inline-flex items-center text-[#4B4B4D] hover:text-[#A8CF45] transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Voltar para a página inicial</span>
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#4B4B4D] mb-6">Sobre {service.title}</h2>
            <div className="prose max-w-none text-[#4B4B4D]">
              <p className="mb-4">{service.description}</p>
              
              <h3 className="text-xl font-semibold text-[#4B4B4D] mt-8 mb-4">Como Funciona</h3>
              <p className="mb-4">{service.howItWorks}</p>
              
              <h3 className="text-xl font-semibold text-[#4B4B4D] mt-8 mb-4">Benefícios</h3>
              <ul className="space-y-2 mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-[#A8CF45] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#4B4B4D] mb-4">Solicite uma Consulta</h3>
                <p className="text-[#4B4B4D] mb-6">
                  Interessado em nosso serviço de {service.title.toLowerCase()}? 
                  Entre em contato para uma avaliação personalizada.
                </p>
                
                <a 
                  href="https://wa.me/551132302721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#A8CF45] hover:bg-[#8fb938] text-white py-3 rounded-md transition-all duration-300 font-medium group hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  <span>Fale com um Especialista</span>
                </a>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h4 className="font-semibold text-[#4B4B4D] mb-4">Também Oferecemos</h4>
                <ul className="space-y-3">
                  {service.relatedServices.map((related, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => handleRelatedServiceClick(related)}
                        className="text-[#A8CF45] hover:text-[#8fb938] transition-colors text-left"
                      >
                        {related}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;