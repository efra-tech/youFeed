import img from '../imgs/logo.png';

export default function App(props) {
  return (
    <div className='container'>
      <div className='container-main' style={{marginTop: '8%'}}>
        <div className='d-flex'>
          <div style={{border: '11px solid black', width: '10em', height: '20em', marginLeft: '20%'}}></div>
          <div className='m-4' style={{border: '11px solid black', width: '10em', height: '20em'}}></div>
          <div className='align-content-center align-self-center text-center'>
            <h1>MAIN HEADER</h1>
            <p className='vision-stmt' style={{color:"#777575", fontSize: '0.9rem'}}>SUBHEADER</p>
            <p className='btn-headtitle' style={{color:"#9b9999", fontSize: '0.8rem'}}>BUTTON INVOKER</p>
            <a rel="noreferrer" href='https://forms.gle/qV3QL2AMqX5jgoW67' target='_blank'><button className='bttn'>HYPERLINK</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}
