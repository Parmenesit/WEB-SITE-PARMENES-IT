import i18n from '../i18n/config';

class TranslateService {
  private googleTranslateElement: any = null;

  init() {
    // Add Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Define the callback function
    (window as any).googleTranslateElementInit = () => {
      this.googleTranslateElement = new (window as any).google.translate.TranslateElement({
        pageLanguage: i18n.language,
        includedLanguages: 'en,es,pt',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, 'google_translate_element');
    };

    // Add styles to hide Google Translate widget
    const style = document.createElement('style');
    style.textContent = `
      .goog-te-banner-frame,
      .goog-te-gadget-simple,
      .goog-te-menu-value,
      .goog-te-gadget span,
      .goog-te-gadget br {
        display: none !important;
      }
      .goog-te-gadget {
        height: 0 !important;
        width: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
      }
      body {
        top: 0 !important;
      }
    `;
    document.head.appendChild(style);
  }

  translate(targetLang: string) {
    if (this.googleTranslateElement) {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.value = targetLang;
        select.dispatchEvent(new Event('change'));
      }
    }
  }
}

export const translateService = new TranslateService();