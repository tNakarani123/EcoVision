import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeActiveComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M27.67 10.66L17.325 3.335a1.429 1.429 0 00-1.652 0L5.331 10.66a2.857 2.857 0 00-1.206 2.332v14.4a2.857 2.857 0 002.857 2.858h4.554c.789 0 1.428-.64 1.428-1.429v-4.017c0-.79.64-1.429 1.429-1.429h4.214c.79 0 1.429.64 1.429 1.429v4.017c0 .79.64 1.429 1.428 1.429h4.554a2.857 2.857 0 002.857-2.857V12.992c0-.927-.45-1.796-1.206-2.332z"
                fill="#fff"
            />
        </Svg>
    )
}

export default HomeActiveComponent
