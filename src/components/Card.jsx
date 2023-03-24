export default function Card(props) {
    return (
        <div className='card'>
            <img src={`/src/assets/${props.imgName}`} className='card-img' />
            <div className='card-details'>
                <div className='card-location-wrapper'>
                    <img src='/src/assets/location-icon.svg' className='card-location-icon' />
                    <span className='card-location-title'>{props.location && props.location.toUpperCase()}</span>
                    <a href='https://maps.google.com' className='location-map' target='_blank'>View on Google Maps</a>
                </div>
                <h2 className='card-title'>{props.title}</h2>
                <span className='card-booking-date'>{props.startDate} - {props.endDate}</span>
                <p className='card-description'>{props.description}</p>
            </div>
        </div>
    )
}