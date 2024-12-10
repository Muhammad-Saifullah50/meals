import React from 'react'

const RecipeCardSkeleton = () => {
    return (
        <aside className="flex flex-col gap-6 border border-black rounded-3xl max-w-52 min-h-64 justify-between pb-2 animate-pulse">
            <div className="rounded-3xl w-full h-52 bg-gray-200"></div>
            <div className="h-4 bg-gray-200 w-3/4 rounded mx-2"></div>
            <div className="h-4 bg-gray-200 w-1/2 rounded mx-2"></div>
        </aside>)
}

export default RecipeCardSkeleton