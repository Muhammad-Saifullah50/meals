import { Input } from "./ui/input"
const SearchBar = ({ query, setQuery }: { query: string, setQuery: React.Dispatch<React.SetStateAction<string>> }) => {

    return (

        <Input
            name="query"
            placeholder="Search for a recipe"
            className="text-black"
            value={query || ''} 
            onChange={(e) => setQuery(e.target.value)} 
        
            />
    )
}

export default SearchBar