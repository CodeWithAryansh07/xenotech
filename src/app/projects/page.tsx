/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Navbar from '@/components/Navbar'
import { ProjectSection } from '@/components/ProjectSection'
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
        <>
            <Navbar />
            {!open && <ProjectSection />}
        </>
    )
}

export default Page;
