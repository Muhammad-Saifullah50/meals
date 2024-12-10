import { getMealPlan } from "../actions/meals.actions";


const MealPlanPage = async () => {

    const mealPlan = await getMealPlan();
    console.log(mealPlan, 'plan')
  return (
   <h1></h1>
  )
}

export default MealPlanPage