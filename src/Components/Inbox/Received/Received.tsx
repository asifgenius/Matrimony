
import AllRequestesCard from './AllRequestesCard';
import './Received.css'
import ReceivedSort from './ReceivedSort';
function Received() {
    return (
        <>
            <div className='d-flex'>
                <ReceivedSort></ReceivedSort>                        
                <AllRequestesCard></AllRequestesCard>               
            </div>
        </>
        )
}

export default Received;