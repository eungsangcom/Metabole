# meta — 백엔드 LLM 지침

FastAPI 백엔드(`meta/`) 전용. 공통 하네스는 루트 [CLAUDE.md](../../CLAUDE.md).

## 실행

```bash
cd meta
PYTHONPATH=apps uvicorn main:app --reload --host localhost --port 8100
```

| 항목 | 값 |
|------|------|
| 진입점 | `meta/main.py` |
| 환경 | `meta/.env` |
| 테스트 | `PYTHONPATH=apps python -m pytest apps/{app}/tests -q` |

## 앱 (`meta/apps/`)

| 앱 | 역할 |
|----|------|
| `sample` | 헥사고날 스캐폴딩 템플릿 (신규 앱 원형) |

## 레이어 규칙

```text
adapter/inbound  →  app/use_cases  →  domain
adapter/outbound →  app/ports/output (구현)
dependencies     →  조립만
```

- Entity/VO: `domain/`
- UseCase ABC: `app/ports/input/`
- Repository ABC: `app/ports/output/`
- Interactor: `app/use_cases/`
- DTO: `app/dtos/` (dataclass, Pydantic 아님)
- Schema: `adapter/inbound/api/schemas/` (Pydantic)
- Router는 Schema → DTO 변환 후 UseCase 호출

## 네이밍

| Layer | 패턴 |
|-------|------|
| Router | `{feature}_router` |
| Schema | `{Feature}Schema` |
| UseCase | `{Feature}UseCase` |
| Interactor | `{Feature}Interactor` |
| Repository | `{Feature}Repository` |
| Provider | `get_{snake}_use_case` |
