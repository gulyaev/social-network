import React from "react";
import { Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";


const maxLength20 = maxLengthCreator(20);

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label>Напишите сообщение</Form.Label>
				<Field  className={classes.field} validate={[required, maxLength20]} component={Textarea} name={"newMessageText"} placeholder={"Enter your message"} style={{ color: '#000' }} as="textarea" rows={3}/>
			</Form.Group>
			<div className="text-right">
				<Button type="submit" className={'${classes["send-btn"]}'} variant="success" size="sm">Отправить</Button>
			</div>
		</form>
	)
}

const Dialogs = (props) => {
	let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
	let messagesElements = props.messagesData.map(message => <Message name={message.name} message={message.message} key={message.id} id={message.id} />)

	//let newMessageElement = React.createRef();

	let addNewMessage = (values) => {
		props.addMessage (values.newMessageText);
	}

	return (
		<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" className={classes.dialogsDiv}>
			<div className={classes.DIALOGSDiv}>DIALOGS</div>
			<Row xs={8} lg={8}>
				<Col xs={8} lg={4} className={classes.Col1}>
					<ListGroup>
						{dialogsElements}
					</ListGroup>
				</Col>
				<Col xs={8} lg={8}>
					{messagesElements}
						<AddMessageFormRedux onSubmit={addNewMessage} />
				</Col>
			</Row>
		</div>
	)
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm); 

export default Dialogs;