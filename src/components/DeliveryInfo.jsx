export default function DeliveryInfo({image, title, info}) {
    return (
        <div className="text-sm grid grid-cols-12"> 
            <img alt="delivery-info" src={image} className="w-6 h-6"/>
            <div className="col-span-11">
                <p className="text-gray-700">{title}</p>
                <p className="text-gray-500">{info}</p>
            </div>
        </div>
    )
}