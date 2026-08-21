# bole — 프론트엔드 LLM 지침

Next.js 프론트(`bole/`) 전용. 공통 하네스는 루트 [CLAUDE.md](../../CLAUDE.md).

## 스택·실행

| 항목 | 값 |
|------|-----|
| Framework | Next.js (App Router), React, TypeScript |
| 스타일 | Tailwind CSS v4 |
| API 프록시 | `lib/backend-api.ts` → `/backend-api/*` → `meta` |
| 로컬 | `cd bole && pnpm dev` → http://localhost:3000 |

```bash
cd bole
pnpm install
pnpm dev
```

## 규칙

- 모바일 우선: 기본 레이아웃을 좁은 폭에서 작성 후 `sm:`/`lg:` 확장
- 백엔드 호출은 `backendApiUrl()` / `backendFetch()` 사용 (직접 `localhost:8100` 금지)
- UI 라이브러리 추가 시 요청 범위만

## 백엔드

- [meta/_claude/CLAUDE.md](../../meta/_claude/CLAUDE.md)
