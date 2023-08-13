import img from '../imgs/logo.png';

export default function App(props) {
  return (
    <div className='container'>
      <div className='a' >
        <img src={img} alt='logo' style={{width: '20%', marginLeft: '40%'}} />
      </div>
      <div className='container-main' style={{marginTop: '8%'}}>
        <div className='d-flex'>
          <div style={{border: '15px solid black', width: '20em', height: '20em', marginLeft: '20%'}}></div>
          <div className='align-content-center align-self-center text-center'>
            <h1>MAIN HEADER</h1>
            <p className='vision-stmt' style={{color:"#777575", fontSize: '0.9rem'}}>SUBHEADER</p>
            <p className='btn-headtitle' style={{color:"#9b9999", fontSize: '0.8rem'}}>BUTTON INVOKER</p>
            <a rel="noreferrer" href='https://forms.gle/qV3QL2AMqX5jgoW67' target='_blank'><button className='bttn'>Join the waitlist</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}
