import React from 'react'
import qrCode from './assets/htrqr.png';
import Copyaddress from './Copyaddress';

const Address = ({xrp}) => {
  return (
    <div className='text-center color-white flex  flex-col content-center justify-between mt-[3rem]'>
        <h1 className='mb-4'>Scan the QR code below</h1>
        <img src={qrCode} alt="htr wallet adress qr code " className='w-1/2 h-1/2 object-contain md:ml-[9rem] ml-[6.5rem] mb-3' />
       
      <h1 className='mb-4'>{ xrp}</h1>
      <p className='text-blue'>send only HTR to this address or you might loose your funds</p>
      <Copyaddress address={ xrp} />
    </div>
  )
}

export default Address