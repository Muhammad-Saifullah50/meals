import RecipeCard from "@/components/RecipeCard";
import { getRecipies } from "./actions/recipies.actions";
import SearchBar from "@/components/SearchBar";
import LoadMoreButton from "@/components/LoadMoreButton";

export default async function Home({ searchParams }: { searchParams: { query: string, number: number } }) {

  const query = await searchParams.query
  const number = await searchParams.number

  const recipies = await getRecipies({
    query: query,
    number: number
  });

  return (
    <main>

      <h1 className="font-bold text-3xl">Find what to cook </h1>

      <section className="py-5">
        <SearchBar query={query} />
      </section>
      <section className="flex flex-wrap gap-10 py-10 items-center justify-center">
        {recipies.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </section>

      <section className="py-5">
        <LoadMoreButton number={number}/>
      </section>

      
    </main>
  );
}
