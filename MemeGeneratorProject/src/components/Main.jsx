import {useState} from 'react';
import { useEffect } from 'react';
import './Main.css'

export default function Main() {

    const [memeInfo, setMemeInfo] = useState({
        imageUrl: "http://i.imgflip.com/1bij.jpg",
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor'
    })

    function handleChange(event) {
        const {value, name} = event.currentTarget;
        setMemeInfo(prevState => (
            {...prevState,
            [name]: value
            }
        ))
    }

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
            fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getRandomMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        setMemeInfo(prevState => (
            {
                ...prevState,
                imageUrl: allMemes[randomIndex].url
            }
        ))
    }

    return (

        <main>

            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={memeInfo.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={memeInfo.bottomText}
                    />
                </label>
                <button onClick={getRandomMemeImage}>Get a new meme image 🖼</button>
            </div>

            <div className="meme">
                <img src={memeInfo.imageUrl} />
                <span className="top">{memeInfo.topText}</span>
                <span className="bottom">{memeInfo.bottomText}</span>
            </div>

        </main>

    )
}