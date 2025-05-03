import { useTranslation } from 'react-i18next';
import { clients } from '../data/clients';

const ClientLogos = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-10">
      <h2 className="text-2xl font-bold text-center text-[#4B4B4D] mb-8">
        {t('clients.title', 'Alguns de Nossos Clientes')}
      </h2>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center justify-center">
          {clients.map((client, index) => (
            <a 
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1"
            >
              {/* Hover overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#A8CF45]/20 to-[#8fb938]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Logo image */}
              <img 
                src={client.logo} 
                alt={client.name}
                className="w-full h-auto max-h-[150px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Tooltip */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full bg-[#4B4B4D] text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                {client.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;