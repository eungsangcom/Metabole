from pydantic import BaseModel, Field


class SampleSchema(BaseModel):
    id: int = Field(1, description="Sample ID")
    name: str = Field("Sample", description="Display name")

    model_config = {
        "json_schema_extra": {
            "example": {"id": 1, "name": "Sample"},
        }
    }
