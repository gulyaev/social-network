import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://i.insider.com/5a1d9d513339b0b9008b46a5?width=1100&format=jpeg&auto=webp'/>
            </div>
            <div className={s.descriptionBlock}>
                ава + описание
            </div>
        </div>
    )

}

export default ProfileInfo;