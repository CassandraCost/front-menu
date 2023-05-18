import './styles.css'

function App() {
  return (
    <div className="container">

      <div className="container-cabeçalho">
       <div className='texto'>
        <div className='name-usuario'></div>
        <div className='name-usuario'></div>
       </div>
        <div className='avatar-usuario'></div>
      </div>
      
      <div className="container-menu">

        <div className='bloco-menu'>
          <button className='btn1-1'></button>
          <div className='btn-2'>
            <div className='btn2-1'></div>
            <div className='btn2-1'></div>
          </div>
        </div>

        <div className='bloco-menu' style={{
          position: 'relative'
        }}>
          <div className='desabilitado'></div>
          <div className='btn-1'></div>
          <div className='btn-2'>
            <div className='btn2-1'></div>
            <div className='btn2-1'></div>
          </div>
        </div>

        <div className='bloco-menu' style={{
          position: 'relative'
        }} >
          <div className='desabilitado'></div>
          <div className='btn-1'></div>
          <div className='btn-2'>
            <div className='btn2-1'></div>
            <div className='btn2-1'></div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
