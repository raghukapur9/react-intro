import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (
    <button onClick= {onClick} style = {{backgroundColor: color }} className='btn'>
        {text}
    </button>
  )
}

Button.defaultProps = {
    color : 'black',
    text: 'ADD'
}

export default Button