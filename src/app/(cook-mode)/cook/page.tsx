import RecipeCard from "@/components/RecipeCard";
import FilterForm from "@/components/FilterForm";
import { getRecipies } from "@/app/actions/recipies.actions";
import { RecipeInfo } from "@/types";

type HomePageParams = {
  searchParams: {
    query: string,
    number: number,
    cuisine: string,
    diet: string,
    prepTime: number,
    ingredients: string,
    calories: number
  }
}
export default async function CookModePage({   searchParams }: HomePageParams) {

  const params = await searchParams

  const query =    params.query
  const number =    params.number
  const cuisine =    params.cuisine
  const diet =  params.diet
  const prepTime =  params.prepTime
  const ingredients =  params.ingredients
  const calories =  params.calories

  const recipies = await getRecipies({
    query: query,
    number: number,
    cuisine: cuisine,
    diet: diet,
    prepTime: prepTime,
    ingredients: ingredients,
    calories: calories
  });

  return (
    <main>

      <h1 className="font-bold text-3xl">Happy Cooking!!</h1>

      <section className="py-5">
        <FilterForm
          query={query}
          cuisine={cuisine}
          diet={diet}
          prepTime={prepTime}
          ingredients={ingredients}
          calories={calories}
        />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10 items-center justify-center w-full mx-auto">
          {recipies.map((recipe:RecipeInfo) => (
            <RecipeCard recipe={recipe} key={recipe.id} isCookMode={true}/>
          ))}
      </section>



    </main>
  );
}
