import { getShoppingList } from "@/app/actions/shopping-list.actions"
import GenerateShoppingListButton from "@/components/GenerateShoppingListButton"

const ShoppingListPage = async () => {

    const shoppingList = await getShoppingList()
    console.log(shoppingList , 'list')

    const emptyList = shoppingList.cost === 0
    return (
        <section>

            <h2 className="font-bold text-3xl mb-7">Your Shopping List</h2>
            <div>
                {
                    emptyList ? (
                        <>
                            <p>Your shopping list is empty</p>
                            <GenerateShoppingListButton />
                        </>) : (

                        // <ShoppingList />
                        <p>dadd</p>
                    )
                }
            </div>
        </section>
    )
}

export default ShoppingListPage