import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CardDetailsComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M18.8 0H1.2C.538 0 0 .538 0 1.2v11.2c0 .662.538 1.2 1.2 1.2h17.6c.662 0 1.2-.538 1.2-1.2V1.2c0-.662-.538-1.2-1.2-1.2zm.4 12.4c0 .22-.18.4-.4.4H1.2a.4.4 0 01-.4-.4V1.2c0-.22.18-.4.4-.4h17.6c.22 0 .4.18.4.4v11.2z"
                fill="#000"
                fillOpacity={0.8}
            />
            <Path d="M.4 3.6h19.2v1.6H.4V3.6z" fill="#000" fillOpacity={0.8} />
            <Path
                d="M19.6 3.2H.4a.4.4 0 00-.4.4v1.6c0 .221.18.4.4.4h19.2a.4.4 0 00.4-.4V3.6a.4.4 0 00-.4-.4zm-.4 1.6H.8V4h18.4v.8zM10.8 8H3.6a.4.4 0 000 .8h7.2a.4.4 0 000-.8zM7.6 9.6h-4a.4.4 0 000 .8h4a.4.4 0 000-.8z"
                fill="#000"
                fillOpacity={0.8}
            />
        </Svg>
    )
}

export default CardDetailsComponent
