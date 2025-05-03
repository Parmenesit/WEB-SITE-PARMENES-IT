import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../data/faq';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#4B4B4D] mb-8">Perguntas Frequentes</h2>
      
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-4 md:p-5 text-left"
            >
              <span className="font-medium text-[#4B4B4D]">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-[#A8CF45]" size={20} />
              ) : (
                <ChevronDown className="text-[#BCBEBF]" size={20} />
              )}
            </button>
            
            <div 
              className={`
                overflow-hidden transition-all duration-300 
                ${openIndex === index ? 'max-h-40' : 'max-h-0'}
              `}
            >
              <div className="p-4 md:p-5 pt-0 text-[#4B4B4D]">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;