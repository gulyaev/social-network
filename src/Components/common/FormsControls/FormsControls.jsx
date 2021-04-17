import React from "react";
import styles from "./FormsControls.module.css";
import Alert from 'react-bootstrap/Alert';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            
            {
                hasError && 
                    <div className={styles.alert}>
                        <Alert show={true} variant='danger'>
                            {meta.error}
                        </Alert>
                    </div>
            }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            
            {
                hasError && 
                    <div className={styles.alert}>
                        <Alert show={true} variant='danger'>
                            {meta.error}
                        </Alert>
                    </div>
            }
        </div>
    )
}