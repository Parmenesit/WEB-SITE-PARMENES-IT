import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#4B4B4D] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforme Seu Negócio Agora</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Descubra como podemos revolucionar sua infraestrutura.
        </p>
        <button
          onClick={scrollToContact}
          className="inline-flex items-center relative overflow-hidden group px-8 py-4 bg-[#A8CF45] rounded-lg transition-all duration-500 ease-in-out hover:shadow-[0_0_30px_rgba(168,207,69,0.5)] transform hover:scale-105"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#A8CF45] via-[#8fb938] to-[#A8CF45] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-[gradient_3s_linear_infinite]" />
          <span className="relative z-10 font-medium text-white flex items-center">
            Solicite um Orçamento
            <ArrowRight size={18} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;