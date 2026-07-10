# 배포 가이드 — GitHub → Cloudflare Pages

정적 사이트(Astro build → `dist/`)를 Cloudflare Pages 무료 티어에 배포한다.
GitHub 연동 방식으로, **푸시하면 자동 빌드·배포**된다(운영자 커밋 → 배포 협업 모델).

## 1. GitHub 레포 준비 (운영자 계정)
1. GitHub에 새 비공개(또는 공개) 레포 생성 (예: `ai-dt`).
2. 로컬에서 원격 연결 후 푸시:
   ```bash
   git remote add origin https://github.com/<계정>/ai-dt.git
   git push -u origin master   # 또는 main
   ```

## 2. Cloudflare Pages 프로젝트 연결 (운영자 계정)
1. Cloudflare 대시보드 → **Workers & Pages → Create → Pages → Connect to Git**.
2. 위 GitHub 레포 선택.
3. 빌드 설정:
   | 항목 | 값 |
   |---|---|
   | Framework preset | **Astro** |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node version | **20** (`.nvmrc`로 고정됨) |
4. **Save and Deploy** → `*.pages.dev` 프리뷰 URL 생성.

## 3. 검수
- `*.pages.dev`에서 전 페이지·발행사 답변 필터·FAQ 게시판·모바일 메뉴 확인.
- `_redirects`(한글 경로 → 영문 slug)와 `/index → /`, 404 페이지가 동작하는지 확인.

## 4. 커스텀 도메인 ai-dt.net 연결 (전환 단계, P5)
1. Pages 프로젝트 → **Custom domains → Set up a custom domain → `ai-dt.net`**.
2. DNS를 Cloudflare로 옮기거나, 기존 DNS에 CNAME 지정(안내대로).
3. **전환 전 DNS TTL을 낮춰** 두고, 문제 시 즉시 롤백 경로 확보(IMPLEMENTATION_PLAN §7).
4. 전환 완료까지 기존 구글 사이트 유지(무중단).

## 참고
- `public/_redirects`는 빌드 시 `dist/`로 복사되어 Cloudflare Pages가 자동 적용.
- 이미지가 없는 페이지 슬롯은 `src/assets/pages/README.md` 참고(운영자가 파일 드롭).
- 빌드 산출물 확인: `npm run build && npm run preview`.
