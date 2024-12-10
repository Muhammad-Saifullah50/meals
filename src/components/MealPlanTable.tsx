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

const MealPlanTable = ({ mealPlan }: { mealPlan: any }) => {
    console.log(mealPlan)
    return (
        <>
            <Table>
                <TableHeader>Table of meals</TableHeader>
                <TableCaption>Your generated meal plan</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Days</TableHead>
                        <TableHead>Breakfast</TableHead>
                        <TableHead>Lunch</TableHead>
                        <TableHead>Dinner</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mealPlan.days.map((day: any) => (
                        <TableRow key={day.date}>
                            <TableCell className="font-medium">Day: {day.day}</TableCell>
                            {day.items.map((item: any) => (
                                <TableCell key={item.id}>
                                    {item.value.title}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Table>
                <TableHeader>Table of nutrients</TableHeader>
                <TableCaption>Nutritional information about your meal plan</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Days</TableHead>
                        <TableHead>Breakfast</TableHead>
                        <TableHead>Lunch</TableHead>
                        <TableHead>Dinner</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mealPlan.days.map((day: any) => (
                        <TableRow key={day.date}>
                            <TableCell className="font-medium">Day: {day.day}
                            </TableCell>

                            {day.nutritionSummaryBreakfast.nutrients.map((nutrient: any) => (
                                <TableCell key={nutrient.name}>
                                    {nutrient.name}: {nutrient.amount} {nutrient.unit}
                                </TableCell>
                            ))}
                            {day.nutritionSummaryLunch.nutrients.map((nutrient: any) => (
                                <TableCell key={nutrient.name}>
                                    {nutrient.name}: {nutrient.amount} {nutrient.unit}
                                </TableCell>
                            ))}
                            {day.nutritionSummaryDinner.nutrients.map((nutrient: any) => (
                                <TableCell key={nutrient.name}>
                                    {nutrient.name}: {nutrient.amount} {nutrient.unit}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </>)
}

export default MealPlanTable