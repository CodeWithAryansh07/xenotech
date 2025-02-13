"use client";
import React from 'react'
import { useStore } from '@/store/Store'

const Page = () => {

    const { open, setOpen } = useStore();

    React.useEffect(() => {
        if (open) {
            setOpen()
        }
    })

    return (
        <div className='text-white'>
            Contact US page
        </div>
    )
}

export default Page
