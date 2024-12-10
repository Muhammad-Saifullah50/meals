

export const getMealPlan = async () => {
    const username = process.env.SPOONACULAR_USERNAME!;
    const hash = process.env.SPOONACULAR_HASH!;

    
    try {
        const request = await fetch(`https://api.spoonacular.com/mealplanner/${username}/templates/100?hash=${hash}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.SPOONACULAR_API_KEY!,
            }   
        })

        const response = await request.json();
        return response
    } catch (error) {
        console.error('Error fetching meal plan on server: ', error)
    }
}