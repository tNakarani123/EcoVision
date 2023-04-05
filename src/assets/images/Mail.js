import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MailComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.667 3.87V9.17l4.47-3.192-4.47-2.11zm0 7.77v-.625l5.97-4.265-.068-.095 1.162.549c.804.379 1.734.379 2.538 0l1.162-.549-.068.095 5.97 4.265v.625a2 2 0 01-2 2H2.667a2 2 0 01-2-2zM17.333 9.17V3.87l-4.47 2.11 4.47 3.192zM.987 1.957c0-.813.659-1.472 1.472-1.472H15.54c.813 0 1.472.659 1.472 1.472v.405L9.628 5.847a1.472 1.472 0 01-1.256 0L.987 2.362v-.405z"
                fill="#000"
            />
        </Svg>
    )
}

export default MailComponent
