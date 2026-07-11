# 디자인 시스템 — 모던 공공 포털

최종 갱신: 2026-07-11 (구글 사이트풍 → 모던 공공 포털 리디자인)

모든 토큰은 `src/styles/global.css`의 `@theme` 블록에 정의되어 있고,
Tailwind 4 유틸리티(`text-primary-600`, `bg-band` 등)와 `var(--color-…)` 양쪽에서 사용할 수 있다.
다른 프로젝트에서 재사용하려면 `@theme` 블록과 아래 사용 규칙을 그대로 가져가면 된다.

## 1. 색상 토큰

### 기본 (배경·텍스트)

| 토큰 | 값 | 용도 |
|---|---|---|
| `--color-paper` | `#fdfdfc` | 페이지 배경 (순백보다 약간 따뜻한 종이빛) |
| `--color-surface` | `#ffffff` | 카드·패널 표면 |
| `--color-ink` | `#14263c` | 본문 텍스트 (네이비 잉크 — 순검정 금지) |
| `--color-muted` | `#5c6b7e` | 보조 텍스트·메타 정보 |
| `--color-line` | `#dde3ea` | 테두리·구분선 |
| `--color-band` | `#f1f4f8` | 보조 배경 밴드 (연한 블루그레이) |

### 주색 — 딥 네이비 블루

| 토큰 | 값 | 용도 |
|---|---|---|
| `--color-primary-50` | `#f0f5fa` | 호버 배경, 연한 틴트 패널 |
| `--color-primary-100` | `#dfeaf4` | 선택 영역, 콜아웃 테두리 |
| `--color-primary-200` | `#bcd4e8` | 고스트 번호(스텝 01·02), 강조 테두리 |
| `--color-primary-400` | `#4d7fae` | 아이콘, 그라데이션 끝 |
| `--color-primary-500` | `#2c5f92` | 포커스 링 |
| `--color-primary-600` | `#1b4470` | **기본 주색** — 버튼, 링크, 액센트 바 |
| `--color-primary-700` | `#122f4f` | 진한 패널(CTA), 텍스트 강조 |
| `--color-primary-800` | `#0c2138` | 푸터 배경 |

### 액센트 — 웜 오렌지 (절제 사용)

| 토큰 | 값 | 용도 |
|---|---|---|
| `--color-accent` | `#e05a2b` | 추천 배지 텍스트, A(답변) 마커 — **화면당 1~2곳만** |
| `--color-accent-hover` | `#c94a1e` | 액센트 호버 |
| `--color-accent-soft` | `#fdeee7` | 액센트 배지 배경 |

### 히어로 틴트 (구 토큰명 유지 — 하위 페이지 호환)

| 토큰 | 값 |
|---|---|
| `--color-hero-from` | `#eef4fa` |
| `--color-hero-mid` | `#e2ecf6` |
| `--color-hero-to` | `#f6f9fc` |

## 2. 타이포그래피

- 글꼴: **Pretendard Variable** 단일 (self-host, `public/fonts/`). 위계는 글꼴이 아니라 **굵기 대비(400↔800)와 크기**로 만든다.
- 디스플레이(히어로 h1): `font-extrabold`, 34px(모바일) / 52px(데스크톱), `leading-[1.16]`, `letter-spacing -0.02em`(`.font-display`).
- 섹션 제목(h2): 20px `font-bold` + `.section-mark`(좌측 액센트 바) — 좌측 정렬 섹션용.
- 페이지 제목(하위 페이지 h1): 24~32px `font-bold` 중앙 정렬 + `.title-underline`(네이비·오렌지 듀오톤 마크).
- 본문: 15~16px, `line-height: 1.65`. 메타·배지: 13~14px.

## 3. 형태·그림자

| 토큰 | 값 | 용도 |
|---|---|---|
| `--radius-card` | `0.875rem` | 카드·게시판 행. 버튼은 `rounded-lg`, 큰 패널은 `rounded-2xl` |
| `--shadow-card` | 이중 그림자(옅음) | 기본 카드 |
| `--shadow-card-hover` | 이중 그림자(부상) | `.premium-card:hover`, 드롭다운 |

## 4. 유틸리티 클래스 (global.css)

| 클래스 | 역할 |
|---|---|
| `.title-underline` | 중앙 정렬 제목 아래 듀오톤(네이비 70% + 오렌지 30%) 마크 — 하위 페이지 h1 공용 |
| `.section-mark` | 제목 왼쪽 세로 그라데이션 액센트 바 — 홈·좌측 정렬 h2 공용 |
| `.hero-canvas` | 히어로 배경: 블루 틴트 radial ×2 + 22px 도트 그리드 |
| `.premium-card` | 호버 시 -4px 부상 + 그림자 전환 |
| `.animate-fade-in-up` + `.delay-{75,150,200,300}` | 진입 애니메이션(섹션별 시차) |

## 5. 레이아웃 문법 (구글 사이트풍 방지 규칙)

1. **풀폭 색 밴드 금지** — 강조가 필요하면 컨테이너 안 `rounded-2xl bg-primary-700` 패널로 (홈 하단 CTA 참조).
2. **히어로는 비대칭** — 좌: eyebrow(로고+기관명) → 대형 타이틀 → 설명. 우: 실용 카드(연락처 등). 중앙 정렬 히어로로 돌아가지 않는다.
3. **UI 라벨에 이모지 금지** — 강조는 배지(`accent-soft` 배경 + `accent` 텍스트)나 라인 아이콘(stroke 1.6~1.8 SVG)으로.
4. **절차·단계는 번호 레일** — 고스트 숫자(`text-primary-200` extrabold) + 데스크톱 연결선.
5. **다크 마감** — 푸터는 `primary-800`, CTA 패널은 `primary-700` + 도트 패턴 오버레이.
6. 컨테이너 폭: 본문형 `max-w-4xl`, 그리드형 `max-w-6xl`, 패딩 `px-5`.

## 6. 접근성 (KWCAG)

- 포커스 링: 전역 `:focus-visible` 2px `primary-500`.
- `prefers-reduced-motion` 시 모든 애니메이션·전환 무효화.
- ink/paper 대비 12.9:1, primary-600/white 9.2:1 — 본문·버튼 모두 AAA 수준.
- 다크 모드 미지원(라이트 전용) — 2026-07-09 검수 결정.
