from pydantic import BaseModel
class Tech(BaseModel):
	id: int   
	title: str 
	rate: float 
