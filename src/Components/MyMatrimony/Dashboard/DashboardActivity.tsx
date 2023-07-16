import './DashboardActivity.css'

function DashboardActivity() {
    return (
        <>
            <div>
                <div className='Dashboard-activity-Card ms-3'>
                    <p>Your Activity Summary</p>
                    <div className='d-flex'>
                        <div className='Dashboard-activity pending-card'>
                            <h5 className='p-1'>2</h5>
                            <p className='p-1 text-white'>Pending Invitations</p>
                        </div>
                        <div className='Dashboard-activity  accepted-card mx-1'>
                            <h5 className='p-1'>2</h5>
                            <p className='p-1 text-white'>Accepted Invitations</p>
                        </div>

                        <div className='Dashboard-activity recent-visitor-card'>
                            <h5 className='p-1'>2</h5>
                            <p className='p-1 text-white'>Recent Visitors</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashboardActivity;