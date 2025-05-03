import { useTranslation } from 'react-i18next';
import { languages } from '../config/languages';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('lang', langCode);
  };

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`relative group ${
            i18n.language === lang.code
              ? 'transform scale-110'
              : 'hover:transform hover:scale-110'
          } transition-all duration-300`}
          title={lang.name}
        >
          <img
            src={lang.flag}
            alt={lang.name}
            className={`w-8 h-6 rounded shadow-sm transition-opacity duration-300 ${
              i18n.language === lang.code
                ? 'opacity-100'
                : 'opacity-70 group-hover:opacity-100'
            }`}
          />
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black/75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {lang.name}
          </div>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;