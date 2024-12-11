'use client'
import { generateShoppingList } from "@/app/actions/shopping-list.actions"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

const GenerateShoppingListButton = () => {

    const router = useRouter();
    
    const startDate = new Date().toISOString().split('T')[0];

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const formattedEndDate = endDate.toISOString().split('T')[0];

    const handleClick = async () => {

        console.log(startDate)
        const shoppinglist = await generateShoppingList({startDate, endDate: formattedEndDate}) 
        
        if (shoppinglist) router.refresh()
    }
  return (
    <Button onClick={() => handleClick()}>Generate Shopping List</Button>
  )
}

export default GenerateShoppingListButton