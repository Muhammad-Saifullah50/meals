'use server';

export const getRecipies = async ({
    query = '',
    cuisine = '',
    number = 12,
    diet = '',
    ingredients = '',
    calories = 800,
    prepTime = 10
}: {
    query: string;
    cuisine?: string
    number?: number
    diet?: string
    ingredients?: string
    calories?: number
    prepTime?: number
}) => {

    try {

        const request = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=${number}&query=${query}&cuisine=${cuisine}&maxCalories=${calories}&diet=${diet}&includeIngredients=${ingredients}&maxPrepTime=${prepTime}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.SPOONACULAR_API_KEY!,
            }
        });

        const recipies = await request.json();

        return recipies.results;
    } catch (error) {
        console.error('Error fetching recipies on server: ', error)
    }
}

export const getRecipiesById = async (id: string) => {

    try {
        const request = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.SPOONACULAR_API_KEY!,
            }
        });

        const recipe = await request.json();
console.log(recipe)
        return recipe

    } catch (error) {
        console.error('Error fetching recipe on server: ', error)
    }
}