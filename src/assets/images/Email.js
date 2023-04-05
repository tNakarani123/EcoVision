import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EmailComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M1.523 13.545c.28.135.585.205.895.205h15.144c.225 0 .447-.037.66-.108l-5.976-6.247-.82.786a2.062 2.062 0 01-2.852 0l-1-.958-6.051 6.322zM19.152.748c-1.97 1.9-3.942 3.798-5.914 5.694l6.07 6.345c.207-.329.317-.71.317-1.1V2.063c0-.482-.169-.947-.473-1.315zM.839.737a2.062 2.062 0 00-.483 1.326v9.624c0 .305.067.606.198.882L6.583 6.27C4.667 4.427 2.753 2.582.839.737z"
                fill={props.color}
            />
            <Path
                d="M2.085.027l7.44 7.16a.687.687 0 00.95 0c1.71-1.634 5.926-5.697 7.44-7.157a2.069 2.069 0 00-.352-.03H2.418c-.112 0-.224.01-.333.027z"
                fill={props.color}
            />
        </Svg>
    )
}

export default EmailComponent
