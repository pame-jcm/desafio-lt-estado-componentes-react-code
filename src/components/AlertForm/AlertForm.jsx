import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const AlertForm = ({color, heading, message, onCloseAlert}) => {
  return (
    <Alert variant={color} onClose={onCloseAlert} dismissible>
        <Alert.Heading>
            <FontAwesomeIcon icon={faCircleCheck} className="me-3"  />
            {heading}
        </Alert.Heading>
        <p>
          {message}
        </p>
    </Alert>
  )
}

export default AlertForm;