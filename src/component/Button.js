import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    const full =  props.full ? "full" : "";
    const bg = props.bg ? props.bg : "";

    return (
        <div className={`button ${full} ${bg}`}>
            <div className="button__text">
                {props.children}
            </div>
        </div>
    )
}

Button.propTypes = {
    full: PropTypes.bool,
    bg: PropTypes.string,
}

export default Button
