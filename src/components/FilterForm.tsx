'use client'
import { useState } from "react"
import { CuisineForm } from "./CuisineForm"
import { DietForm } from "./DietForm"
import SearchBar from "./SearchBar"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"


const FilterForm = ({
    query: existingQuery,
    cuisine: existingCuisine,
    diet: existingDiet,
    prepTime: existingPrepTime,
    ingredients: existingIngredients,
    calories: existingCalories
}: any) => {


    const [query, setQuery] = useState(existingQuery || '')
    const [cuisine, setCuisine] = useState(existingCuisine || '')
    const [diet, setDiet] = useState(existingDiet || '')
    const [prepTime, setPrepTime] = useState(existingPrepTime || '')
    const [ingredients, setIngredients] = useState(existingIngredients || '')
    const [calories, setCalories] = useState(existingCalories || '');

    const router = useRouter();

    const handleParamsUpdate = () => {  
        const params = [
            {name: 'query' ,value: query},
            {name: 'cuisine' ,value: cuisine},
            {name: 'diet' ,value: diet},
            {name: 'prepTime' ,value: prepTime},
            {name: 'ingredients' ,value: ingredients},
            {name: 'calories' ,value: calories}
        ]

        const nonemptyParams = params.filter(param => param.value !== '');

        const searchString = nonemptyParams.map(param => `${param.name}=${param.value}`).join('&');

        router.push(`/?${searchString}`);
    }

    return (
        <div className="flex flex-col gap-4">
            <SearchBar query={query} setQuery={setQuery} />

            <div className="flex gap-2">

                <CuisineForm setCuisine={setCuisine} />
                <DietForm setDiet={setDiet} />

                <Input type="number" name="prepTime" placeholder="Prep Time" className="text-black" value={prepTime} onChange={(e) => setPrepTime(e.target.value)} />
                <Input type="string" name="ingredients" placeholder="Ingredients" className="text-black" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
                <Input type="number" name="calories" placeholder="Calories" className="text-black" value={calories} onChange={(e) => setCalories(e.target.value)} />

                <Button onClick={handleParamsUpdate}>Search</Button>

            </div>
        </div>
    )
}

export default FilterForm