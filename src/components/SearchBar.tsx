import Form from "next/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
const SearchBar = ({ query }: { query: string }) => {
    return (
        <Form action={'/'} >
            <div className="flex gap-2">

                <Input name="query" placeholder="Search for a recipe" className="text-black" defaultValue={query} />

                <Button type="submit">Search</Button>
            </div>
        </Form>
    )
}

export default SearchBar