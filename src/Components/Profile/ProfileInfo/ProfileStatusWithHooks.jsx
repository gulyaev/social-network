import React, {useState, useEffect} from "react";
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect (()=>{
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    } 

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatusThunk(status);
    }

    const onStatusChange = (e) => {
        setStatus (e.currentTarget.value);
    }

    return (
        <>
            { editMode &&
                <div>
                    <input  onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode } value={status}></input>
                </div>
            }
            { !editMode &&
                <div className={classes.input}>
                    <span onClick={ activateEditMode }>{status}</span>
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;