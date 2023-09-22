import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import logoImg from '../imgs/baselineLogo6.png';
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
          <h1 style={{color: 'white', fontSize: '3.1rem', letterSpacing: '-1.5px', fontStyle: 'bold', lineHeight: '1.1em', position: 'static', marginTop: '34.8%', textShadow: '0.8px 0.7px 1.19px white'}}>Connecting home chefs to neighborhood foodies.</h1>
          <Button className='popupButton' onClick={handleShow} style={{marginLeft: '14.6%', marginTop: '20%', borderRadius: '9em', fontSize: '17px', backgroundColor: 'white', color: '#82097E', padding: '2.6em 7.5em 2.6em 7.5em', fontWeight: '1000', border: 'none', boxShadow: '0px 0px 0px white'}}>Get Early Access</Button>
          <Modal
            show={show}
            onHide={handleClose}
            size='lg'
            aria-labelledby="contained-modal-YouFeed.IO Waitlist-vcenter"
            backdrop="static"
            animation={false}
            centered
          >
            <Modal.Header style={{backgroundColor: '#37414A', fontWeight: '900', color: 'white'}} closeButton>
              <Modal.Title style={{paddingTop: '16px', paddingBottom: '16px', paddingLeft: '11px'}}>
                Join YouFeed.io Waitlist
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
          <h1 style={{color: 'white', fontSize: '1.66rem', position: 'absolute', right: '2%', top:'2.3%', fontStyle: 'bolder', textShadow: '0.3px 0.5px 0.7px white', letterSpacing: '-2.3px'}}>YOUFEED.IO</h1>
          <img src={phoneFlapImg} alt="two of the app's home screen designs" style={{height: '71.2%', marginTop: '24%', position: 'static', marginLeft: '15%', marginRight: '11%'}} />
        </div>
      </div>
      <img src={logoImg} alt='embroidered brand logo' style={{width: '57%', position: 'relative', marginTop: '29.5%', marginBottom: '26.5%', marginLeft: '28.93%'}} />
    </div>
  );
}
