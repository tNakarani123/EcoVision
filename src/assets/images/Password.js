import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PasswordComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 2.571c-.758 0-1.485.271-2.02.754-.536.482-.837 1.136-.837 1.818v1.286h5.714V5.143c0-.682-.3-1.336-.837-1.818A3.026 3.026 0 008 2.57zM2.286 5.143v1.286a2.27 2.27 0 00-1.516.564 1.836 1.836 0 00-.627 1.364v7.714c0 .512.226 1.002.627 1.364A2.27 2.27 0 002.286 18h11.428a2.27 2.27 0 001.515-.565c.402-.361.628-.852.628-1.364V8.357c0-.511-.226-1.002-.627-1.364a2.27 2.27 0 00-1.516-.564V5.143c0-1.364-.602-2.672-1.673-3.637C10.969.542 9.515 0 8 0 6.484 0 5.031.542 3.96 1.506c-1.072.965-1.674 2.273-1.674 3.637zM8 13.82c.234 0 .467-.041.683-.122.217-.08.414-.2.58-.348.165-.15.297-.327.387-.522a1.469 1.469 0 000-1.23 1.607 1.607 0 00-.387-.521 1.808 1.808 0 00-.58-.348A1.959 1.959 0 008 10.607c-.474 0-.928.17-1.263.47a1.53 1.53 0 00-.523 1.137c0 .426.188.835.523 1.137.335.301.79.47 1.263.47z"
                fill={props.color}
            />
        </Svg>
    )
}

export default PasswordComponent