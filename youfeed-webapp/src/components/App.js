import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import phoneFlapImg from '../imgs/phoneFlap.png';

export default function App(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (show) {
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [show]);

  return (
    <div className='container'>
      <div className='d-flex row'>
        <div className='col-6'>
          <h2 style={{color: 'white', fontStyle: 'bold', position: 'static', textShadow: '0.8px 0.7px 1.19px white', letterSpacing: '-1px', lineHeight: '1.1em', fontSize: '3.1rem', marginTop: '34.8%'}}>Connecting home chefs to neighborhood foodies</h2>
          <Button className='popupButton' onClick={handleShow} style={{position: 'static', marginLeft: '12.4%', marginTop: '18.2%', borderRadius: '9em', fontSize: '15px', backgroundColor: 'white', color: '#82097E', width: '400px', height: '76.9px', fontWeight: '1000', border: 'none', boxShadow: '0px 0px 0px white'}}>Get Early Access</Button>
          <Modal
            show={show}
            onHide={handleClose}
            size='lg'
            aria-labelledby="contained-modal-YouFeed.IO Waitlist-vcenter"
            backdrop="static"
            animation={false}
            centered
          >
            <Modal.Header style={{backgroundColor: '#820978', fontWeight: '900', color: 'white'}} closeButton>
              <Modal.Title style={{fontSize: '1.3rem', paddingLeft: '11px'}}>
                Join YouFeed.io Waitlist
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ maxHeight: '30%' }}>
              <div
                data-tf-widget="VypsSxqx"
                data-tf-opacity="100"
                data-tf-iframe-props="title=YouFeed.io Waitlist"
                data-tf-transitive-search-params
                data-tf-medium="snippet"
                style={{ width: '100%', height: '500px' }}
              >
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <div className='col-5' style={{marginBottom: '0'}}>
          <h1 style={{color: 'white', fontSize: '2rem', position: 'absolute', left: '83.84%', top: '2.05%', fontStyle: 'bolder', textShadow: '0.3px 0.5px 0.7px white', letterSpacing: '1px'}}>YOUFEED.IO</h1>
          <img src={phoneFlapImg} alt="two of the app's home screen designs" style={{height: '71.2%', marginTop: '24%', position: 'static', marginLeft: '15%', marginRight: '11%'}} />
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
