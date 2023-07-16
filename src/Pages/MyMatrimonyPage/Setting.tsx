import SettingCard from '../../Components/MyMatrimony/Setting/SettingCard';
import SettingEmailCard from '../../Components/MyMatrimony/Setting/SettingEmailCard';
import SettingPasswordCard from '../../Components/MyMatrimony/Setting/SettingPasswordCard';
import './Setting.css'

function Setting() {
    return (
        <div className='setting-background-color'>
            <div className='setting-background d-flex'>
                <div>
                    <SettingCard></SettingCard>
                </div>
                <div>
                    <SettingEmailCard></SettingEmailCard>
                    <SettingPasswordCard></SettingPasswordCard>
                </div>
            </div>
        </div>
    )
}
export default Setting;