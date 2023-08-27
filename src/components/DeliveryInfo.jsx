import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DeliveryInfo({image, title, info}) {
    return (
        <div className="text-sm grid grid-cols-12"> 
            <FontAwesomeIcon icon={image} className="w-5 h-5"/>
            <div className="col-span-11">
                <p className="text-gray-700">{title}</p>
                <p className="text-gray-500">{info}</p>
            </div>
        </div>
    )
}