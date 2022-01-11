import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    const full =  props.full ? "full" : "";
    const bg = props.bg ? props.bg : "";
    const size = props.size ? props.size : "";

    return (
        <div onClick={props.onClick} className={`button ${size} ${full} ${bg}`}>
            <div className="button__text">
                {props.children}
            </div>
        </div>
    )
}

Button.propTypes = {
    full: PropTypes.bool,
    bg: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string
}

export default Button
