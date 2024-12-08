'use server';

export const getRecipies = async ({
    query = '',
    cuisine = '',
    number = 12
}: {
    query: string;
    cuisine?: string
    number?: number
}) => {

    try {

        const request = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=${number}&query=${query}&cuisine=${cuisine}`, {
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
        const request = await fetch(`https://api.spoonacular.com/recipes/${id}/information`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.SPOONACULAR_API_KEY!,
            }
        });

        const recipe = await request.json();

        return recipe

    } catch (error) {
        console.error('Error fetching recipe on server: ', error)
    }
}