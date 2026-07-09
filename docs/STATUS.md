# 진행 현황 (ai-dt.net)

최종 갱신: 2026-07-09

## 현재 단계: P1 (골격 + 디자인 시안) — 진행 중

### 완료
- Astro 5 + Tailwind 4 + MDX + sitemap 프로젝트 골격 (`npm run build` 정상, 15개 페이지 생성)
- 디자인 토큰 확정: 종이빛 배경 · 딥 틸(주색 `#0f7d84`) · 웜 코랄(강조 `#e2623b`), 제목 Hahmlet(한글 세리프) / 본문 Pretendard
- 재사용 컴포넌트 = 디자인 시스템: Header, Footer, PublisherCard, LinkButton, SectionHeading, **Accordion**(`<details>` 기반), **Carousel**(scroll-snap)
- 콘텐츠 컬렉션 스키마(publishers/pages/resources/faq) — zod 검증
- 시안 3종 렌더 확인:
  - 홈 (`/`) — 히어로 + 바로가기 카드 4 + 출판사 프리뷰
  - 출판사 허브 (`/index/feedback`) — 13개 카드 + 교과 칩
  - 출판사 상세 (`/index/feedback/[id]`) — 아코디언 + 유튜브 + CTA (천재교과서·비상교육 상세 본문 포함)

### 남은 P1 작업
- **Cloudflare Pages 연결** — GitHub 레포 생성 + CF Pages 프로젝트 연결(운영자 계정 필요). 빌드 명령 `astro build`, 출력 `dist/`.
- `*.pages.dev` 프리뷰 링크로 관계자 디자인 검수 → 색/타이포/컴포넌트 확정.

### 검수 시 결정 필요
- 웹폰트 self-host 전환 여부(현재 CDN, P4 예정이나 개인정보 원칙상 앞당길 수 있음).
- 2depth 한글 경로 유지 vs 영문 slug (`/index/feedback/천재` vs `/index/feedback/cheonjae`). 현재 영문 slug.
- 다크 모드 지원 여부(현재 라이트 전용).

## 다음 단계
- P2: `resources`·`faq` 이관 + 출판사 12곳 실제 링크/자료 채우기.
- P3: 일반 페이지(홈·안내·수업이야기·스스로학습·문의) 이관 + 구글 임베드 전수 점검.

## 알려진 참고사항
- 로컬 스크린샷 도구는 Pretendard 동적 서브셋(파일 ~100개)의 networkidle 대기로 간헐 지연됨 — 사이트 결함 아님. 실제 브라우저는 정상.
