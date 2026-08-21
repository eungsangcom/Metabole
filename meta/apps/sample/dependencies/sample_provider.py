from fastapi import Depends

from sample.adapter.outbound.repositories.sample_memory_repository import (
    SampleMemoryRepository,
)
from sample.app.ports.input.sample_use_case import SampleUseCase
from sample.app.ports.output.sample_repository import SampleRepository
from sample.app.use_cases.sample_interactor import SampleInteractor


def get_sample_repository() -> SampleRepository:
    return SampleMemoryRepository()


def get_sample_use_case(
    repository: SampleRepository = Depends(get_sample_repository),
) -> SampleUseCase:
    return SampleInteractor(repository=repository)
