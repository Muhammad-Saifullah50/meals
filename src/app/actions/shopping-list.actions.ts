'use server'

export const getShoppingList = async () => {

    const username = process.env.SPOONACULAR_USERNAME!
    try {
        const request = await fetch(`https://api.spoonacular.com/mealplanner/${username}/shopping-list`, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.SPOONACULAR_API_KEY!,
            },
            cache: 'force-cache'
        });

        const response = await request.json()

        return response
    } catch (error) {
        console.error('Failed to get shopping list on server')
    }

}