import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FlashComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M8.069 5.184a.239.239 0 00-.211-.133l-2.872-.036L6.296.303A.238.238 0 005.87.1L.7 7.38a.239.239 0 00.194.377h2.223L1.303 13.69a.239.239 0 00.42.213l6.323-8.472a.239.239 0 00.023-.248z"
                fill="#0C9348"
            />
        </Svg>
    )
}

export default FlashComponent
