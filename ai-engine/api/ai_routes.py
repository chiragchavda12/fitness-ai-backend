from fastapi import APIRouter
from pydantic import BaseModel
from services.workout_generator import generate_workout
from services.diet_generator import generate_diet

router = APIRouter()

# ================= REQUEST MODEL =================

class UserData(BaseModel):
    height: float
    weight: float
    goal: str


# ================= WORKOUT API =================

@router.post("/generate-workout")
def workout(data: UserData):

    plan = generate_workout(data.height, data.weight, data.goal)

    return {
        "workout": plan
    }


# ================= DIET API =================

@router.post("/generate-diet")
def diet(data: UserData):

    plan = generate_diet(data.weight, data.goal)

    return {
        "diet": plan
    }