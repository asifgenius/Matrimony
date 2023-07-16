import './SettingPasswordCard.css'

function SettingPasswordCard() {
    return (
        <>
           <div className='Setting-Email-Card-text mt-5'>
                <div className='Setting-Email-account-text'>
                    <p className='Setting-Email-Card-email-text'>Password</p></div>

                <div className='Setting-Email-Card'>
                    <div className='d-flex'>
                        <div>
                            <p>Password </p>
                        </div>
                        <div className='mx-5'>
                            <p className='setting-password-text'>:</p>
                        </div>
                        <div className='ms-5'>
                            <p className='ms-5'>**********</p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default SettingPasswordCard;