import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PhonePayComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M18.447.401a15 15 0 10-6.894 29.197A15 15 0 0018.447.401z"
                fill="#5F259F"
            />
            <Path
                d="M21.807 11.086a1.108 1.108 0 00-1.09-1.077h-2.011l-4.609-5.292a1.71 1.71 0 00-1.76-.504l-1.598.504a.371.371 0 00-.168.586l5.033 4.777H7.979a.398.398 0 00-.415.417v.838a1.109 1.109 0 001.09 1.09h1.174v4.024c0 3.016 1.593 4.777 4.274 4.777a5.778 5.778 0 002.347-.42v2.686a1.325 1.325 0 001.34 1.34h1.173a.542.542 0 00.503-.502V12.344h1.922a.399.399 0 00.42-.42v-.838zm-5.373 7.207a4 4 0 01-1.678.334c-1.34 0-2.01-.669-2.01-2.178v-4.022h3.688V18.293z"
                fill="#fff"
            />
        </Svg>
    )
}

export default PhonePayComponent
