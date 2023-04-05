import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LogoutComponent(props) {
    return (
        <Svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M18.75 16.25c-.691 0-1.25.56-1.25 1.25v5c0 .689-.56 1.25-1.25 1.25H12.5V5a2.52 2.52 0 00-1.703-2.376l-.37-.124h5.823c.69 0 1.25.561 1.25 1.25V7.5a1.25 1.25 0 102.5 0V3.75A3.755 3.755 0 0016.25 0H2.812c-.047 0-.087.021-.133.028C2.619.022 2.56 0 2.5 0A2.503 2.503 0 000 2.5V25a2.52 2.52 0 001.702 2.376l7.523 2.508c.255.078.508.116.775.116 1.379 0 2.5-1.122 2.5-2.5v-1.25h3.75A3.755 3.755 0 0020 22.5v-5c0-.69-.559-1.25-1.25-1.25z"
                fill="#FF5C5C"
            />
            <Path
                d="M29.634 11.616l-5-5A1.25 1.25 0 0022.5 7.5v3.75h-5a1.25 1.25 0 000 2.5h5v3.75a1.252 1.252 0 001.493 1.226 1.25 1.25 0 00.64-.343l5-5a1.249 1.249 0 000-1.767z"
                fill="#FF5C5C"
            />
        </Svg>
    )
}

export default LogoutComponent