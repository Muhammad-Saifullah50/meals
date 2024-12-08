'use client'
import { useState } from "react"
import { CuisineForm } from "./CuisineForm"
import { DietForm } from "./DietForm"
import Form from "next/form"
import { Button } from "./ui/button"

const FilterForm = () => {

    const [cuisine, setCuisine] = useState("")
    return (
        <Form action={'/'}>
            <CuisineForm setCuisine={setCuisine} />
            <DietForm />

            <Button type="submit">Apply Filter</Button>
        </Form>
    )
}

export default FilterForm