import { getRecipiesById } from "@/app/actions/recipies.actions"
import { RecipeInfo } from "@/types";
import Image from "next/image";

const CookRecipePage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id

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
            <div className="flex gap-4">
                <div className="flex flex-col gap-4 w-2/3 ">
                    <div className="flex flex-col gap-4">


                        <h2 className="font-bold text-2xl">Step by Step Instructions</h2>

                        <div>
                            {recipe.analyzedInstructions.map((ins) => (
                                <div key={ins.name} className="flex flex-col gap-4">
                                    <h3 className="font-bold text-xl">{ins.name}</h3>
                                    {ins.steps.map((step) => (
                                        <div
                                            key={step.number}
                                            className="flex flex-col gap-2">
                                            <h3 className="font-bold text-xl">Step: {step.number}</h3>
                                            {step.step}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

        
                </div>
                <div className="flex flex-col gap-4 w-1/3">
                    <h2 className="font-bold text-2xl">Ingredients</h2>

                    {recipe.extendedIngredients.map(ingredient => (
                        <li key={ingredient.id} className="list-none">
                            <div className="flex justify-between items-center">
                                <p>{ingredient.name}</p>
                                <span className="flex gap-2">
                                    <p>{ingredient.amount}</p>
                                    <p>{ingredient.unit}</p>
                                </span>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default CookRecipePage