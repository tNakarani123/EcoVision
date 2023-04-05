import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LocationComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.814 19.614C12.66 17.49 17 11.99 17 7.24 17 3.242 13.866 0 10 0S3 3.242 3 7.24c0 4.751 4.34 10.25 6.186 12.374a1.068 1.068 0 001.628 0zM10 10.257c1.657 0 3-1.378 3-3.077 0-1.7-1.343-3.077-3-3.077S7 5.48 7 7.18s1.343 3.077 3 3.077z"
                fill="#fff"
                fillOpacity={0.75}
            />
        </Svg>
    )
}

export default LocationComponent
