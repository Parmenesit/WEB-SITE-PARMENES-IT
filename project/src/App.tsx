import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetails from './pages/ServiceDetails';
import ZabbixMonitoring from './pages/ZabbixMonitoring';
import SecurityIT from './pages/SecurityIT';
import TechnicalSupport from './pages/TechnicalSupport';
import IntegrationsPage from './pages/IntegrationsPage';
import CustomServersPage from './pages/CustomServersPage';
import CloudComputingPage from './pages/CloudComputingPage';
import BackupCloudPage from './pages/BackupCloudPage';
import VPNPage from './pages/VPNPage';
import CablingPage from './pages/CablingPage';
import WirelessPage from './pages/WirelessPage';
import HomeAutomationPage from './pages/HomeAutomationPage';
import VoIPPage from './pages/VoIPPage';
import WebsitePage from './pages/WebsitePage';
import CookieConsent from './components/CookieConsent';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const { i18n } = useTranslation();
  
  // Language detection
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0];
      const lang = browserLang === 'pt' ? 'pt' : 'en';
      i18n.changeLanguage(lang);
      localStorage.setItem('lang', lang);
    }
  }, []);

  const navigateTo = (page: string, serviceData: any = null) => {
    setCurrentPage(page);
    if (serviceData) {
      setSelectedService(serviceData);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header navigateTo={navigateTo} />
      <main className="flex-grow">
        {currentPage === 'home' && <Home navigateTo={navigateTo} />}
        {currentPage === 'service' && <ServiceDetails service={selectedService} navigateTo={navigateTo} />}
        {currentPage === 'zabbix' && <ZabbixMonitoring navigateTo={navigateTo} />}
        {currentPage === 'security' && <SecurityIT navigateTo={navigateTo} />}
        {currentPage === 'support' && <TechnicalSupport navigateTo={navigateTo} />}
        {currentPage === 'integrations' && <IntegrationsPage navigateTo={navigateTo} />}
        {currentPage === 'servers' && <CustomServersPage navigateTo={navigateTo} />}
        {currentPage === 'cloud' && <CloudComputingPage navigateTo={navigateTo} />}
        {currentPage === 'backup' && <BackupCloudPage navigateTo={navigateTo} />}
        {currentPage === 'vpn' && <VPNPage navigateTo={navigateTo} />}
        {currentPage === 'cabling' && <CablingPage navigateTo={navigateTo} />}
        {currentPage === 'wireless' && <WirelessPage navigateTo={navigateTo} />}
        {currentPage === 'automation' && <HomeAutomationPage navigateTo={navigateTo} />}
        {currentPage === 'voip' && <VoIPPage navigateTo={navigateTo} />}
        {currentPage === 'website' && <WebsitePage navigateTo={navigateTo} />}
      </main>
      <Footer />
      <CookieConsent />
      <WhatsAppButton />
    </div>
  );
}

export default App;