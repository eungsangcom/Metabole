# BACKEND_RULES

1. Domain에 FastAPI / SQLAlchemy / httpx 금지  
2. UseCase(input port)는 ABC, Interactor가 구현  
3. Output port(Repository 등)는 ABC, outbound adapter가 구현  
4. Router는 thin — 검증·매핑만, 비즈니스 로직 없음  
5. Provider에서만 구체 클래스 생성  
6. 테스트는 domain / use_case 단위를 우선
