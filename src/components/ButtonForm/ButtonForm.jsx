import { Button } from "react-bootstrap";

const ButtonForm = ({onClickIngreso}) => {
    
  return (
    <div className="d-flex justify-content-end">
        {/* <button onClick={onClickIngreso}>Ingresar</button> */}
        <Button className="mt-4 f-semibold btn-lg btn-salmon text-white" onClick={onClickIngreso}>Ingresar</Button>        
    </div>
  )
}

export default ButtonForm