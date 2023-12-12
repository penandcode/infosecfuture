import React from 'react'
import Button from './Button'

const Card = (props: {
    button: any; img: string | undefined; heading: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; subHeading: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined
}) => {
    return (
        <div className="card cardShadow">
            <div className="text-center">

                <img src={props.img} height={75} width={75} className='m-4' />
                <p style={{ fontWeight: 500, fontSize: "32px", color: "rgba(19, 61, 122, 1)", textAlign: "center" }}>{props.heading}</p>
                <p style={{ fontWeight: 500, fontSize: "20px", textAlign: "center" }}>{props.subHeading}</p>
                <div className="card-body">
                    <p style={{ fontWeight: 400, fontSize: "18px" }}>{props.text}</p>
                </div>
                <div className='text-center py-4'>
                    <Button name={props.button} />
                </div>
            </div>
        </div>
    )
}

export default Card