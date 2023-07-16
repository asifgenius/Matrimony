

import AllRequestesCard from '../../../Components/Inbox/Received/AllRequestesCard';
import ReceivedFilter from '../../../Components/Inbox/Received/ReceivedFilter';
import ReceivedSort from '../../../Components/Inbox/Received/ReceivedSort';
import './AllRequest.css'
function AllRequest() {
    return (
        <div className='d-flex AllRequest-background-color'>
            <div>
                <ReceivedSort></ReceivedSort>
                <ReceivedFilter></ReceivedFilter>
            </div>

            <div>
                <AllRequestesCard></AllRequestesCard>
            </div>
        </div>

    )
}

export default AllRequest;