import React, { useState } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Router from 'next/router'

const news = ({ news }) => {
    const [searchQuery, setSearchQuery] = useState('react')

    const handleTextChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        Router.push(`/news/?searchTerm=${searchQuery}`)
    }

    return (
        <Layout pageTitle='News'>
            <main>

                <div className='flex'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            onChange={handleTextChange}
                        />

                        <button type="submit" value="Submit" className='bg-white text-black'>Search</button>
                    </form>
                </div>

                <h1 className='text-2xl mt-5'>News</h1>
                {news.map((item, index) => {
                    return (
                        <div key={index}>
                            <a href={item.url} target='_blank'>
                                <p>{item.title}</p>
                            </a>
                        </div>
                    )
                })}
            </main>
        </Layout>
    )
}

news.getInitialProps = async ({ query }) => {
    let news

    try {
        const res = await fetch(
            `https://hn.algolia.com/api/v1/search/.?query=${query.searchTerm}`
        )
        news = await res.json()
        console.log(news)
    } catch (error) {
        console.log('ERROR', error)
        news = []
    }

    return {
        news: news.hits
    }
}

export default news