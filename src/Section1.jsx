import logo from './assets/hatorlogo.jpg';
import xrvideo from './assets/airdrop.mp4';
import Card from './Card';
const Section1 = () => {
    const cardInfo = [
        { head: 'Token' , body : 'HTR (HTR)' },
        { head: 'Type' , body : 'Multi-Chain' },
        { head: 'Total Supply' , body : '99,988,100,379 HTR' },
        { head: 'Market Cap' , body : '$31,447,996,967' },
        { head: 'Total Volume' , body : '1,305,219,630 HTR' },
    ];
    return (
        <div className='lg:flex-grow w-full p-5 rounded-[20px] bg-white shadow-lg'>
                <header className="flex w-full justify-between items-center">
                        <div className='flex gap-[10px] w-48 p-2 items-center'>
                            <img src={logo} alt="logo" className='h-10' />
                            <div>
                                <h1 className='text-[16px] font-semibold'>HTR</h1>
                                <div className='flex gap-[5px]'>
                            <a href="https://www.facebook.com/HathorNetwork"><i className="fab text-lg lg:text-2xl fa-facebook"></i></a>
                            <a href="https://youtube.com/@HathorNetwork?si=_MjWbbTeqm3AOZIS"> <i className="fab text-lg lg:text-2xl fa-youtube"></i></a>
                            <a href="https://x.com/HathorNetwork?t=IHsB3gwB_uGVI5uTWaMNg&s=09"><i className="fab text-lg lg:text-2xl fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>

                        <button className='bg-[#7269E1] text-white lg:text-md text-xs px-5 py-2 rounded-[30px] flex gap-[15px] items-center'>
                            <i className="fas fa-lock"></i>
                            Airdrop live 
                        </button>
                </header>

                <main className='lg:mt-10 mt-6'>
                        <p className='leading-loose lg:text-md text-sm text-justify'>Hathor Network is a user-freindly blockchain platform that provides an intuitive and efficient way to build and deploy applications</p>
                        <p className='leading-loose lg:text-md text-sm text-justify'> To commemorate the progress made by Hathor Network in the advancement of the HTR LEDGER community, we have committed a total of 10,000,000 $HTR for airdrop to fans worldwide. Every person can participate. In order to be eligible, participants should have a minimum of 1500 $HTR during the competition period. All Qualifying users will split a pool of 10,000,000 $HTR </p>
                <video className='lg:my-16 my-10' controls autoPlay width="100%">
                <source src={xrvideo} type="video/mp4" />
                </video>

                { cardInfo.map((card , index)=> ( <Card key={index} info = {card} /> )) }
                </main>
        </div>
    );
}

export default Section1;
