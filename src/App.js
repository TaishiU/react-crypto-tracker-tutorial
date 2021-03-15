import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin'
import './App.css'

const App = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=jpy&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then((res) => {
                console.log("API成功")
                setCoins(res.data)
            }).catch((e) => {
                alert("API通信失敗しているよ...")
                console.log(e)
            })
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filterdCoins = coins.filter(coin =>
        //大文字を小文字に変換する
        //inputに入力された文字を小文字に変換し、一覧のコイン名と一致していれば、リストに表示される
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>

            <div className="coin-app">
                <div className="coin-serch">
                    <h1 className="coin-text">Search a currency</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="Search"
                            className="coin-input"
                            onChange={handleChange}
                        />
                    </form>
                </div>
                {filterdCoins.map((coin) => {　//filterdCoinsメソッドでinputに入力した情報と一致したコインだけをmap関数で一覧表示
                    return (
                        <Coin
                            //image, name, symbol, price, volume 
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            price={coin.current_price}
                            //marketcap={coin.market_cap} //時価総額
                            //volume={coin.total_volume} //流通金額
                            priceChange={coin.price_change_percentage_24h}
                        />
                    )
                })}
            </div>


            {/* <ol>
                {coins.map((coin, index) => (
                    <li key={index}>{coin.symbol}</li>
                ))}
            </ol> */}
        </div>
    )
}

export default App


