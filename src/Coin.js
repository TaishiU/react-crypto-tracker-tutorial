import React from 'react'
import './Coin.css'

const Coin = ({ rank, image, name, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div>
            <div className="coin-container">
                <div className="coin-row">
                    <div className="coin">
                        <p className="rank">{rank}</p>
                        <img src={image} alt="crypto" />
                        <h1>{name}</h1>
                        <p className="coin-symbol">{symbol}</p>
                    </div>
                    <div className="coin-data">
                        <p className="coin-price">価格：{price.toLocaleString()}円</p>
                        {/* <p className='coin-volume'>{volume}円</p> */}
                        {priceChange < 0 ? (
                            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                        ) : (
                                <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                            )}
                        {/* <p className="coin-marketcap">
                            時価総額：{marketcap.toLocaleString()}円
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coin
