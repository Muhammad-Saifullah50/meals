import RecipeCard from "@/components/RecipeCard";
import { getRecipies } from "./actions/recipies.actions";
import LoadMoreButton from "@/components/LoadMoreButton";
import FilterForm from "@/components/FilterForm";
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
export default async function Home({   searchParams }: HomePageParams) {

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

      <h1 className="font-bold text-3xl">Find what to cook </h1>

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
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 py-10 items-center justify-center w-full mx-auto">

     
          {recipies.map((recipe: RecipeInfo) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        
      </section>

      <section className="py-5">
        <LoadMoreButton number={number} />
      </section>


    </main>
  );
}
