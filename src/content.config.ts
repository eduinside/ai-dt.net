import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 콘텐츠 컬렉션 스키마
 * - frontmatter는 zod로 빌드 타임 검증 → 메타 누락·오타를 빌드가 잡아줌.
 */

// 발행사 답변 QnA형 게시판 데이터.
// 답변 문서 이미지는 src/assets/replies/{slug}/{dir}/*.png
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

export const collections = { publishers };
