import axios from 'axios';
import { useEffect, useState } from 'react'


export function Users() {
    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        const response = await axios.get("https://randomuser.me/api/?page=1&results=10&nat=us")
        const { results } = response.data
        setUsers(results)
    }


    useEffect(() => {
        fetchUsers();
    }, [])

    return users.length ? users.map((user) => (
        <div className="red">
            {user.name.first} {user.name.last} - {user.location.city}
        </div>
    )) : null
}