import { useState, useEffect } from 'react';
import axios from 'axios';
import { ListItem } from './listItem'

export function List({ ids }) {
    const [stories, setStories] = useState([])
    async function getStory(id) {
        if (id) {
            try {
                const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                const { data } = response
                setStories(prevStories => [...prevStories, data])
            } catch (e) {
                console.log(e)
            }
        }
    }

    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            getStory(ids[i])
        }
    }, [ids])


    return stories.map((id, index) => (
        <div>
            <ListItem item={stories[index]} />
        </div>
    ))
}