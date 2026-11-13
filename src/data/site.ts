import { localize, type Lang, type Localized } from '../i18n';

/** Company facts live here. Leave unpublished information empty. */
export const site = {
  name: 'Vesuliria',
  url: 'https://vesuliria.com',
  email: 'unlu.mehmett1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/unlumehmett1/',
  description: {
    en: 'An independent technology company working in applied research, software engineering and product development.',
    tr: 'Uygulamalı araştırma, yazılım mühendisliği ve ürün geliştirme alanlarında çalışan bağımsız bir teknoloji şirketi.',
  } as Localized<string>,
};

const navLabels: Localized<[string, string, string]> = {
  en: ['Company', 'Capabilities', 'Work'],
  tr: ['Şirket', 'Yetenekler', 'İşler'],
};

export function navigation(lang: Lang) {
  const [company, capabilities, work] = navLabels[lang];
  return [
    { label: company, href: localize(lang, '/company') },
    { label: capabilities, href: localize(lang, '/capabilities') },
    { label: work, href: localize(lang, '/work') },
  ];
}

export interface Capability {
  id: string;
  name: string;
  description: string;
  detail: string;
}

export const capabilities: Localized<Capability[]> = {
  en: [
    {
      id: 'applied-intelligence',
      name: 'Applied machine learning',
      description: 'Model evaluation, optimization and integration.',
      detail: 'We look at how models perform on the task at hand, how they fail, and what it takes to run them within a system.',
    },
    {
      id: 'systems-engineering',
      name: 'Systems engineering',
      description: 'Software architecture, infrastructure and performance.',
      detail: 'We consider how components fit together, where bottlenecks are likely to appear, and how the system can be maintained over time.',
    },
    {
      id: 'product-development',
      name: 'Product development',
      description: 'Prototypes, interfaces and application development.',
      detail: 'We start with the task someone needs to do, test the workflow in a prototype, and use the results to decide what to build.',
    },
    {
      id: 'experimental-research',
      name: 'Experimental research',
      description: 'Small experiments to compare technical approaches.',
      detail: 'We set a baseline, define how to measure a result, and document the limitations so the next decision has a clear basis.',
    },
  ],
  tr: [
    {
      id: 'applied-intelligence',
      name: 'Uygulamalı makine öğrenmesi',
      description: 'Model değerlendirme, iyileştirme ve entegrasyon.',
      detail: 'Modellerin eldeki işte nasıl performans gösterdiğine, nerede yanıldığına ve bir sistemin içinde çalışmaları için neler gerektiğine bakarız.',
    },
    {
      id: 'systems-engineering',
      name: 'Sistem mühendisliği',
      description: 'Yazılım mimarisi, altyapı ve performans.',
      detail: 'Bileşenlerin birbirine nasıl oturduğunu, darboğazların nerede çıkabileceğini ve sistemin zaman içinde nasıl bakımının yapılacağını düşünürüz.',
    },
    {
      id: 'product-development',
      name: 'Ürün geliştirme',
      description: 'Prototipler, arayüzler ve uygulama geliştirme.',
      detail: 'Birinin yapması gereken işten başlarız, iş akışını bir prototipte deneriz ve neyi inşa edeceğimize sonuçlara bakarak karar veririz.',
    },
    {
      id: 'experimental-research',
      name: 'Deneysel araştırma',
      description: 'Teknik yaklaşımları karşılaştıran küçük deneyler.',
      detail: 'Bir karşılaştırma noktası belirler, sonucun nasıl ölçüleceğini tanımlar ve sınırlılıkları yazarız; böylece sonraki kararın sağlam bir dayanağı olur.',
    },
  ],
};
