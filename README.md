# Metabole

헥사고날 + 클린 + DDD 모듈러 모놀리식 모노레포.

`com.eungsang` 구조 대응: **meta** = `eungsang`(백엔드), **bole** = `jebbi`(프론트).

## Clone

```bash
git clone --recurse-submodules https://github.com/eungsangcom/Metabole.git
```

이미 clone했다면:

```bash
git submodule update --init --recursive
```

## Submodules

| path | remote |
|------|--------|
| `meta/` | [com.metabole.api](https://github.com/eungsangcom/com.metabole.api) — FastAPI backend |
| `bole/` | [com.metabole.www](https://github.com/eungsangcom/com.metabole.www) — Next.js frontend |

`com.eungsang`와 동일: `eungsang`→api, `jebbi`→www.

## 구조

```text
Metabole/
├── AGENTS.md / CLAUDE.md / CURSOR.md / .cursorrules
├── docs/
├── meta/                 # submodule → com.metabole.api
│   ├── main.py
│   ├── core/
│   ├── apps/sample/      # 헥사고날 템플릿
│   └── _claude/
└── bole/                 # submodule → com.metabole.www
    ├── app/
    ├── components/
    ├── lib/backend-api.ts
    └── _claude/
```

## 실행

### 백엔드 meta

```bash
cd meta
pip install -r requirements.txt
PYTHONPATH=apps uvicorn main:app --reload --host localhost --port 8100
```

- `GET http://localhost:8100/health`
- `GET http://localhost:8100/api/sample/myself`

### 프론트 bole

```bash
cd bole
pnpm install
pnpm dev
```

- http://localhost:3000
- API 프록시: `/backend-api/*` → `BACKEND_URL` (기본 `http://127.0.0.1:8100`)

## 테스트

```bash
cd meta && PYTHONPATH=apps python -m pytest apps/sample/tests -q
```

## 신규 백엔드 앱

1. `meta/apps/sample/` 복사 → `meta/apps/{name}/`
2. 패키지·라우터·provider 이름 교체
3. `meta/main.py` 에 라우터 등록
4. `_docs/CLAUDE.md` 작성
