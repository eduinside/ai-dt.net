/**
 * 수업이야기 카드뉴스 목록 — 활용 수업 사례 / 이럴 땐 이렇게 / 에듀테크 활용 수업 사례.
 *
 * 항목 추가 방법
 * 1) 아래 배열에 한 줄 추가 (id는 폴더명 겸 식별자, 영문 소문자·숫자·하이픈)
 * 2) 이미지: src/assets/cards/{섹션}/{id}/01.png, 02.png … (01번 = 카드뉴스 1면 = 썸네일)
 * 3) case 섹션의 PDF(수업안): 같은 폴더 안에 아무 이름의 .pdf 파일 하나를 두면 자동 인식된다
 * 4) publisher·subject·gradeTerm·tool은 case·edtech 카드에 태그로 표시됨 — 값이 있는 것만 나타난다
 *
 * 이미지가 없으면 "탑재 예정" 표시가, case 섹션에서 PDF가 없으면 마찬가지로 "탑재 예정"이 나온다.
 */
export type Level = 'elem' | 'mid' | 'high';
export type Section = 'case' | 'howto' | 'edtech';

export interface CardNewsItem {
  /** 폴더명 겸 식별자 */
  id: string;
  level: Level;
  /** 썸네일 아래 제목 */
  title: string;
  /** 라이트박스 사이드바에 표시되는 한 줄 설명 (카드뉴스 1면의 안내 문구를 옮겨 적은 것) */
  desc?: string;
  /** case·edtech 전용 태그 — 있는 값만 카드에 표시됨 */
  publisher?: string;
  subject?: string;
  gradeTerm?: string;
  tool?: string;
}

export const levelLabels: Record<Level, string> = {
  elem: '초등학교',
  mid: '중학교',
  high: '고등학교',
};

/** 대분류 표시 순서 */
export const levelOrder: Level[] = ['elem', 'mid', 'high'];

/** edtech 전용 대분류(과목) 표시 순서 — subject 마지막 두 글자로 판정 */
export const subjectFamilyOrder = ['수학', '영어', '정보'] as const;
export type SubjectFamily = (typeof subjectFamilyOrder)[number];

export function subjectFamilyOf(subject?: string): SubjectFamily | undefined {
  if (!subject) return undefined;
  return subjectFamilyOrder.find((f) => subject.endsWith(f));
}

export const sectionMeta: Record<Section, { title: string; lead: string; description: string }> = {
  case: {
    title: 'AI·디지털 교육자료 활용 수업 사례',
    lead: 'AI·디지털 교육자료를 활용한 수업 사례를 참고하세요. (수업 흐름 파일 내려받기 가능)',
    description: 'AI·디지털 교육자료를 활용한 학교급별 수업 사례 카드뉴스와 수업안 PDF',
  },
  howto: {
    title: '이럴 땐 이렇게',
    lead: '수업 중 자주 마주치는 상황과 해결 방법을 카드뉴스로 안내합니다.',
    description: 'AI·디지털 교육자료 수업 중 자주 마주치는 상황별 해결 방법 안내',
  },
  edtech: {
    title: '에듀테크 활용 수업 활동 사례',
    lead: 'AI·디지털 교육자료 수업에 에듀테크를 함께 활용해 수업을 풍성하게 만든 사례를 살펴보세요.',
    description: 'AI·디지털 교육자료 수업에 에듀테크 도구를 활용한 학교급별 수업 사례 카드뉴스',
  },
};

