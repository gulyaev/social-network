import React from "react";
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode () {
        this.setState({
            editMode: true
        });
    }    

    deactivateEditMode () {
        this.setState({
            editMode: false
        });
        this.props.updateStatusThunk(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState ({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate (prevProps, prevState) {
        if(prevProps.status !== this.props.status)
        this.setState({
            status: this.props.status
        }) 

            console.log('componentDidUpdate');
    }
    
    render() {
        console.log('render');
        return (
            <>  
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}></input>
                    </div>
                }
                {!this.state.editMode &&
                    <div className={classes.input}>
                        <span onClick={ this.activateEditMode.bind(this) }>{this.props.status + ' in div'}</span>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;