import MarkerIcon from '../assets/marker.png';
import './Entry.css'

function Entry(props) {
    const {img, country, googleMapsLink, title, dates, text} = props.object
    return (
        <article className='journal-entry'>

            <div className='main-image-container'>
                <img src={img.src} className='main-image'/>
            </div>

            <div className='info-container'>
                <img src={MarkerIcon} className='marker'/>
                <span className='country'>{country}</span>
                <a href={googleMapsLink}>
                    View on Google Maps
                </a>
                <h2 className='entry-title'>{title}</h2>
                <p className='trip-dates'>{dates}</p>
                <p className='entry-text'>{text}</p>
            </div>

        </article>

    )
}

export default Entry;