from fastapi import APIRouter, Depends

from sample.adapter.inbound.api.schemas.sample_schema import SampleSchema
from sample.app.dtos.sample_dto import SampleQuery, SampleResponse
from sample.app.ports.input.sample_use_case import SampleUseCase
from sample.dependencies.sample_provider import get_sample_use_case

sample_router = APIRouter(prefix="/sample", tags=["sample"])


@sample_router.get("/myself", response_model=None)
async def introduce_myself(
    use_case: SampleUseCase = Depends(get_sample_use_case),
) -> SampleResponse:
    schema = SampleSchema(id=1, name="Sample")
    return await use_case.introduce_myself(
        SampleQuery(id=schema.id, name=schema.name),
    )
