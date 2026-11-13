import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n';
import avtReport from '../assets/products/avt-report.jpg';
import avtFindings from '../assets/products/avt-findings.jpg';
import avtOverview from '../assets/products/avt-overview.jpg';
import smSite from '../assets/products/sketchmindai-site.jpg';
import smCompanions from '../assets/products/sketchmindai-companions.png';
import smStart from '../assets/products/sketchmindai-start.png';

export interface Figure {
  image: ImageMetadata;
  alt: Localized<string>;
  caption: Localized<string>;
  aspect?: 'landscape' | 'portrait' | 'square';
}

/** `embed` is a YouTube/Vimeo embed URL; `file` is a video under `public/`. */
export interface Video {
  title: Localized<string>;
  embed?: string;
  file?: string;
}

export interface ProjectCopy {
  category: string;
  description: string;
  status: string;
  imageAlt: string;
  tagline: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  facts?: { value: string; label: string }[];
  factsNote?: string;
  site: { href: string; label: string };
}

export interface Project {
  slug: string;
  name: string;
  image: ImageMetadata;
  year?: string;
  aspect?: 'landscape' | 'portrait' | 'square';
  gallery: Figure[];
  videos: Video[];
  copy: Localized<ProjectCopy>;
}

/** Add only confirmed work, with imagery approved for publication. */
export const projects: Project[] = [
  {
    slug: 'avt',
    name: 'Vesuliria AVT',
    image: avtReport,
    gallery: [
      {
        image: avtFindings,
        alt: { en: 'Verified findings with confidence levels, limitations and recommendations awaiting approval', tr: 'Güven düzeyleriyle doğrulanmış bulgular, sınırlılıklar ve onay bekleyen öneriler' },
        caption: { en: 'Verified findings, stated limitations and recommendations awaiting human approval', tr: 'Doğrulanmış bulgular, açıkça yazılmış sınırlılıklar ve insan onayı bekleyen öneriler' },
      },
      {
        image: avtOverview,
        alt: { en: 'AVT workspace overview with recent reports', tr: 'Son raporlarla AVT çalışma alanı' },
        caption: { en: 'Workspace overview', tr: 'Çalışma alanı' },
      },
    ],
    videos: [],
    copy: {
      en: {
        category: 'Enterprise analytics',
        description: 'Auditable AI analytics for banks and regulated institutions. Every number traces back to a recorded query, a statistical test and a signed report.',
        status: 'Pilot programme open',
        imageAlt: 'AVT analysis report with the headline change, confidence, data quality and verified findings',
        tagline: 'AI analytics with evidence an auditor can check.',
        intro: [
          'Ask a question about your institution’s data in plain language. AVT answers with the query behind every number, the statistical test each claim passed and a signed record of the whole analysis.',
          'Months later, the same result can be recomputed from the record. The system runs inside the institution’s own environment, with its own model; data does not leave.',
        ],
        highlights: [
          { title: 'No unsourced numbers', text: 'The model cannot write figures into the text. Every number is placed by the system from a recorded query.' },
          { title: 'Claims must pass a test', text: 'Each finding goes through a statistical test. When the evidence is not enough, the answer says so.' },
          { title: 'Signed and recomputable', text: 'Reports are sealed with an Ed25519 signature. An auditor can verify the seal and rerun the analysis.' },
          { title: 'Runs on-premise', text: 'Deploys on the institution’s servers with a local model, roles, SSO/SCIM and an audit log.' },
        ],
        facts: [
          { value: '0', label: 'unsourced numbers; blocked by design' },
          { value: '1.00 / 0.40', label: 'root-cause detection (F1), AVT vs. naive method' },
          { value: '2 / 100', label: 'false alarms when there is no signal' },
          { value: '4,071', label: 'automated tests' },
        ],
        factsNote: 'Measured on synthetic and public datasets.',
        site: { href: '/avt/en/', label: 'Visit the AVT site' },
      },
      tr: {
        category: 'Kurumsal analitik',
        description: 'Bankalar ve düzenlemeye tabi kurumlar için denetlenebilir yapay zekâ analitiği. Her sayı kayıtlı bir sorguya, bir istatistik testine ve imzalı bir rapora dayanır.',
        status: 'Pilot programı açık',
        imageAlt: 'Ana değişimi, güveni, veri kalitesini ve doğrulanmış bulguları gösteren AVT analiz raporu',
        tagline: 'Yapay zekâ analitiği, denetçiye gösterilebilir kanıtla.',
        intro: [
          'Kurum verinize sade Türkçeyle soru sorun. AVT cevabı; her sayının arkasındaki sorgu, her iddianın geçtiği istatistik testi ve analizin tamamının imzalı kaydıyla birlikte verir.',
          'Aylar sonra aynı sonuç bu kayıttan yeniden hesaplanabilir. Sistem kurumun kendi ortamında, kendi modeliyle çalışır; veri dışarı çıkmaz.',
        ],
        highlights: [
          { title: 'Kaynaksız sayı yok', text: 'Model metne rakam yazamaz. Her sayıyı sistem, kayıtlı bir sorgudan alıp yerleştirir.' },
          { title: 'İddia testten geçmeli', text: 'Her bulgu bir istatistik testinden geçer. Kanıt yetmiyorsa cevap bunu açıkça söyler.' },
          { title: 'İmzalı ve yeniden hesaplanabilir', text: 'Raporlar Ed25519 imzasıyla mühürlenir. Denetçi mührü doğrulayıp analizi yeniden çalıştırabilir.' },
          { title: 'Kurum içinde çalışır', text: 'Kurumun sunucularına yerel model, roller, SSO/SCIM ve denetim günlüğüyle kurulur.' },
        ],
        facts: [
          { value: '0', label: 'kaynaksız sayı; yapısal olarak engelli' },
          { value: '1,00 / 0,40', label: 'gerçek nedeni bulma (F1), AVT ve klasik yöntem' },
          { value: '2 / 100', label: 'sinyal yokken yanlış alarm' },
          { value: '4.071', label: 'otomatik test' },
        ],
        factsNote: 'Sentetik ve açık veri kümelerinde ölçülmüştür.',
        site: { href: '/avt/', label: 'AVT sitesine git' },
      },
    },
  },
  {
    slug: 'sketchmindai',
    name: 'Sketchmindai',
    image: smSite,
    gallery: [
      {
        image: smCompanions,
        alt: { en: 'Four story companions: Lopa the otter, Duru the owl, Pamu the panda and Renka the chameleon', tr: 'Dört hikâye arkadaşı: su samuru Lopa, baykuş Duru, panda Pamu ve bukalemun Renka' },
        caption: { en: 'Story companions', tr: 'Hikâye arkadaşları' },
        aspect: 'square',
      },
      {
        image: smStart,
        alt: { en: 'App start screen where Lopa invites the child to begin an adventure', tr: 'Lopa’nın çocuğu maceraya davet ettiği başlangıç ekranı' },
        caption: { en: 'Starting a story with a companion', tr: 'Bir arkadaşla hikâyeye başlamak' },
        aspect: 'portrait',
      },
    ],
    videos: [],
    copy: {
      en: {
        category: 'Mobile app',
        description: 'Turns children’s drawings into stories and reads them aloud. Every AI feature stays off until a parent allows it.',
        status: 'App Store and Google Play soon',
        imageAlt: 'Sketchmindai home page: a child’s drawing becoming a story',
        tagline: 'A child’s drawing, turned into a story.',
        intro: [
          'A child draws on paper or on screen and tells what is happening. Sketchmindai turns the drawing and the telling into a story suited to the child’s age band, then reads it aloud.',
          'Parents decide first: chat, story and drawing features stay off until a parent explicitly allows them.',
        ],
        highlights: [
          { title: 'AI starts switched off', text: 'Nothing runs until a parent gives permission, and permission can be withdrawn at any time.' },
          { title: 'Minimal personal data', text: 'No email or phone number. Accounts run on a random identifier; a nickname is enough.' },
          { title: 'No ads, no tracking', text: 'No advertising, behavioural tracking or third-party analytics.' },
          { title: 'Deletion in the parent’s hands', text: 'One option in family settings deletes stories, drawings, recordings and the account from the server.' },
        ],
        site: { href: 'https://sketchmindai.com', label: 'Visit sketchmindai.com' },
      },
      tr: {
        category: 'Mobil uygulama',
        description: 'Çocukların çizimlerini hikâyeye dönüştürür ve sesli okur. Her yapay zekâ özelliği, ebeveyn izin verene kadar kapalı kalır.',
        status: 'App Store ve Google Play’de yakında',
        imageAlt: 'Sketchmindai ana sayfası: bir çocuk çiziminin hikâyeye dönüşmesi',
        tagline: 'Çizdiği resim, bir hikâyeye dönüşsün.',
        intro: [
          'Çocuk kâğıda ya da ekrana bir şey çizer ve neler olduğunu anlatır. Sketchmindai çizimi ve anlatılanı çocuğun yaş bandına uygun bir hikâyeye çevirir, sonra sesli okur.',
          'Kararı önce ebeveyn verir: sohbet, hikâye ve çizim özellikleri ebeveyn açıkça izin verene kadar kapalı kalır.',
        ],
        highlights: [
          { title: 'Yapay zekâ kapalı başlar', text: 'Ebeveyn izin vermeden hiçbir şey çalışmaz; izin istendiği an geri alınabilir.' },
          { title: 'En az kişisel bilgi', text: 'E-posta ya da telefon numarası istenmez. Hesap rastgele bir kimlikle çalışır; takma ad yeterlidir.' },
          { title: 'Reklam ve izleme yok', text: 'Reklam, davranış izleme ya da üçüncü taraf analiz aracı yoktur.' },
          { title: 'Silme ebeveynin elinde', text: 'Aile ayarlarındaki tek bir seçenek hikâyeleri, çizimleri, ses kayıtlarını ve hesabı sunucudan siler.' },
        ],
        site: { href: 'https://sketchmindai.com', label: 'sketchmindai.com’a git' },
      },
    },
  },
];
