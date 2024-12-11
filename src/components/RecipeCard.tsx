import Image from "next/image";
import Link from "next/link";

type Recipe = {
    id: number;
    title: string;
    image: string;
    imageType: string;
}
type RecipeCardProps = {
    recipe: Recipe;
    isCookMode?:boolean

}
const RecipeCard = ({ recipe,isCookMode }: RecipeCardProps) => {
    return (
        <Link href={isCookMode ? `/cook/recipies/${recipe.id}`:`/recipies/${recipe.id}`}>
        <aside className="flex flex-col gap-6 border border-black rounded-3xl max-w-52  min-h-64 justify-between pb-2">
            <Image
                src={recipe.image}
                width={200}
                height={200}
                alt={recipe.title}
                className="rounded-3xl w-full h-full object-cover"  
            />

            <h2 className="font-bold text-xl px-2 line-clamp-2">{recipe.title}</h2>
        </aside>
        </Link>
        )
}

export default RecipeCard