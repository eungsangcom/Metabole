from abc import ABC, abstractmethod

from sample.app.dtos.sample_dto import SampleQuery, SampleResponse


class SampleUseCase(ABC):
    @abstractmethod
    async def introduce_myself(self, query: SampleQuery) -> SampleResponse:
        """샘플 모듈 자기소개."""
