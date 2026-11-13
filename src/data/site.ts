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
  /** Slugs of the products where this work shows up. */
  usedIn: string[];
}

export const capabilities: Localized<Capability[]> = {
  en: [
    {
      id: 'applied-intelligence',
      name: 'Applied machine learning',
      description: 'Model evaluation, optimization and integration.',
      detail: 'We measure how a model behaves on the real task and design around the ways it fails. In AVT the model is not allowed to write numbers at all; in Sketchmindai it only runs after a parent switches it on.',
      usedIn: ['avt', 'sketchmindai'],
    },
    {
      id: 'systems-engineering',
      name: 'Systems engineering',
      description: 'Software architecture, infrastructure and performance.',
      detail: 'Software that runs inside the customer’s own environment: local models, roles, SSO/SCIM, an audit log and signed records that can be verified later.',
      usedIn: ['avt'],
    },
    {
      id: 'product-development',
      name: 'Product development',
      description: 'Prototypes, interfaces and application development.',
      detail: 'From the first prototype to the store listing: screens a child can use alone, and parent settings clear enough to trust.',
      usedIn: ['sketchmindai', 'avt'],
    },
    {
      id: 'experimental-research',
      name: 'Experimental research',
      description: 'Small experiments to compare technical approaches.',
      detail: 'We set a baseline, measure against it and write down the limits. AVT’s root-cause detection scores F1 1.00 against 0.40 for a naive method, on synthetic and public data.',
      usedIn: ['avt'],
    },
  ],
  tr: [
    {
      id: 'applied-intelligence',
      name: 'Uygulamalı makine öğrenmesi',
      description: 'Model değerlendirme, iyileştirme ve entegrasyon.',
      detail: 'Modelin gerçek işte nasıl davrandığını ölçer, yanıldığı yerlere göre tasarlarız. AVT’de model metne hiç rakam yazamaz; Sketchmindai’da ancak ebeveyn açtıktan sonra çalışır.',
      usedIn: ['avt', 'sketchmindai'],
    },
    {
      id: 'systems-engineering',
      name: 'Sistem mühendisliği',
      description: 'Yazılım mimarisi, altyapı ve performans.',
      detail: 'Müşterinin kendi ortamında çalışan yazılım: yerel model, roller, SSO/SCIM, denetim günlüğü ve sonradan doğrulanabilen imzalı kayıtlar.',
      usedIn: ['avt'],
    },
    {
      id: 'product-development',
      name: 'Ürün geliştirme',
      description: 'Prototipler, arayüzler ve uygulama geliştirme.',
      detail: 'İlk prototipten mağaza sayfasına kadar: bir çocuğun tek başına kullanabileceği ekranlar ve güvenilecek kadar açık ebeveyn ayarları.',
      usedIn: ['sketchmindai', 'avt'],
    },
    {
      id: 'experimental-research',
      name: 'Deneysel araştırma',
      description: 'Teknik yaklaşımları karşılaştıran küçük deneyler.',
      detail: 'Bir karşılaştırma noktası koyar, ona göre ölçer ve sınırları yazarız. AVT’nin gerçek nedeni bulma başarısı sentetik ve açık verilerde F1 1,00; klasik yöntemde 0,40.',
      usedIn: ['avt'],
    },
  ],
};
