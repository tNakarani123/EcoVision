import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ContactComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M18.027 26.396c0-1.036-.84-1.877-1.878-1.877H13.85a1.878 1.878 0 000 3.755h2.3c1.036 0 1.877-.84 1.877-1.878zm-14.08-4.84a8.13 8.13 0 001.074.015 5.33 5.33 0 005.229 4.298h.716a2.943 2.943 0 000 1.055h-.716a6.384 6.384 0 01-6.303-5.369zm-.537-1.123A4.09 4.09 0 010 16.399v-2.492a4.09 4.09 0 014.09-4.09h.273C4.798 4.322 9.394 0 15 0c5.606 0 10.202 4.323 10.637 9.816h.273a4.09 4.09 0 014.09 4.09V16.4a4.09 4.09 0 01-4.09 4.091h-1.208a.906.906 0 01-.906-.906V10.67a8.796 8.796 0 10-17.592 0v8.913c0 .353-.202.66-.497.809-.813.282-2.073.078-2.297.04z"
                fill="#000"
            />
        </Svg>
    )
}

export default ContactComponent
