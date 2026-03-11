from fastapi import FastAPI
from models import tech
from routers import Techs_router
import uvicorn
import sys
from fastapi.middleware.cors import CORSMiddleware

sys.path.append("C:\\work\\python\\techs")
sys.path.append("C:/work/python/techs/models")
sys.path.append("C:/work/python/techs/routers")

origins = [
	"http://localhost",
	"http://localhost:3000",
]

app = FastAPI()
app.add_middleware(CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],)
tech_router = Techs_router.router
app.include_router(tech_router)
if __name__ == "__main__":
	uvicorn.run(app, host="0.0.0.0", port=8000)
