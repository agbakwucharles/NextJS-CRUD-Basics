'use client'
import React, { useEffect, useState } from 'react';
import { use } from 'react';

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);
    const [user, setUser] = useState({ name: "", _id: "" });

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(`http://localhost:3000/api/users/${id}`, {
                method: 'GET',
                cache: 'no-store'
            });

            if (res.ok) {
                const data = await res.json();
                setUser(data);
            }
        };
        fetchUser();
    }, [id]);

    return (
        <div className="card">
            <h2>{user?.name}</h2>
            <p>{user?._id}</p>
        </div>
    );
};

export default Page;