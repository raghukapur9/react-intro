import PropTypes from 'prop-types'
import Button from './Button';

const Header = (props) => {
    const onClick = () => {
        console.log("Added an event");
    }
    return (
        <header className = 'header'>
            <h1>
                {props.title}
            </h1>
            <Button color='green' text='Add Task' onClick= {onClick}/>
        </header>
    )
}
Header.defaultProps = {
    title : 'Default Title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// // CSS in JS
// const headingStyle = {
//     color:'red', backgroundColor: 'blue'
// }
export default Header