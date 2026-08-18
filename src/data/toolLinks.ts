/**
 * 에듀테크 도구 이름 → 공식 홈페이지 링크.
 * classCards.ts의 tool 값과 정확히 일치해야 라이트박스에 "○○ 더 알아보기" 버튼이 뜬다.
 * 모르는 도구는 넣지 않으면 버튼 없이 태그만 표시된다 (잘못된 링크보다 안전).
 */
export const toolLinks: Record<string, string> = {
  카훗: 'https://kahoot.com/',
  엔트리: 'https://playentry.org/',
  캔바: 'https://www.canva.com/',
  패들렛: 'https://padlet.com/',
  Gems: 'https://gemini.google.com/',
  제미나이: 'https://gemini.google.com/',
  앱스스크립트: 'https://script.google.com/',
  통그라미: 'https://tong.mods.go.kr/',
  블루킷: 'https://www.blooket.com/',
  알지오매스: 'https://www.algeomath.kr/',
  지오지브라: 'https://www.geogebra.org/',
  매직스쿨: 'https://www.magicschool.ai/',
  스쿨플랫: 'https://www.schoolflat.com/',
  퀼봇: 'https://quillbot.com/',
  폴리패드: 'https://polypad.amplify.com/',
  앰플리파이: 'https://amplify.com/',
};
