'use client'

import React from 'react'
import { useRouter } from "next/navigation";

const addbtn = () => {
    const router = useRouter();
    const createUser = async () => {
        const newUser = prompt("Enter new user name");
        if (!newUser) return;

        try {
            const res = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: newUser })
            });
            if (res.ok) {
                router.refresh();
            }

            return res.json();
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }


    return (
        <div className='addBtn' onClick={createUser}>
            <span className='middle'>+</span>
        </div>
    )
}

export default addbtn