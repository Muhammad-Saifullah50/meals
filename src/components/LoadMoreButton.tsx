import Form from 'next/form'
import React from 'react'
import { Button } from './ui/button'

const LoadMoreButton = ({ number }: { number: number }) => {
    return (
        <Form action={'/'} name='number' defaultValue={number + 12}>
            <Button type='submit'>Load More</Button>
        </Form>
    )
}

export default LoadMoreButton