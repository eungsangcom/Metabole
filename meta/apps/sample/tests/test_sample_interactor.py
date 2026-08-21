import pytest

from sample.adapter.outbound.repositories.sample_memory_repository import (
    SampleMemoryRepository,
)
from sample.app.dtos.sample_dto import SampleQuery
from sample.app.use_cases.sample_interactor import SampleInteractor


@pytest.mark.asyncio
async def test_sample_introduce_myself():
    interactor = SampleInteractor(repository=SampleMemoryRepository())
    result = await interactor.introduce_myself(SampleQuery(id=1, name="Sample"))

    assert result.id == 1
    assert result.name == "Sample"
    assert result.channel == "sample"
    assert result.role_label == "Sample Module"
    assert "hexagonal" in result.description.lower() or "Hexagonal" in result.description
