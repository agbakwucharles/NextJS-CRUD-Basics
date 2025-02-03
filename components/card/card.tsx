'use client'

import React from 'react'
import styles from './card.module.css';
import Button from './button';
import Edit from './edit';
import { useRouter } from "next/navigation";

interface cardInterface {
    title: string,
    id: string
}


const Card = ({ title, id }: cardInterface) => {
    const router = useRouter();
    const onDelete = async () => {
        const removeIt = confirm("Are you sure you want to delete this card? Type 'delete' to confirm.");

        if (removeIt) {
            const res = await fetch(`http://localhost:3000/api/users/${id}`, {
                method: 'DELETE'
            })
            console.log(res)
            if (res.ok) {
                router.refresh();
            }
        }
    }

    const onEdit = async () => {
        const newName = prompt("Enter new name");

        if (newName) {
            const res = await fetch(`http://localhost:3000/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: newName })
            })
            console.log(res)
            if (res.ok) {
                router.refresh();
            }
        }
    }

    return (
        <div className={styles.card}>
            <div className='flex'>
                <Button onDelete={onDelete} />
                <Edit onEdit={onEdit} />
            </div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{id}</p>
        </div>
    )
}

export default Card