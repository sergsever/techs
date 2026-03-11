from cmath import e

from fastapi import FastAPI,APIRouter
from models import techsDAO
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from models.tech import Tech
from fastapi import status


router = APIRouter(prefix="/techs")

@router.get("/")
async def getTechs():
	techs = techsDAO.getTechs()
	answer = "techs:.."
	return JSONResponse(content=jsonable_encoder(techs))

@router.get("/tech/{tech_id}")
async def getTech(tech_id:int):
	print('getTech id: ', tech_id)
	tech = techsDAO.getTech(tech_id)

	print('getTech tech: ', tech);
	answer = "tech:"
	return JSONResponse(content=jsonable_encoder(tech))

@router.post("/tech")
async def saveTech(tech:Tech):
	try:
		print('tech post: ', tech.id, tech.title, tech.rate)
		if(techsDAO.saveTech(tech.id, tech.title, tech.rate)):
			print('post ret ok')
			return status.HTTP_200_OK
		else:
			raise "save Tech error"
	except Exception as ex:
		print('post exception: ', str(ex))
		return status.HTTP_500_INTERNAL_SERVER_ERROR
