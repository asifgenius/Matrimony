import DashboardActivity from '../../Components/MyMatrimony/Dashboard/DashboardActivity';
import DashboardProfileCard from '../../Components/MyMatrimony/Dashboard/DashboardProfileCard';
import './Dashboard.css'

function Dashboard() {
    return (
        <div className='dashboard-background-page'>
            <div className='dashboard-details-background d-flex'>
                <DashboardProfileCard />
                <DashboardActivity />
            </div>
        </div>
    )
}
export default Dashboard;