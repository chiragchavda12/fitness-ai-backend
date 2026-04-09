def calculate_bmi(height, weight):

    height_m = height / 100
    bmi = weight / (height_m * height_m)

    return round(bmi,2)