import logo from './assets/hatorlogo.jpg';
import CountDown from './CountDown'


const Section2 = ({ onClick }) => {
  const tagDate = new Date('2024-05-15');
  const def = { days: 296, hours: 2, munites: 43, seconds: 45 };
 
  
    return (
        <div className='lg:w-80 w-full text-white inline-block p-5 lg:h-[50rem] bg-[#7269E1] rounded-[20px] '>
           <header className="flex w-full justify-between items-center">
                        <div className='flex gap-[10px] w-48 p-2 items-center'>
                            <img src={logo} alt="logo" className='h-10' />
                            <div>
                                <h1 className='text-[24px] text-white font-semibold'>HTR</h1>
                            </div>
                        </div>
                </header>
                <main>
                 <CountDown targetDate={tagDate} defaultValue={def}/>
                    <div className=" radius skeleton bg-[#000000] w-[280px] text-center mx-auto mt-5 h-5 "></div>
                    <div className="w-[280px] text-xs text-center mx-auto mt-2 h-5 flex justify-between items-center">
                        <p>-9922671</p>
                        <p>10,000,000 XRP</p>
                    </div>

                    <h1 className='text-lg text-center text-black my-5 font-bold'> How to participate in the airdrop </h1>
                    <p className='px-2 text-sm leading-relaxed my-3'>1. To participate Click "JOIN" button, Enter the amount of $HTR you want to send and specify your receiving address,then Click "Generate address" to generate airdrop address and you can make the transaction using any Wallet or Exchange.</p>
                    <p className='px-2 text-sm leading-relaxed my-3'>2. Once your transaction is received, an outgoing transaction will be sent to your recieving address, Chargeback time from 30 seconds to 24 hours.</p>
                    <p className='px-2 text-sm leading-relaxed my-3'>3. You can participate in the competition until all allocated $HTR tokens for airdrop are completely distributed.</p>
                    <p className='px-2 text-sm leading-relaxed my-3'>4. All users can ONLY participate and claim airdrop once. Don't forget to invite your friends.</p>

          <button className="w-full py-3 bg-black rounded" onClick={onClick}>Join Airdrop</button>
                </main>
        </div>
    );
}

export default Section2;
