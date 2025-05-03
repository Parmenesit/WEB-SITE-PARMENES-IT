import { useState, useEffect } from 'react';
import { X, Cookie, Shield, Info, Check } from 'lucide-react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
        applyTrackingPreferences(savedPreferences);
      } catch (e) {
        console.error('Error parsing cookie preferences:', e);
      }
    }
  }, []);

  const applyTrackingPreferences = (prefs: typeof preferences) => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': prefs.analytics ? 'granted' : 'denied',
        'ad_storage': prefs.marketing ? 'granted' : 'denied',
        'functionality_storage': prefs.functional ? 'granted' : 'denied'
      });
    }

    // Facebook Pixel
    if (window.fbq) {
      if (prefs.marketing) {
        window.fbq('consent', 'grant');
      } else {
        window.fbq('consent', 'revoke');
      }
    }

    // Set cookie for preferences
    Cookies.set('cookieConsent', JSON.stringify(prefs), { expires: 365 });
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allAccepted);
    applyTrackingPreferences(allAccepted);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    applyTrackingPreferences(preferences);
    setIsVisible(false);
  };

  const handleDecline = () => {
    const allDeclined = {
      analytics: false,
      marketing: false,
      functional: false
    };
    setPreferences(allDeclined);
    applyTrackingPreferences(allDeclined);
    setIsVisible(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden animate-[fadeInUp_0.5s_ease-out]">
        {/* Header */}
        <div className="bg-[#A8CF45] p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Cookie className="w-8 h-8 text-white" />
            <h2 className="text-xl font-bold text-white">Política de Cookies</h2>
          </div>
          <button
            onClick={handleDecline}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="prose max-w-none text-[#4B4B4D]">
            <p className="text-lg mb-4">
              Utilizamos cookies para melhorar sua experiência em nosso site. Por favor, escolha suas preferências de cookies abaixo.
            </p>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center text-[#A8CF45] hover:text-[#8fb938] transition-colors mb-4"
            >
              <Info size={18} className="mr-2" />
              <span>{showDetails ? 'Ocultar detalhes' : 'Ver mais detalhes'}</span>
            </button>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-[#A8CF45] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Cookies Essenciais</h3>
                    <p className="text-sm text-[#4B4B4D]/80">
                      Necessários para o funcionamento básico do site. Sempre ativos.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-[#A8CF45]" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Cookie className="w-5 h-5 text-[#A8CF45] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Cookies Analíticos</h3>
                    <p className="text-sm text-[#4B4B4D]/80">
                      Nos ajudam a entender como você usa o site.
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => togglePreference('analytics')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A8CF45]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Cookie className="w-5 h-5 text-[#A8CF45] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Cookies de Marketing</h3>
                    <p className="text-sm text-[#4B4B4D]/80">
                      Usados para personalizar anúncios e conteúdo.
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => togglePreference('marketing')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A8CF45]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Cookie className="w-5 h-5 text-[#A8CF45] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Cookies Funcionais</h3>
                    <p className="text-sm text-[#4B4B4D]/80">
                      Melhoram a funcionalidade do site.
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={() => togglePreference('functional')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A8CF45]"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 flex flex-col sm:flex-row justify-end gap-3">
          <button
            onClick={handleDecline}
            className="px-6 py-2 text-[#4B4B4D] bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Recusar Todos
          </button>
          <button
            onClick={handleSavePreferences}
            className="px-6 py-2 text-[#4B4B4D] bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Salvar Preferências
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-6 py-2 text-white bg-[#A8CF45] rounded-lg hover:bg-[#8fb938] transition-colors"
          >
            Aceitar Todos
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;