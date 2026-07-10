import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 콘텐츠 컬렉션 스키마 (IMPLEMENTATION_PLAN.md §2)
 * - frontmatter는 zod로 빌드 타임 검증 → 동료가 준 파일의 메타 누락·오타를 빌드가 잡아줌.
 * - P1에서는 publishers 만 실사용. 나머지는 P2~P3에서 콘텐츠 채움.
 */

// 출판사 (구 /index/feedback/{출판사} × 12) — 데이터만으로 페이지 자동 생성
// 출판사 회신 = QnA형 게시판 데이터. 회신 문서 이미지는 src/assets/replies/{slug}/{dir}/*.png
const publishers = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/publishers' }),
  schema: z.object({
    name: z.string(),             // 표시 이름 (예: 천재) — 원본 표기 그대로
    order: z.number().default(0), // 가나다순 정렬 순서
    sections: z
      .array(
        z.object({
          label: z.string(), // 학교급·교과 (원본 표기 그대로)
          dir: z.string(),   // 이미지 폴더 번호 (replies/{slug}/{dir})
        })
      )
      .default([]),
    updated: z.coerce.date().optional(),
  }),
});

// 일반 위지윅형 페이지 (홈·안내 등) — P3
const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    section: z.string().optional(),
    order: z.number().default(0),
    updated: z.coerce.date().optional(),
  }),
});

// 매뉴얼·소프트웨어·도움자료 카드 — P2
const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),                       // manual | software | help ...
    target: z.enum(['교사', '학생', '공통']).default('교사'),
    url: z.string().url().optional(),
    thumb: z.string().optional(),
    desc: z.string().optional(),
    order: z.number().default(0),
    updated: z.coerce.date().optional(),
  }),
});

// FAQ — P2
const faq = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/faq' }),
  schema: z.object({
    q: z.string(),
    category: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { publishers, pages, resources, faq };
