'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { DayMealPlan, MealPlan, Nutrient } from "@/types"

const MealPlanTable = ({ mealPlan }: { mealPlan: MealPlan}) => {
    console.log(mealPlan)
    return (
        <div className="flex flex-col">
            <h4 className="font-bold text-2xl text-center mb-10">Your meal plan</h4>

            <Table className="border">
                <TableCaption>Weekly meal plan</TableCaption>
                <TableHeader className="border">
                    <TableRow>
                        <TableHead className="border w-[100px]">Days</TableHead>
                        <TableHead className="border">Breakfast</TableHead>
                        <TableHead className="border">Lunch</TableHead>
                        <TableHead className="border">Dinner</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mealPlan.days.map((day: DayMealPlan) => (
                        <TableRow key={day.date}>
                            <TableCell className="font-medium">Day: {day.day}</TableCell>
                            {day.items.map((item) => (
                                <TableCell key={item.id} className="border">
                                    {item.value.title}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <h4 className="font-bold text-2xl text-center my-10">Nutritional information</h4>
            <Table className="border">
                <TableCaption>Nutritional information about your meal plan</TableCaption>
                <TableHeader>
                    <TableRow className="border">
                        <TableHead className="border text-left">Days</TableHead>
                        <TableHead className="border text-center">Breakfast Calories</TableHead>
                        <TableHead className="border text-center">Lunch Calories</TableHead>
                        <TableHead className="border text-right">Dinner Calories</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mealPlan.days.map((day) => {

                        const breakfastCalories = day.nutritionSummaryBreakfast.nutrients.filter((nutrient: Nutrient) => nutrient.name === 'Calories');

                        const LunchCalories = day.nutritionSummaryLunch.nutrients.filter((nutrient: Nutrient) => nutrient.name === 'Calories');

                        const DinnerCalories = day.nutritionSummaryDinner.nutrients.filter((nutrient: Nutrient) => nutrient.name === 'Calories')
                        return (
                            <TableRow key={day.date}>
                                <TableCell className="font-medium text-left">Day: {day.day}
                                </TableCell>

                                {breakfastCalories.map((nutrient: Nutrient) => (
                                    <TableCell key={nutrient.name} className="text-center border">
                                        {nutrient.amount} {nutrient.unit}
                                    </TableCell>
                                ))}
                                {LunchCalories.map((nutrient: Nutrient) => (
                                    <TableCell key={nutrient.name} className="text-center border">
                                        {nutrient.amount} {nutrient.unit}
                                    </TableCell>
                                ))}
                                {DinnerCalories.map((nutrient: Nutrient) => (
                                    <TableCell key={nutrient.name} className="text-right border">
                                        {nutrient.amount} {nutrient.unit}
                                    </TableCell>
                                ))}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>

        </div>)
}

export default MealPlanTable