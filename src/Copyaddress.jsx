import React, {useState,useEffect} from 'react'

const Copyaddress = ({ address }) => {
    const [copied, setCopied] = useState(false);
    

    const handleCopy = () => {
        navigator.clipboard.writeText(address)
            .then(() => {
                setCopied(true)
                useEffect(() => {
                    setTimeout(()=>setCopied(false),2000) //Resets after 2 seconds
               },[copied])
            })
        .catch(error=>{
            console.error('failed to copy clipboard')
        })
    }
  return (
      <div>
          <button type='button' onClick={handleCopy} className='bg-[#534baf] px-7 py-2 text-white rounded-md text-sm font-semibold w-auto hover:bg-[#2d2b47] mt-4'>{
              copied ? 'Copied': 'Copy Address'
          }</button>
    </div>
  )
}

export default Copyaddress