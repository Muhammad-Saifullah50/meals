import Form from "next/form";
import { generateMealPlan } from "@/app/actions/meals.actions"
import { Button } from "@/components/ui/button";
const GenerateMealPlan =async () => {
    const plan = await generateMealPlan('week');

    return (
        <Form action={'/meal-plan'} >
            <Button type='submit'>Generate Meal Plan</Button>
        </Form>
    )
}

export default GenerateMealPlan