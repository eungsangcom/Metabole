# FRONTEND_RULES

1. App Router만 사용 (`app/`)
2. 서버 컴포넌트 기본, 상호작용만 `"use client"`
3. API는 `/backend-api` 프록시 경유
4. `lib/utils.ts` 의 `cn` 으로 클래스 합성
5. 불필요한 전역 상태·추상화 금지
