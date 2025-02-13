/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from 'react'
import { useStore } from '@/store/Store'

const Page = () => {

    const { open, setOpen } = useStore();

    React.useEffect(() => {
        if (open) {
            setOpen()
        }
    }, []) 

    return (
        <div className='text-white'>
            Team PAge
        </div>
    )
}

export default Page
