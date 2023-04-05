import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"

function EditComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle r={10} transform="matrix(-1 0 0 1 10 10)" fill="#0C9348" />
            <G clipPath="url(#clip0_54_460)" fill="#fff">
                <Path d="M5.014 14.624a.293.293 0 00.362.362l2.735-.782-2.316-2.315-.78 2.735zM14.74 6.503L13.497 5.26a.873.873 0 00-.621-.257.872.872 0 00-.621.257l-.622.622 2.486 2.485.622-.621a.872.872 0 00.256-.622.873.873 0 00-.257-.621zM6.125 11.39l2.485 2.486 5.094-5.094-2.486-2.486-5.093 5.094z" />
            </G>
            <Defs>
                <ClipPath id="clip0_54_460">
                    <Path fill="#fff" transform="translate(5 5)" d="M0 0H10V10H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default EditComponent
