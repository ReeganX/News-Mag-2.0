import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);

    const API_KEY = "pub_15ccbd8ba48d4e9fa55d9a143accbcd3"; // Your NewsData API key

    const getData = async () => {
        try {
            const response = await fetch(
                `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${search}`
            );

            const jsonData = await response.json();
            console.log(jsonData.results);

            let dt = jsonData.results?.slice(0, 10);
            setNewsData(dt);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const userInput = (event) => {
        setSearch(event.target.value);
        getData(); // auto-load category news
    };

    return (
        <div>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>

                <ul style={{ display: "flex", gap: "11px" }}>
                    <a style={{ fontWeight: 600, fontSize: "17px" }}>All News</a>
                    <a style={{ fontWeight: 600, fontSize: "17px" }}>Trending</a>
                </ul>

                <div className='searchBar'>
                    <input
                        type='text'
                        placeholder='Search News'
                        value={search}
                        onChange={handleInput}
                    />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>

            <div>
                <p className='head'>Stay Update with TrendyNews</p>
            </div>

            <div className='categoryBtn'>
                <button onClick={userInput} value="sports">Sports</button>
                <button onClick={userInput} value="politics">Politics</button>
                <button onClick={userInput} value="entertainment">Entertainment</button>
                <button onClick={userInput} value="health">Health</button>
                <button onClick={userInput} value="fitness">Fitness</button>
            </div>

            <div>
                {newsData ? <Card data={newsData} /> : <p style={{ textAlign: "center" }}>Loading...</p>}
            </div>
        </div>
    );
};

export default Newsapp;
