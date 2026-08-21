from dataclasses import dataclass


@dataclass(frozen=True, slots=True)
class SampleQuery:
    id: int
    name: str


@dataclass(frozen=True, slots=True)
class SampleResponse:
    id: int
    name: str
    channel: str
    role_label: str
    description: str
