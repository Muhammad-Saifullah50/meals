// import { getShoppingList } from "@/app/actions/shopping-list.actions"
import ShoppingList from "@/components/ShoppingList"

const ShoppingListPage = async () => {

    // const shoppingList = await getShoppingList()

    return (
        <section>

            <h2 className="font-bold text-3xl mb-7">Your Shopping List</h2>
            <div>
                <ShoppingList />
            </div>
        </section>
    )
}

export default ShoppingListPage