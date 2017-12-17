export const VERSION = 1.0;

// config도 comp별로 나누면 좋겠다
export const PROJECTOR_CLASS = '__sp__projector__container';
export const SLIDER_CLASS = '__sp__slider__container';
export const SLIDE_CLASS = '__sp__slider__slide';
export const NAVIGATOR_CLASS = '__sp__navigator';
export const NAVIGATOR_PREV_CLASS = '__sp__navigator__prev';
export const NAVIGATOR_NEXT_CLASS = '__sp__navigator__next';
export const INDICATOR_CLASS = '__sp__indicator__container';
export const INDICATOR_ITEM_CLASS = '__sp__indicator__item __sp__indicator__item--circle';

export const NAVIGATOR_PREV_PHRASE = '이전 슬라이드';
export const NAVIGATOR_NEXT_PHRASE = '다음 슬라이드';

export const DEFAULT_OPTIONS = {
  projectorSelector: PROJECTOR_CLASS,
  slideSelector: SLIDE_CLASS,
  indicator: true,
  navigator: true
};

export const ERROR_MESSAGE = {
  OPTION_REQUIRED: '옵션값이 필요합니다.',
  INVALID_SELECTOR: '올바른 selector를 입력해주세요.',
};
