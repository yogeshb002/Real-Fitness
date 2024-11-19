import { FETCH } from '@/backend/client';
import Articles from '@/components/fitness/Articles';
import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const fitness = () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const [articles, setArticles] = useState([])

    const fetchData = async () => {
        const url = 'https://newsapi.org/v2/everything'
        const params = { q: 'tesla', from: '2024-10-18', sortBy: 'publishedAt', apiKey: apiKey }
        const res = await FETCH(url, params);
        if (res) {
            setArticles(res?.data?.articles)
        }
    }



    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <div>
                <Navbar />
                <p className='text-[30px] p-10 text-green'>Recent Stories</p>
                    <Articles data={articles} />
            </div>
        </div>
    )
}

export default fitness