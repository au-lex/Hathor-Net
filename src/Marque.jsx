import Marquee from "react-fast-marquee";

import btc from './assets/coins/bitcoin-btc-logo.png';
import bnb from './assets/coins/bnb.png';
import cardano from './assets/coins/cardano.png';
import chainlink from './assets/coins/chainlink.png';
import dodge from './assets/coins/dogecoin-doge-logo.svg';
import eth from './assets/coins/ethereum-eth-logo.svg';
import lite from './assets/coins/litecoin.png';
import polygon from './assets/coins/polygon.png';
import solana from './assets/coins/solana.png';
import tether from './assets/coins/tether.png';
import toncoin from './assets/coins/toncoin.png';
import tron from './assets/coins/tron.png';
import usdc from './assets/coins/usd-coin.png';
import wbtc from './assets/coins/wrapped-bitcoin.png';
import hator from './assets/coins/hatorlogo.jpg';
//import MarqueCard from "./MarqueCard";

const Marque = () => {

    const coins = [
        {id:1, name: 'BTC', img: btc, price: '$43.7' },
        {id:2, name: 'BNB', img: bnb, price: '$272.25' },
        {id:3, name: 'ADA', img: cardano, price: '$0.5996' },
        {id:4, name: 'CHAIN', img: chainlink, price: '$14.56' },
        {id:5, name: 'DODGE', img: dodge, price: '$0.09158' },
        {id:6, name: 'ETH', img: eth, price: '$0.09158' },
        {id:7, name: 'TRX', img: tron, price: '$0.104' },
        {id:8, name: 'USDC', img: usdc, price: '$1.00' },
        {id:9, name: 'HTR', img: hator, price: '$0.6151' },
        {id:10, name: 'SOL', img: solana, price: '$86.60' },
        {id:11, name: 'LITE', img: lite, price: '$66.55' },
        {id:12, name: 'POLY', img: polygon, price: '$0.8759' },
        {id:13, name: 'TETH', img: tether, price: '$1' },
        {id:14, name: 'TON', img: toncoin, price: '$2.19' },
        {id:15, name: 'WBTC', img: wbtc, price: '$42,801.27' }
    ];

    const list = [];

    coins.forEach((product) => {
        list.push(<div key={product.id} className="flex gap-[5px] p-2 items-center justify-center bg-white">
        <img src={product.img} className="h-5" alt="" />
        <h1>{product.name}</h1>
        <p>{product.price}</p>
    </div>)
      })

    return (
        <div>
            <Marquee>
            {list}   
            </Marquee>
        </div>
    );
}

export default Marque;
