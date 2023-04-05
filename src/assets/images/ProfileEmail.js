import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ProfileEmailComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17 1.406c.83 0 1.5.628 1.5 1.407v9.374c0 .779-.67 1.407-1.5 1.407H3c-.83 0-1.5-.628-1.5-1.406V2.812c0-.778.67-1.406 1.5-1.406h14zM17 0H3C1.34 0 0 1.256 0 2.813v9.374C0 13.745 1.34 15 3 15h14c1.66 0 3-1.256 3-2.813V2.813C20 1.256 18.66 0 17 0z"
                fill={props.color}
            />
            <Path
                d="M10 8.578c-.72 0-1.45-.197-2.08-.59l-4.34-2.71c-.34-.215-.44-.656-.21-.975a.787.787 0 011.04-.197l4.34 2.71c.76.478 1.74.478 2.5 0l4.34-2.71a.777.777 0 011.04.197c.23.328.14.76-.21.975l-4.34 2.71c-.63.393-1.36.59-2.08.59z"
                fill={props.color}
            />
        </Svg>
    )
}

export default ProfileEmailComponent
