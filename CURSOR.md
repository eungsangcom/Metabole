# Cursor 하네스 가이드 (Metabole)

상세 규범: [CLAUDE.md](./CLAUDE.md) · [AGENTS.md](./AGENTS.md)

## 문서 계층

| 범위 | 경로 |
|------|------|
| 루트 | [.cursorrules](./.cursorrules) · [CLAUDE.md](./CLAUDE.md) |
| 백엔드 | [meta/_claude/CLAUDE.md](./meta/_claude/CLAUDE.md) |
| 프론트 | [bole/_claude/CLAUDE.md](./bole/_claude/CLAUDE.md) |
| 앱 | `meta/apps/{app}/_docs/CLAUDE.md` |

## 워크플로

1. 범위에 맞는 규칙 문서 확인  
2. 구현  
3. 검증 (`pytest` / `pnpm typecheck` / health)

```text
@meta/_claude/CLAUDE.md @bole/_claude/CLAUDE.md
```
