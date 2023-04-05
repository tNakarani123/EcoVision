import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeComponent(props) {
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
                d="M16.294 6.124l-5.468-3.873a1.429 1.429 0 00-1.652 0L3.706 6.124A2.857 2.857 0 002.5 8.456v7.02a2.857 2.857 0 002.857 2.857H6.43c.789 0 1.428-.64 1.428-1.428v-1.31c0-.789.64-1.429 1.429-1.429h1.428c.79 0 1.429.64 1.429 1.43v1.309c0 .789.64 1.428 1.428 1.428h1.072a2.857 2.857 0 002.857-2.857v-7.02c0-.927-.45-1.796-1.206-2.332z"
                fill="#fff"
                fillOpacity={0.75}
            />
        </Svg>
    )
}

export default HomeComponent
