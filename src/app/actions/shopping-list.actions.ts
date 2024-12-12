'use server'

export const getShoppingList = async () => {

    const username = process.env.SPOONACULAR_USERNAME!
    const hash = process.env.SPOONACULAR_HASH!
    try {
        const request = await fetch(`https://api.spoonacular.com/mealplanner/${username}/shopping-list?hash=${hash}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.SPOONACULAR_API_KEY!,
            },
            cache: 'force-cache'
        });

        const response = await request.json()

        return response
    } catch (error) {
        console.error('Failed to get shopping list on server', error)
    }

}

export const generateShoppingList = async ({startDate, endDate}: {startDate: string, endDate: string}) => {

    console.log(startDate, endDate)

    const username = process.env.SPOONACULAR_USERNAME!
    const hash = process.env.SPOONACULAR_HASH!
    try {
        const request = await fetch(`https://api.spoonacular.com/mealplanner/${username}/shopping-list/${startDate}/${endDate}/?hash=${hash}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.SPOONACULAR_API_KEY!,
            },
            cache: 'force-cache'
        });

        const response = await request.json();

        return response
    } catch (error) {
        console.error('Failed to generate shopping list on server', error)
    }

}