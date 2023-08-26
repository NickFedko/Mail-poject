export default function DeliveryInfo({image, title, info}) {
    return (
        <div className="text-sm text-gray-700 grid grid-cols-2"  style={{gridTemplateColumns: '1fr 10fr', gridGap: '0'}}> 
            <img alt='delivery-info' src={image}/>
            <div className>
                <p>{title}</p>
                <p style={{color: '#7C7C7C'}}>{info}</p>
            </div>
        </div>
    )
}