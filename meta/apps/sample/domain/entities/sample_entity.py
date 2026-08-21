"""Sample domain entity."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True, slots=True)
class SampleEntity:
    id: int
    name: str
    channel: str = "sample"
    role_label: str = "Sample Module"
    description: str = "Metabole hexagonal scaffolding template"
