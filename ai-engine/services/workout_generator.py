from utils.bmi_calculator import calculate_bmi


def generate_workout(height, weight, goal):

    bmi = calculate_bmi(height, weight)

    workout_plan = []

    # ================= MUSCLE GAIN =================

    if goal == "muscle_gain":

        workout_plan = [
            "Bench Press - 4 sets x 8 reps",
            "Pull Ups - 4 sets x 8 reps",
            "Squats - 4 sets x 10 reps",
            "Deadlift - 3 sets x 6 reps",
            "Shoulder Press - 3 sets x 10 reps",
            "Bicep Curls - 3 sets x 12 reps",
            "Plank - 3 sets x 60 sec"
        ]

    # ================= WEIGHT LOSS =================

    elif goal == "weight_loss":

        workout_plan = [
            "Jump Rope - 5 minutes",
            "Burpees - 4 sets x 15 reps",
            "Mountain Climbers - 4 sets x 30 sec",
            "Squats - 4 sets x 15 reps",
            "Push Ups - 4 sets x 12 reps",
            "Plank - 3 sets x 45 sec",
            "Running - 20 minutes"
        ]

    # ================= GENERAL FITNESS =================

    else:

        workout_plan = [
            "Push Ups - 3 sets x 12 reps",
            "Bodyweight Squats - 3 sets x 15 reps",
            "Lunges - 3 sets x 10 reps",
            "Plank - 3 sets x 45 sec",
            "Jump Rope - 10 minutes",
            "Stretching - 10 minutes"
        ]

    return workout_plan