import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PhoneComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M5.177 2.79L3.861.548C3.603.11 3.045-.04 2.627.25 1.805.82.58 1.816.276 2.882c-.473 1.655 1.232 5.596 3.55 7.914 2.319 2.319 6.059 3.823 7.714 3.35 1.066-.305 2.063-1.53 2.632-2.351.289-.418.14-.976-.299-1.233l-2.24-1.317a.935.935 0 00-1.247.282l-.616.91c-.267.393-.784.52-1.183.26a16.932 16.932 0 01-2.68-2.183 16.933 16.933 0 01-2.182-2.68c-.26-.398-.133-.916.26-1.182l.91-.615a.935.935 0 00.282-1.248z"
                fill="#000"
            />
        </Svg>
    )
}

export default PhoneComponent
