# Cursor 에이전트 하네스

에이전트의 경계·검증·스코프를 고정한다.

**적용 범위:** 이 저장소에서 Cursor가 코드·설정·명령을 제안하거나 실행할 때.  
**필독:** [.cursorrules](./.cursorrules) → 본 문서 → [CLAUDE.md](./CLAUDE.md)

---

## 1. 구현 전 사고

가정은 말로 밝힌다. 불확실하면 질문한다.  
해석이 여러 개면 후보를 나열한다. 더 단순한 해법이 있으면 제안한다.

## 2. 단순성 우선

요청 범위 밖 기능·설정·추상화를 넣지 않는다.  
일회용 추상화·“나중을 위해” 유연성은 넣지 않는다.

## 3. 정밀한 수정

요청과 무관한 파일·줄·포맷·주석 “정리”를 하지 않는다.  
망가지지 않은 코드는 리팩터링하지 않는다.

## 4. 목표 중심 실행

코딩 전에 검증 가능한 성공 기준을 정한다.  
단계가 두 개 이상이면 `단계 → 검증` 형태로 짧게 계획한다.

---

## Submodules

`meta/` → [com.metabole.api](https://github.com/eungsangcom/com.metabole.api), `bole/` → [com.metabole.www](https://github.com/eungsangcom/com.metabole.www). Clone with `--recurse-submodules`.

## 문서 계층

| 범위 | 규칙 |
|------|------|
| 루트 | [.cursorrules](./.cursorrules) · [CLAUDE.md](./CLAUDE.md) |
| 백엔드 `meta/` | [meta/_claude/CLAUDE.md](./meta/_claude/CLAUDE.md) |
| 프론트 `bole/` | [bole/_claude/CLAUDE.md](./bole/_claude/CLAUDE.md) |
| 백엔드 앱 | `meta/apps/{app}/_docs/CLAUDE.md` |

**우선순위:** 앱/`_claude` > 루트 `CLAUDE.md`
