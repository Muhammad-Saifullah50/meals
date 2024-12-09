import RecipeCard from "@/components/RecipeCard";
import { getRecipies } from "./actions/recipies.actions";
import SearchBar from "@/components/SearchBar";
import LoadMoreButton from "@/components/LoadMoreButton";
import FilterForm from "@/components/FilterForm";

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
export default async function Home({ searchParams }: HomePageParams) {

  const query = await searchParams.query
  const number = await searchParams.number
  const cuisine = await searchParams.cuisine
  const diet = await searchParams.diet
  const prepTime = await searchParams.prepTime
  const ingredients = await searchParams.ingredients
  const calories = await searchParams.calories

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
      <section className="flex flex-wrap gap-10 py-10 items-center justify-center">
        {recipies.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </section>

      <section className="py-5">
        <LoadMoreButton number={number} />
      </section>


    </main>
  );
}
