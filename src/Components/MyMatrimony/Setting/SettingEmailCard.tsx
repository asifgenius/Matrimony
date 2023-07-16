import './SettingEmailCard.css'

function SettingEmailCard() {
    return (
        <>
            <div className='Setting-Email-Card-text'>
                <div className='Setting-Email-account-text'>
                    <p className='Setting-account fw-bold'>My Account</p>
                    <p className='Setting-Email-Card-email-text'>Email</p></div>

                <div className='Setting-Email-Card'>
                    <div className='d-flex'>
                        <div>
                            <p>Email </p>
                        </div>
                        <div className='mx-5'>
                            <p className='setting-text'>:</p>
                        </div>
                        <div className='ms-5'>
                            <p className='ms-5'>asif@gmail.com</p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default SettingEmailCard;