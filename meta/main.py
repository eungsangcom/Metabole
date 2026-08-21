from __future__ import annotations

import logging
import os
import sys
from contextlib import asynccontextmanager
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

_ROOT = Path(__file__).resolve().parent
_APPS = _ROOT / "apps"
for _path in (_APPS, _ROOT):
    _text = str(_path)
    if _text not in sys.path:
        sys.path.insert(0, _text)

load_dotenv(_ROOT / ".env")

logging.basicConfig(
    level=os.getenv("LOG_LEVEL", "INFO"),
    format="%(asctime)s %(levelname)s [%(name)s] %(message)s",
)
logger = logging.getLogger("meta")


@asynccontextmanager
async def lifespan(_app: FastAPI):
    logger.info("[meta] application startup")
    yield
    logger.info("[meta] application shutdown")


app = FastAPI(
    title="Metabole API",
    description="Hexagonal + Clean + DDD modular monolith",
    version="0.1.0",
    lifespan=lifespan,
)

_cors_origins = [
    origin.strip()
    for origin in (
        os.getenv("CORS_ALLOWED_ORIGINS")
        or "http://localhost:3000,http://localhost:8100"
    ).split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=_cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from sample.adapter.inbound.api.v1.sample_router import sample_router  # noqa: E402

app.include_router(sample_router, prefix="/api")


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok", "service": "meta"}
