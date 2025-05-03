import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-bold text-[#4B4B4D] mb-6">Entre em Contato</h2>
        
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
            Mensagem enviada com sucesso! Entraremos em contato em breve.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
            Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#4B4B4D] mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8CF45] transition-all"
              placeholder="Seu nome"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#4B4B4D] mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8CF45] transition-all"
              placeholder="seu.email@exemplo.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#4B4B4D] mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8CF45] transition-all"
              placeholder="Como podemos ajudar?"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-md
              ${isSubmitting 
                ? 'bg-[#A8CF45]/70 cursor-not-allowed' 
                : 'bg-[#A8CF45] hover:bg-[#8fb938]'
              }
              text-white font-medium transition-colors
            `}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Enviar Mensagem</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;