import * as React from "react"
import Svg, { Path, Ellipse } from "react-native-svg"

function PortOneComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.037 16.293A9.882 9.882 0 010 10.27C0 4.772 4.477.315 10 .315s10 4.457 10 9.955-4.477 9.955-10 9.955a9.987 9.987 0 01-6.387-2.294c-.21.277-.544.456-.92.456a1.151 1.151 0 01-1.155-1.148c0-.392.198-.739.5-.946z"
                fill="#000"
            />
            <Ellipse
                cx={8.46154}
                cy={8.42342}
                rx={8.46154}
                ry={8.42342}
                transform="matrix(-1 0 0 1 18.462 1.847)"
                fill="#D9D9D9"
            />
            <Ellipse
                cx={6.53847}
                cy={13.7163}
                rx={2.69231}
                ry={2.68018}
                fill="#000"
            />
            <Ellipse cx={10} cy={4.90995} rx={1.53846} ry={1.53153} fill="#000" />
            <Ellipse cx={15} cy={11.8018} rx={1.15385} ry={1.53153} fill="#000" />
        </Svg>
    )
}

export default PortOneComponent
