import MealPlanTable from "@/components/MealPlanTable";
import { getMealPlan } from "@/app/actions/meals.actions";


const MealPlanPage = async () => {

  const mealPlan = await getMealPlan();
  return (
    <MealPlanTable mealPlan={mealPlan} />
  )
}

export default MealPlanPage