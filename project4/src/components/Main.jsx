import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ProfileSettings from './ProfileSettings'
import News from './News'
import StockSearch from './StockSearch'


export default function Main (){
    return(
        <div>
            <Routes>
                <Route exact path = "/" element={<Home/>}/>
                <Route exact path = "/News" element={<News/>}/>
                <Route exact path = "/StockSearch" element={<StockSearch/>}/>
                <Route exact path = "/ProfileSettings" element={<ProfileSettings/>}/>
            </Routes>
        </div>
    )
}