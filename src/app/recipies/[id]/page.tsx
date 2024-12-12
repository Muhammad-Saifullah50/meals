import { getRecipiesById } from "@/app/actions/recipies.actions"
import RecipeNutritionTable from "@/components/RecipeNutritionTable";
import { Button } from "@/components/ui/button";
import { RecipeInfo } from "@/types";
import Image from "next/image";
import Link from "next/link";

const RecipePage = async ({ params }: { params: { id: string } }) => {

    const id = await params.id

    const recipe: RecipeInfo = await getRecipiesById(id);

    console.log(recipe)
    return (
        <main className="flex flex-col gap-4 ">
            <div className="flex items-center justify-center w-full ">
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    width={1000}
                    height={500}
                    className="object-cover w-full h-full"
                />
            </div>
            <h1 className="font-bold text-3xl">{recipe.title}</h1>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col gap-4 w-full lg:w-2/3 ">
                    <div className="flex flex-col gap-4">

                        <h2 className="font-bold text-2xl">Summary</h2>

                        <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />
                    </div>

                    <div>
                        <div>
                            <h2 className="font-bold text-2xl my-5">Nutritional Information</h2>

                            <RecipeNutritionTable nutrients={recipe.nutrition.nutrients} />
                        </div>
                    </div>


                </div>
                <div className="flex flex-col gap-4 w-full lg:w-1/3">
                    <h2 className="font-bold text-2xl">General Information</h2>

                    <ul>
                        <li>Rating: {recipe.spoonacularScore}</li>
                        <li>Likes: {recipe.aggregateLikes}</li>
                        {recipe.preparationMinutes && <li>Preparation minutes: {recipe.preparationMinutes}</li>}
                        {recipe.cookingMinutes && <li>Cooking minutes: {recipe.cookingMinutes}</li>}
                        <li>Health Score: {recipe.healthScore}</li>
                    </ul>

                    <Link href={`/cook/recipies/${recipe.id}`}><Button className="w-full">Open in Cooking Mode</Button></Link>
                </div>
            </div>
        </main>
    )
}

export default RecipePage