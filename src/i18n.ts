export type Lang = 'en' | 'tr';
export type Localized<T> = Record<Lang, T>;

/** English lives at the root, Turkish under `/tr`. */
export function localize(lang: Lang, path: string): string {
  if (lang === 'en') return path;
  return path === '/' ? '/tr/' : `/tr${path}`;
}

/** The same page in the other language, for umbrella-site paths. */
export function alternatePath(lang: Lang, pathname: string): string {
  if (lang === 'tr') return pathname.replace(/^\/tr(?=\/|$)/, '') || '/';
  return localize('tr', pathname);
}

export const ui = {
  en: {
    skip: 'Skip to content',
    contact: 'Contact',
    openNav: 'Open navigation',
    closeNav: 'Close navigation',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    footerNav: 'Footer navigation',
    backToTop: 'Back to top ↑',
    home: 'Vesuliria home',
    switchLabel: 'Türkçe',
    switchShort: 'TR',
  },
  tr: {
    skip: 'İçeriğe geç',
    contact: 'İletişim',
    openNav: 'Menüyü aç',
    closeNav: 'Menüyü kapat',
    mainNav: 'Ana menü',
    mobileNav: 'Mobil menü',
    footerNav: 'Alt menü',
    backToTop: 'Başa dön ↑',
    home: 'Vesuliria ana sayfa',
    switchLabel: 'English',
    switchShort: 'EN',
  },
} as const;
