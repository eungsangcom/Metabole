# sample — 앱 LLM 지침

`meta/apps/sample/` 전용. 백엔드 공통: [meta/_claude/CLAUDE.md](../../../_claude/CLAUDE.md)

## 디렉터리

```text
apps/sample/
  domain/entities|values|errors|services
  app/ports/input|output · use_cases · dtos
  adapter/inbound/api · outbound/repositories
  dependencies/
  tests/
  _docs/
```

## Import

```python
from sample.app.use_cases.sample_interactor import SampleInteractor
from sample.dependencies.sample_provider import get_sample_use_case
```

- `apps.` 접두사 금지

## API

| 경로 | 설명 |
|------|------|
| `GET /api/sample/myself` | 샘플 자기소개 |
