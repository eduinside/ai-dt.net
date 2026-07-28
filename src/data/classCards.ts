/**
 * 수업이야기 카드뉴스 목록 — 활용 수업 사례 / 이럴 땐 이렇게 / 에듀테크 활용 수업 사례.
 *
 * 항목 추가 방법
 * 1) 아래 배열에 한 줄 추가 (id는 폴더명 겸 식별자, 영문 소문자·숫자·하이픈)
 * 2) 이미지: src/assets/cards/{섹션}/{id}/01.png, 02.png … (01번 = 카드뉴스 1면 = 썸네일)
 * 3) case 섹션의 PDF: public/pdf/case/{파일명} 에 두고 pdf 값에 파일명만 적는다
 *
 * 이미지 폴더가 없어도 빌드는 통과하며, 해당 카드에는 "이미지 준비 중" 표시가 나온다.
 */
export type Level = 'elem' | 'mid' | 'high';
export type Section = 'case' | 'howto' | 'edtech';

export interface CardNewsItem {
  /** 폴더명 겸 식별자 */
  id: string;
  level: Level;
  /** 썸네일 아래 제목 */
  title: string;
  /** case 전용 — public/pdf/case/ 안의 파일명 */
  pdf?: string;
}

export const levelLabels: Record<Level, string> = {
  elem: '초등학교',
  mid: '중학교',
  high: '고등학교',
};

/** 대분류 표시 순서 */
export const levelOrder: Level[] = ['elem', 'mid', 'high'];

export const sectionMeta: Record<Section, { title: string; lead: string; description: string }> = {
  case: {
    title: 'AI·디지털 교육자료 활용 수업 사례',
    lead: '학교급별 수업 사례를 카드뉴스로 정리했습니다. 카드를 누르면 크게 볼 수 있습니다.',
    description: 'AI·디지털 교육자료를 활용한 학교급별 수업 사례 카드뉴스와 수업안 PDF',
  },
  howto: {
    title: '이럴 땐 이렇게',
    lead: '수업 중 자주 마주치는 상황과 해결 방법을 카드뉴스로 안내합니다.',
    description: 'AI·디지털 교육자료 수업 중 자주 마주치는 상황별 해결 방법 안내',
  },
  edtech: {
    title: '에듀테크 활용 수업 사례',
    lead: '에듀테크 도구를 곁들인 수업 사례를 카드뉴스로 나눕니다.',
    description: '에듀테크 도구를 활용한 학교급별 수업 사례 카드뉴스',
  },
};

export const classCards: Record<Section, CardNewsItem[]> = {
  // 예) { id: 'elem-math-fraction', level: 'elem', title: '3학년 수학 — 분수의 이해', pdf: 'elem-math-fraction.pdf' },
  case: [],
  howto: [],
  edtech: [],
};
