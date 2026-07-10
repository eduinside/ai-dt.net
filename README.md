# ai-dt.net — AI·디지털 교육자료 수업 지원센터

대구광역시교육청 AI 디지털교과서(AIDT) 수업 활용 도움자료·문의 지원 사이트.
구글 사이트로 운영하던 [ai-dt.net](https://www.ai-dt.net)을 자체 정적 사이트로 이관하는 프로젝트.

## 스택

- **Astro 5** (정적 빌드, 콘텐츠 컬렉션)
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **@astrojs/mdx** — 위지윅 본문 안에 컴포넌트 삽입
- **astro-embed** — 유튜브 lite 임베드
- **@astrojs/sitemap**
- 배포: **Cloudflare Pages** (무료 티어)

## 개발

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/ 정적 산출물
npm run preview   # 빌드 결과 미리보기
```

## 구조

```
src/
  content.config.ts        콘텐츠 컬렉션 스키마(zod 검증)
  content/
    publishers/            출판사 데이터 파일 (파일 1개 = 출판사 1곳)
  components/              재사용 컴포넌트(= 디자인 시스템)
    Accordion.astro          <details> 기반, JS 0줄
    Carousel.astro           CSS scroll-snap 기반, 경량 JS
    YouTube (astro-embed)    <YouTube id="..." />
    PublisherCard / LinkButton / SectionHeading / Header / Footer
  layouts/BaseLayout.astro
  pages/
    index.astro                        홈
    index/feedback/index.astro         출판사 허브
    index/feedback/[id].astro          출판사 상세(데이터→자동 생성)
  styles/global.css        디자인 토큰(@theme) + 웹폰트
```

## 콘텐츠 추가 방법 (운영자)

원본 사이트 충실 재현이 원칙이다 — 텍스트·구조는 `docs/original/CONTENT.md`(원본 실측)를 따른다.

출판사 한 곳을 추가하려면 `src/content/publishers/`에 `.mdx` 파일 하나만 추가한다:

```mdx
---
name: 출판사명   # 원본 표기 그대로 (예: 천재)
order: 13       # 가나다순
---

<Accordion label="초등 수학" name="reply">
회신 내용…
</Accordion>
```

페이지 틀(`'{이름}' 회신 내용` 제목 + ◀ 돌아가기)은 자동 생성된다.
빌드가 frontmatter를 검증하므로 필수 항목 누락 시 배포 전에 걸러진다.

## 문서

- [구현 계획서](docs/IMPLEMENTATION_PLAN.md)
- [진행 현황](docs/STATUS.md)
