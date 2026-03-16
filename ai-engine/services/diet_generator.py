def generate_diet(weight, goal):

    diet_plan = []

    # ================= MUSCLE GAIN =================

    if goal == "muscle_gain":

        diet_plan = [
            "Breakfast: Oats + Eggs + Banana",
            "Mid Meal: Peanut Butter Sandwich",
            "Lunch: Rice + Chicken + Vegetables",
            "Evening: Protein Shake + Nuts",
            "Dinner: Paneer / Chicken + Salad"
        ]

    # ================= WEIGHT LOSS =================

    elif goal == "weight_loss":

        diet_plan = [
            "Breakfast: Oats + Apple",
            "Mid Meal: Green Tea + Nuts",
            "Lunch: Brown Rice + Vegetables + Dal",
            "Evening: Fruits + Green Tea",
            "Dinner: Salad + Grilled Chicken"
        ]

    # ================= FITNESS =================

    else:

        diet_plan = [
            "Breakfast: Eggs + Toast + Milk",
            "Mid Meal: Fruits",
            "Lunch: Rice + Dal + Vegetables",
            "Evening: Nuts + Yogurt",
            "Dinner: Light Salad + Paneer"
        ]

    return diet_plan