import React from "react"

function button(props) {
    return (

        <div>

            <button

                data-testid="myButton"
                style={{
                    display: props.isBlock === "true" ? "block" : "inline",
                    backgroundColor: props.isDanger === "true" ? "red" : "Green"
                }}
                disabled={props.isDisabled === "true"}
                onClick={props.onClick}>
                {props.name}

            </button>

        </div>
    );
}

export default button;