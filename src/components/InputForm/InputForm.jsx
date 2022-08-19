import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const InputForm = ({valueNombre, onChangeNombre, valuePass, onChangeInput}) => {

  return (
    <div>
       
      <FloatingLabel
        controlId="floatingInput"
        label="Nombre"
        className="mb-3">
        <Form.Control 
                type="text" 
                name="nombre"
                value={valueNombre}
                onChange={(e) => onChangeNombre(e.target.value)}
                placeholder="Nombre"/>
      </FloatingLabel>

      <FloatingLabel 
        controlId="floatingPassword" 
        label="Password">
        <Form.Control 
                type="password" 
                name="pass"
                value={valuePass}
                onChange={(e) => onChangeInput(e.target.value)} 
                placeholder="PASS"/>
      </FloatingLabel>
    
    </div>

  )
}

export default InputForm;

/* <div>
        <input
            type="text" 
            name="nombre"
            value={valueNombre}
            onChange={(e) => onChangeNombre(e.target.value)}
        />
        <input
            type="text" 
            name="pass"
            value={valuePass}
            onChange={(e) => onChangeInput(e.target.value)}
        />
    </div> */