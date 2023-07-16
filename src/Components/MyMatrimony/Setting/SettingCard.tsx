import './SettingCard.css'

function SettingCard() {
    return (
        <>
            <div className='Setting-card p-2'>
                <p className='Setting-card-text fw-bold'>Setting</p>
                <hr />
                <p className='Setting-card-text'>Account Setting</p>
                <hr />
                <p className='Setting-card-text'>Contact Filters</p>
                <hr />
                <p className='Setting-card-text'>Email/SMS Alerts</p>
                <hr />
                <p className='Setting-card-text'>Privacy Options</p>
                <hr />
                <p className='Setting-card-text'>Delete Profile</p>
            </div>
        </>
    )
}
export default SettingCard;