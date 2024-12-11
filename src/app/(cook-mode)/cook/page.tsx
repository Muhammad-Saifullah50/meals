import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";
import LoadMoreButton from "@/components/LoadMoreButton";
import FilterForm from "@/components/FilterForm";
import { Suspense } from "react";
import RecipeCardSkeleton from "@/components/RecipeCardSkeleton";
import { getRecipies } from "@/app/actions/recipies.actions";

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
      <section className="flex flex-wrap gap-10 py-10 items-center justify-center">

      <Suspense fallback={
          <div className="flex flex-wrap gap-10 items-center justify-center">
            {[...Array(6)].map((_, index) => (
              <RecipeCardSkeleton key={index} />
            ))}
          </div>
        }>
          {recipies.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} isCookMode={true}/>
          ))}
        </Suspense>
        
      </section>

      <section className="py-5">
        <LoadMoreButton number={number} />
      </section>


    </main>
  );
}
