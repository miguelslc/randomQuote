import React, {useEffect, useState} from 'react';

import twitterIcon from '../../twitter.svg'
import tumblrcon from '../../tumblr.svg'

const Quotes = () =>{
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    
    const getQuote = () => {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json/'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuotes = data.quotes;
                let randomNumber = Math.floor(Math.random()*dataQuotes.length)
                let randomQuotes = dataQuotes[randomNumber]
                setQuote(randomQuotes.quote)
                setAuthor(randomQuotes.author)
            })
    }

    useEffect(()=>{
        getQuote();
    },[])

    const handleClickNextQuote = (e) =>{
        getQuote();
    }

    return (
        <div className="quote-box">
            <div className="quote">
                <p>{quote}</p>
            </div>
            <div className="author">
                <p>{author}</p>
            </div>
            <div className="buttons-quote">
                <div className="social-media">
                    <div className="tweet-media">
                        <span><img src={twitterIcon} alt="Twitter Logo"></img></span>
                    </div>
                    <div className="thumblr-media">
                        <span><img src={tumblrcon} alt="Tumblr Logo"></img></span>
                    </div>
                </div>
                <button className="new-quote" onClick={handleClickNextQuote}>Nueva Cita</button>
            </div>
        </div>
    )
}

export default Quotes;