export const classCards: Record<Section, CardNewsItem[]> = {
  case: [
    // 초등학교 — 발행사 → 학년 오름차순
    { id: 'case-elem-math-02', level: 'elem', title: '대응관계를 활용하여 생활 속 문제 해결하기', desc: 'AI·디지털 교과자료의 학급 게시판과 설문을 활용해 자료를 수집하고 캔바로 물 절약 홍보 캠페인 포스터 만들기 수업', publisher: '아이스크림', subject: '초등수학', gradeTerm: '5학년 1학기', tool: '캔바' },
    { id: 'case-elem-math-03', level: 'elem', title: '사각형 그리기와 분류하기', desc: 'AI·디지털 교과자료의 알지오매스키즈2D를 활용해 도형을 그리고, 학급칠판으로 공유하기 수업', publisher: '천재교과서', subject: '초등수학', gradeTerm: '4학년 2학기' },
    { id: 'case-elem-math-04', level: 'elem', title: '다각형의 넓이 구하기', desc: 'AI·디지털 교과자료의 학습현황-노트를 활용해 공유하고 수학교구로 활용해 평행사변형을 조작하여 넓이 구하는 방법 탐구하기', publisher: '천재교과서', subject: '초등수학', gradeTerm: '5학년 1학기' },
    { id: 'case-elem-math-01', level: 'elem', title: '자료를 수집하여 그래프를 활용한 캠페인 포스터 만들기', desc: 'AI·디지털 교과자료의 학급칠판 투표를 활용해 자료를 수집하고 수학교구 그래프로 나타내기로 포스터 만들기 수업', publisher: '천재교과서', subject: '초등수학', gradeTerm: '6학년 1학기' },
    // 중학교 — 발행사 → 학년 오름차순
    { id: 'case-mid-com-05', level: 'mid', title: '인공지능 학습에서 데이터의 중요성 이해하기', desc: 'AI·디지털 교육자료의 영상 콘텐츠와 내장된 엔트리로 실습하고 자동채점해주는 기능을 활용해 인공지능 학습에서 데이터의 중요성을 이해하고 다양한 분류 문제에 적용해 보는 수업', publisher: '길벗', subject: '중학정보', gradeTerm: '2학년', tool: '엔트리' },
    { id: 'case-mid-math-02', level: 'mid', title: '일차함수를 활용하여 문제 해결하기', publisher: '동아출판', subject: '중학수학', gradeTerm: '2학년 1학기' },
    { id: 'case-mid-eng-04', level: 'mid', title: 'AI 디지털 교육자료 × 의견 보드 연계 활동으로 완성하는 글쓰기', desc: '지문 생성 마스터(외부연계), 의견보드, AI Writing', publisher: '비상교육', subject: '중학영어', gradeTerm: '2학년 1학기' },
    { id: 'case-mid-math-01', level: 'mid', title: '일차방정식을 활용한 세금 분석하기', desc: 'AI·디지털 교과자료의 교사재구성을 활용해 개념 기반 탐구 수업을 설계하고 모둠 손필기를 활용한 협력 학습', publisher: '지학사', subject: '중학수학', gradeTerm: '1학년 1학기' },
    { id: 'case-mid-eng-03', level: 'mid', title: '자기소개 글쓰기', desc: 'AI·디지털 교과자료의 학급칠판을 활용해 학생의 글을 공유하고 학생들과 교사의 피드백이 활발히 이루어지는 수업 만들기', publisher: '천재교과서', subject: '중학영어', gradeTerm: '1학년 1학기' },
    { id: 'case-mid-com-06', level: 'mid', title: '음식 주문 시스템으로 알고리즘의 조건 이해하기', desc: 'AI 디지털교육자료의 영상 학습 및 Matching Test 활동을 활용해 알고리즘의 다섯 조건을 하나씩 짚어보며 이해하는 수업', publisher: '천재교과서', subject: '중학정보', gradeTerm: '1학년' },
    // 고등학교 — 발행사 → 학년 오름차순
    { id: 'case-high-com-02', level: 'high', title: '사물인터넷 설계', publisher: '금성출판사', subject: '고등정보', gradeTerm: '1학년' },
    { id: 'case-high-com-01', level: 'high', title: '바이브코딩 기반 문제 해결 프로그램 구현', publisher: '천재교과서', subject: '고등정보', gradeTerm: '1학년' },
  ],
  howto: [],
  edtech: [
    // 대분류(수학·영어·정보)·정렬(학교급 → 도구)은 CardNewsGallery가 렌더링 시 계산 — 아래 순서는 참고용
    { id: 'edtech-elem-eng-01', level: 'elem', title: 'AI·디지털 교육자료와 패들렛 아케이드게임을 활용한 초등 영어 단어 어휘 수업', desc: 'AI·디지털 교육자료 재구성에 패들렛 아케이드의 게임 요소를 더해 초등 영어 단어와 어휘를 즐겁게 익히고 학생의 배움을 확인하는 수업', subject: '초등영어', tool: '패들렛' },
    { id: 'edtech-elem-eng-02', level: 'elem', title: 'AI·디지털 교육자료와 캔바AI를 활용한 영어 수업', desc: 'AI·디지털 교육자료 재구성에 캔바 코드로 제작한 어휘 학습 앱을 통해 초등 영어 단어와 어휘를 즐겁게 익히고 학생의 배움을 확인하는 수업', subject: '초등영어', tool: '캔바' },
    // 중등 — 수학
    { id: 'edtech-mid-math-01', level: 'mid', title: 'AI·디지털 교육자료와 폴리패드를 활용한 탐구형 수학 수업', subject: '중학수학', tool: '폴리패드' },
    { id: 'edtech-mid-math-02', level: 'mid', title: 'AI·디지털 교육자료와 Amplify를 활용한 탐구형 수학 수업', subject: '중학수학', tool: '앰플리파이' },
    // 고등 — 수학
    { id: 'edtech-high-math-01', level: 'high', title: 'AI·디지털 교육자료 데이터 분석에 카훗의 재미를 더해 잠자는 학생도 깨우는 몰입 수업', desc: 'AI·디지털 교과자료 데이터 분석에 카훗의 재미를 더해 잠자는 학생도 깨우는 몰입 수업', subject: '고등수학', tool: '카훗' },
    { id: 'edtech-high-math-02', level: 'high', title: 'AI·디지털 교육자료 재구성에 앱 스크립트로 만든 웹앱을 더해 개념을 현실로 꺼내는 살아있는 수업', desc: 'AI·디지털 교육자료 재구성에 앱 스크립트로 만든 웹앱을 더해 개념을 현실로 꺼내는 살아있는 수업', subject: '고등수학', tool: '앱스스크립트' },
    { id: 'edtech-high-math-03', level: 'high', title: 'AI·디지털 교육자료에 캔바 공동작업을 더해 실생활 탐구를 하나의 포스터로 완성하는 협업 수업', subject: '고등수학', tool: '캔바' },
    { id: 'edtech-high-math-04', level: 'high', title: 'AI·디지털 교육자료에 패들렛 수업 활동 생성기를 더해 배움을 탐구로 확장하는 참여형 수업', subject: '고등수학', tool: '패들렛' },
    { id: 'edtech-high-math-05', level: 'high', title: 'AI·디지털 교육자료 재구성에 Gems로 만든 평가 도우미 봇을 더해 배움의 기준이 보이고 피드백이 살아나는 성장 수업', desc: 'AI·디지털 교육자료 재구성에 Gems로 만든 평가 도우미 봇을 더해 배움의 기준이 보이고 피드백이 살아나는 성장 수업', subject: '고등수학', tool: 'Gems' },
    { id: 'edtech-high-math-06', level: 'high', title: 'AI·디지털 교육자료 재구성에 통그라미를 더해 실제 자료를 분류·분석하며 집합의 연산을 벤다이어그램으로 이해하는 참여형 수업', desc: 'AI·디지털 교육자료 재구성에 통그라미를 더해 실제 자료를 분류·분석하며 집합의 연산을 벤다이어그램으로 이해하는 참여형 수업', subject: '고등수학', tool: '통그라미' },
    { id: 'edtech-high-math-07', level: 'high', title: 'AI·디지털 교육자료 재구성에 공학도구(알지오매스 블록코딩)를 활용한 참여형 수학 탐구 수업', desc: 'AI·디지털 교과자료에 블록코딩으로 수학적 사고를 시각적으로 확인, 탐구하는 수업', subject: '고등수학', tool: '알지오매스' },
    { id: 'edtech-high-math-08', level: 'high', title: 'AI·디지털 교육자료, 지오지브라와 함께하는 참여형 수학 탐구 수업', desc: 'AI·디지털 교과자료에 그래프·기하·대수를 연결, 수학적 개념을 움직이며 탐구하는 수업', subject: '고등수학', tool: '지오지브라' },
    { id: 'edtech-high-math-09', level: 'high', title: 'AI·디지털 교육자료 알지오매스로 수학을 ‘배우는 대상’에서 ‘탐구하는 대상’으로 바꾸어 주는 수학 수업', desc: 'AI·디지털 교과자료 알지오매스는 수학을 ‘배우는 대상’에서 ‘탐구하는 대상’으로 바꾸어 주는 수학적 도구', subject: '고등수학', tool: '알지오매스' },
    { id: 'edtech-high-math-10', level: 'high', title: 'AI·디지털 교육자료 바이브코딩으로 수학을 게임으로 만드는 수학 수업', desc: '맞춤형 비계로 완성하는 모둠 참여형 영어 수업', subject: '고등수학', tool: '매직스쿨' },
    { id: 'edtech-high-math-11', level: 'high', title: 'AI·디지털 교육자료, 스쿨플랫과 함께하는 참여형 수학 탐구 수업', desc: 'AI·디지털 교과자료를 활용한 참여형 수학 탐구 수업', subject: '고등수학', tool: '스쿨플랫' },
    // 고등 — 영어
    { id: 'edtech-high-eng-12', level: 'high', title: 'AI·디지털 교육자료 재구성에 제미나이 노트북을 더해 서술형·구술평가 채점과 맞춤형 피드백을 지원하는 영어 수업', desc: '영어 서술형과 구술평가를 더 효율적으로 평가하는 AI 활용', subject: '고등영어', tool: '제미나이 노트북' },
    { id: 'edtech-high-eng-13', level: 'high', title: 'AI·디지털 교육자료 재구성에 블루킷을 더해 영어 어휘·문법을 게임으로 반복 학습하는 참여형 영어 수업', desc: '게임과 퀴즈로 영어 학습 참여도를 높이는 수업 활동', subject: '고등영어', tool: '블루킷' },
    { id: 'edtech-high-eng-14', level: 'high', title: 'AI·디지털 교육자료 재구성! 매직스쿨로 맞춤형 비계를 완성하는 모둠 참여형 영어 수업', desc: '맞춤형 비계로 완성하는 모둠 참여형 영어 수업', subject: '고등영어', tool: '매직스쿨' },
    { id: 'edtech-high-eng-15', level: 'high', title: 'AI·디지털 교육자료에 QuillBot을 더해 서술형 평가에 맞춤형 문법 및 표현 첨삭을 지원하는 영어 수업', desc: '문법·표현 첨삭으로 지원하는 서술형 수행평가 피드백', subject: '고등영어', tool: '퀼봇' },
  ],
};
