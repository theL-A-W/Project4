import PinnedStocks from './PinnedStocks'
import Messages from './Messages'


export default function Home (){
    return (
        <div className='home'>
            <img id='logo' src='./src/assets/Trenz-logo.png' ></img>
            <Messages/>
            <div className="home-body">
                <PinnedStocks/>
            </div>
        </div>
)
}