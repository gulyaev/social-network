import { authAPI } from "../../api/api";
import React from "react";
import { Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { connect } from 'react-redux';
import { logInThunk } from "../../redux/auth-reducer";
import styles from "../common/FormsControls/FormsControls.module.css";
import Alert from 'react-bootstrap/Alert';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Логин"} name={"login"} validate={[required]} component={Input} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <Field placeholder={"Пароль"} name={"password"} validate={[required]} component={Input} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} /> Запомнить меня
            </div>

            {props.error && <div className={styles.alert}>
                <Alert show={true} variant='danger'>
                    {props.error}
                </Alert>
            </div>}
            
            <div >
                 <Button type={"submit"} variant="success" size="sm" style={{ width: '145px' }}>Войти</Button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);

        props.logInThunk(formData.login, formData.password, formData.rememberMe);

    }

    return (
        <div className="text-center">
            <h2>АВТОРИЗУЙТЕСЬ</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { logInThunk })(Login);
