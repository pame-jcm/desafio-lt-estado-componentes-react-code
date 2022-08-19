
import './App.css';
import InputForm from './components/InputForm/InputForm';
import ButtonForm from './components/ButtonForm/ButtonForm';
import AlertForm from './components/AlertForm/AlertForm';
import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [pass, setPass] = useState('');
  const [show, setShow] = useState(false);

  const handleOnChange = (valueInput) => {
    setShow(false);
    setPass(valueInput);
  }
  const handleOnChangeNombre = (valueNombre) => {
    setNombre(valueNombre);
  }
  const handleOnClickIngreso = () => {
    console.log('ingreso exitoso');
    setShow(true);
  }
  const handleOnClose = () => {
    setShow(false);
  }


  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-quick' style={{height:'100vh'}}>

      <section className='w-50 p-5 border border-2 border-salmon rounded-4 shadow-lg bg-pastel'>
              <InputForm 
                  valueNombre={nombre} onChangeNombre={handleOnChangeNombre} 
                  valuePass={pass} onChangeInput={handleOnChange}
              />      

              { parseInt(pass) === 252525 
                ? 
                  <ButtonForm onClickIngreso={handleOnClickIngreso}/> 
                : 
                  ''
              }
      </section>

      <section className='mt-3'>
        {
          show 
          ? 
            <AlertForm 
              color={parseInt(pass) === 252525 ? "success" : "danger"}
              heading={parseInt(pass) === 252525 ? "Ingreso Exitoso!!!" : "Password Incorrecta, vuelva a intentarlo."}
              message={parseInt(pass) === 252525 ? "Ten en cuenta que tu sesión expira cada 15 minutos" : "Te quedan pocos intentos"}
              onCloseAlert={handleOnClose}
            />
          :
          ''
        }
        
      </section>

        
    </div>
  );
}

export default App;
