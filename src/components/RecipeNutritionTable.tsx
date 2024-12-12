import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Nutrient } from "@/types"

const RecipeNutritionTable = ({ nutrients }: { nutrients: Nutrient[] }) => {
    return (
        <Table className="border">
            <TableHeader>
                <TableRow>
                    <TableHead className="border">Name</TableHead>
                    <TableHead className="border">Amount</TableHead>
                    <TableHead className="border">Percent of daily needs</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {nutrients.map((nutrient: Nutrient) => (
                    <TableRow key={nutrient.name} className="border">
                        <TableCell className="border">{nutrient.name}</TableCell>
                        <TableCell className="border">{nutrient.amount} {nutrient.unit}</TableCell>
                        <TableCell className="border">{nutrient.percentOfDailyNeeds}%</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}

export default RecipeNutritionTable