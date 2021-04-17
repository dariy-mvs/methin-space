import React, { Component } from 'react';
import './FooterForm.css';

// принимает updateUserName={updateUserName} userName={userName} updateUserEmail={updateUserEmail} userEmail={userEmail}

export default class FooterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      theme: '',
    };
    this.submitForm = this.submitForm.bind(this);
    this.changeForm = this.changeForm.bind(this);
  }

  submitForm(event) {
    event.PreventDefault();
    // отменили действие по умолчанию. Но как отправлять форму?
  }

  changeForm(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <article className='col_box_article col_box_detalis'>
    <h3 className='col_box_detalis_header'>напишите нам</h3>
    <span className='col_box_detalis_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis.</span>
<form>
  <div className='footer_form'>
    <div className="footer_form_foundation">
        <label className='footer_form_foundation_label'>
            <input className='footer_form_foundation_input' placeholder="Имя" value={this.props.userName} required onChange={(event) => {
              this.props.updateUserName(event.target.value)}}/>
        </label>
        <label className='footer_form_foundation_label'>
            <input className='footer_form_foundation_input' type='email' placeholder="e-mail" value={this.props.userEmail} required onChange={(event) => {
              this.props.updateUserEmail(event.target.value)}} />
        </label>
        <label className='footer_form_foundation_label'>
            <input className='footer_form_foundation_input' placeholder="тема" name='theme' value={this.state.theme} onChange={this.changeForm}/>
        </label>
    </div>
    <div className="footer_form_message">
        <label className='footer_form_message_label'>
            <textarea className='footer_form_message_input' placeholder="Ваше сообщение" name='message' onChange={this.changeForm} required value={this.state.message}></textarea>
        </label>
    </div>
  </div>
    <button type='submit' className='footer_form_button' onSubmit={this.submitForm}>Отправить</button>
</form>
</article>
    )
  }
}

