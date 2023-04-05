import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function LocationActiveComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_291_21707)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.32 32.957c2.637-2.949 10.73-12.677 10.73-21.01C28.05 5.348 22.88 0 16.5 0 10.121 0 4.95 5.349 4.95 11.946c0 8.334 8.093 18.062 10.73 21.01a1.09 1.09 0 001.64 0zm-.82-16.033c2.734 0 4.95-2.273 4.95-5.077S19.234 6.77 16.5 6.77s-4.95 2.273-4.95 5.077 2.216 5.077 4.95 5.077z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_291_21707">
                    <Path fill="#fff" d="M0 0H33V33H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default LocationActiveComponent
