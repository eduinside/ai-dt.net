/**
 * 선도학교 운영 관련 FAQ 항목 — 홈 게시판과 /index/faq 페이지가 공유.
 * 원본 GAS QnA 게시판(docs/original/CONTENT.md §7) 실측: 항목 3개, 게시일 2026-05-03,
 * 답변 문서는 src/assets/replies/faq/{dir}/*.png 로 이관.
 */
export interface FaqRow {
  slug: 'faq';
  publisher: string;
  label: string;
  dir: string;
  date: string;
}

export const faqRows: FaqRow[] = [
  { slug: 'faq', publisher: 'FAQ', label: '3. 2026년 AI·디지털 활용 선도학교 운영 Q&A', dir: '03', date: '2026-05-03' },
  { slug: 'faq', publisher: 'FAQ', label: '2. AI·디지털 교육자료 활용 및 계약 관련', dir: '02', date: '2026-05-03' },
  { slug: 'faq', publisher: 'FAQ', label: '1. AI·디지털 교육자료 선정 및 주문 등 관련', dir: '01', date: '2026-05-03' },
];
