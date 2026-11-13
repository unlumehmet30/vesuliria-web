import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n';
import particleField from '../assets/workshop/data-particle-field.webp';
import flowDiagram from '../assets/workshop/flow-diagram.webp';
import mechanicalDrawing from '../assets/workshop/mechanical-drawing.webp';
import waveform from '../assets/workshop/waveform-measurement.webp';

/** Concept illustrations from the visual identity kit. They are not product output or real measurements. */
export interface Cover {
  image: ImageMetadata;
  position: string;
  alt: Localized<string>;
}

export const capabilityCovers: Record<string, Cover> = {
  'applied-intelligence': {
    image: particleField,
    position: '50% 40%',
    alt: {
      en: 'Stippled surface of dots rising into waves above a fine grid',
      tr: 'İnce bir ızgaranın üzerinde dalgalar halinde yükselen noktalı bir yüzey',
    },
  },
  'systems-engineering': {
    image: flowDiagram,
    position: '50% 50%',
    alt: {
      en: 'Parallel lines curve around a circular form in a schematic drawing',
      tr: 'Şematik bir çizimde dairesel bir biçimin etrafında kıvrılan paralel çizgiler',
    },
  },
  'product-development': {
    image: mechanicalDrawing,
    position: '30% 50%',
    alt: {
      en: 'Technical drawing of a gear with dimension lines',
      tr: 'Ölçü çizgileriyle bir dişlinin teknik çizimi',
    },
  },
  'experimental-research': {
    image: waveform,
    position: '15% 50%',
    alt: {
      en: 'A decaying waveform traced across a measurement grid',
      tr: 'Bir ölçüm ızgarası boyunca sönümlenen bir dalga formu',
    },
  },
};
