import PinnedStocks from './PinnedStocks'
import Messages from './Messages'


export default function Home (){
    return (
        <div className='home'>
            <Messages/>
            <div className="home-body">
                <PinnedStocks/>
            </div>
        </div>
)
}