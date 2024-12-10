import MealPlanTable from "@/components/MealPlanTable";
import { getMealPlan } from "../actions/meals.actions";


const MealPlanPage = async () => {

  const mealPlan = await getMealPlan();
  return (
    <MealPlanTable mealPlan={mealPlan} />
  )
}

export default MealPlanPage