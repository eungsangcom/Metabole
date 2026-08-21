# Metabole — LLM / 에이전트 지침

헥사고날 + 클린 + DDD 모듈러 모놀리식.

## Submodules

`meta/` and `bole/` are git submodules (`com.metabole.api` / `com.metabole.www`), same pattern as com.eungsang.

## 스택

| 영역 | 디렉터리 | 대응 (com.eungsang) | 기술 |
|------|----------|---------------------|------|
| 백엔드 | `meta/` | `eungsang/` | FastAPI · pytest |
| 프론트 | `bole/` | `jebbi/` | Next.js · Tailwind |

## 의존 규칙 (meta)

1. `domain/` 은 프레임워크·어댑터를 import하지 않는다.  
2. `app/` 은 `domain` 과 port만 의존한다.  
3. `adapter/` 는 바깥 세계를 구현한다.  
4. `dependencies/` 에서만 구현체를 조립한다.  
5. import 시 `apps.` 접두사 금지 (`PYTHONPATH=apps`)

## 프론트 규칙 (bole)

1. 백엔드 호출은 `/backend-api` 프록시만 사용  
2. 모바일 우선 UI  
3. 요청 범위 밖 추상화 금지

## 작업 시

```text
# 백엔드
@meta/_claude/CLAUDE.md @meta/apps/sample/_docs/CLAUDE.md

# 프론트
@bole/_claude/CLAUDE.md @bole/_claude/.cursorrules
```
