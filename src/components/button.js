import PropTypes from 'prop-types'


const button = ({title}) => {
  return (
    <div>
        <h1>{title}</h1>
    </div>
  )
}

button.defaultProps = {
    title : 'Hello world',
}

button.propTypes = {
    title : PropTypes.string,
}

export default button