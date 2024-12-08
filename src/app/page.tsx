import RecipeCard from "@/components/RecipeCard";
import { getRecipies } from "./actions/recipies.actions";
import SearchBar from "@/components/SearchBar";
import LoadMoreButton from "@/components/LoadMoreButton";
import FilterForm from "@/components/FilterForm";

export default async function Home({ searchParams }: { searchParams: { query: string, number: number } }) {

  const query = await searchParams.query
  const number = await searchParams.number
  const cuisine = await searchParams.cuisine
  const diet = await searchParams.diet
  const prepTime = await searchParams.prepTime
  const ingredients = await searchParams.ingredients
  const calories = await searchParams.calories

  const recipies = await getRecipies({
    query: query,
    number: number
  });

  return (
    <main>

      <h1 className="font-bold text-3xl">Find what to cook </h1>

      <section className="py-5">
        <SearchBar query={query} />
        <FilterForm
          cuisine={cuisine}
          diet={diet}
          prepTime={prepTime}
          ingredients={ingredients}
          calories={calories}
        />
      </section>
      <section className="flex flex-wrap gap-10 py-10 items-center justify-center">
        {/* {recipies.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))} */}
      </section>

      <section className="py-5">
        <LoadMoreButton number={number} />
      </section>


    </main>
  );
}
