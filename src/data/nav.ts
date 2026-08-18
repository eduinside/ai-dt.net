/**
 * 사이트 네비게이션 단일 출처 — 헤더·사이트맵·수업이야기 허브가 공유한다.
 * 메뉴를 바꿀 때는 이 파일만 고치면 된다.
 * 구조는 원본 네비게이션(docs/original/CONTENT.md §1)을 계승.
 */
export interface NavChild {
  href: string;
  label: string;
  /** 카드형 노출(수업이야기 허브 등)에서 쓰는 한 줄 설명 */
  desc?: string;
  external?: boolean;
  /** 네비게이션 메뉴에 "NEW" 배지를 붙일지 */
  isNew?: boolean;
}

export interface NavItem {
  href: string;
  label: string;
  children?: NavChild[];
}

export const nav: NavItem[] = [
  {
    href: '/index',
    label: '지원센터',
    children: [
      { href: '/index/manual', label: '사전 준비사항 안내' },
      { href: '/index/AIDT', label: 'AI·디지털 교육자료 활용 도움자료' },
      { href: '/index/eduonepass', label: '교육디지털원패스' },
      { href: '/index/software', label: '학습지원 소프트웨어' },
      { href: '/index/faq', label: '선도학교 운영 관련 FAQ' },
      { href: '/index/feedback', label: '발행사 답변' },
    ],
  },
  {
    href: '/class',
    label: '수업이야기',
    children: [
      {
        href: '/class/case',
        label: 'AI·디지털 교육자료 활용 수업 사례',
        desc: 'AI·디지털 교육자료를 활용한 수업 사례 카드뉴스',
        isNew: true,
      },
      {
        href: '/class/edtech',
        label: '에듀테크 활용 수업 사례',
        desc: '에듀테크 도구를 AI·디지털 교육자료와 함께 활용한 수업 사례',
        isNew: true,
      },
      {
        href: '/class/curriculum',
        label: '수업설계 지원',
        desc: 'AI·디지털 교육자료를 활용한 수업설계 도움자료',
      },
      {
        href: '/class/mid',
        label: '중등 AI·디지털 교육자료 지원',
        desc: '중등 교과별 활용 안내 영상',
      },
      {
        href: 'https://sites.google.com/dge.go.kr/aidt-tutoring-t/home',
        label: 'AI수학 디지털 교육자료 튜터링',
        external: true,
      },
      { href: 'https://aidtshow.kr/', label: '웹전시관 바로가기', external: true },
    ],
  },
  { href: '/study', label: '스스로 학습 안내' },
  { href: '/contact', label: '문의 및 장애 지원' },
];

/** 네비 그룹에 속하지 않는 단독 페이지 — 사이트맵용 */
export const standalone: NavChild[] = [
  { href: '/', label: '홈' },
  { href: '/search', label: '사이트 내 검색' },
  { href: '/sitemap', label: '사이트맵' },
];
