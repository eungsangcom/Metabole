from sample.app.dtos.sample_dto import SampleQuery, SampleResponse
from sample.app.ports.output.sample_repository import SampleRepository
from sample.domain.entities.sample_entity import SampleEntity


class SampleMemoryRepository(SampleRepository):
    async def introduce_myself(self, query: SampleQuery) -> SampleResponse:
        entity = SampleEntity(id=query.id, name=query.name)
        return SampleResponse(
            id=entity.id,
            name=entity.name,
            channel=entity.channel,
            role_label=entity.role_label,
            description=entity.description,
        )
