import logging

from sample.app.dtos.sample_dto import SampleQuery, SampleResponse
from sample.app.ports.input.sample_use_case import SampleUseCase
from sample.app.ports.output.sample_repository import SampleRepository

logger = logging.getLogger("sample")


class SampleInteractor(SampleUseCase):
    def __init__(self, repository: SampleRepository) -> None:
        self._repository = repository

    async def introduce_myself(self, query: SampleQuery) -> SampleResponse:
        logger.info("[sample] introduce_myself id=%s name=%s", query.id, query.name)
        return await self._repository.introduce_myself(query)
