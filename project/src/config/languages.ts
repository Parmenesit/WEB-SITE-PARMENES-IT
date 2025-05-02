export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const languages: Language[] = [
  {
    code: 'pt',
    name: 'Português',
    flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/br.svg'
  },
  {
    code: 'en',
    name: 'English',
    flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/us.svg'
  }
];