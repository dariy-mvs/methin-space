import React, { Component } from 'react'
import './HeaderBoxForm.css';

export default class HeaderBoxForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formAddError = this.formAddError.bind(this);
    this.formRemoveError = this.formRemoveError.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    let errorCounter = 0;
    [...event.target.querySelectorAll('[required]')].forEach(el => {
      console.log(this.props.formValidate(el));
      errorCounter += this.props.formValidate(el);
    });
    if (errorCounter === 0) {
      let formData = new FormData(event.target);
      let response = await fetch('../src/mail.php', {
        method: 'POST',
        body: formData
      });
      console.log(response);
      if(response.ok) {
        event.target.querySelector('.header_box_button').textContent = 'Мы с Вами свяжемся!';
      } else {
        event.target.querySelector('.header_box_button').textContent = 'Что-то пошло не так...';
      }
    } else {
      this.props.updateState('errorMessage', 'проверьте корректность данных');
    }
    
  }

  render() {
    return (
      <div className="header_box_form" onClick={(event) => {
        if(!event.target.closest('.header_box_button')) {
          event.target.closest('.header_box_form').scrollIntoView(true)
        }
        }}>
                <div className="header_box_form_head">
                    <h3>
                        <span className='header_box_form_head_caption1'>запишись</span>
                        <span className='header_box_form_head_caption2'> бесплатно</span>
                    </h3>
                </div>
                <div className="header_box_form_foundation">
                    <form className='header_box_form_foundation_form' onSubmit={this.handleSubmit}>
                        <div className="header_box_form_foundation_label">
                        <span className='error_message'>{this.props.errorMessage}</span>
                        <label className='header_box_form_foundation_form_name'>
                            <input className='header_box_form_foundation_form_Inputname' placeholder="Имя" name='name' value={this.props.userName} required onChange={(event) => {
                              this.props.updateState('userName', event.target.value)}} />
                        </label>
                        <label className='header_box_form_foundation_form_name'>
                            <input className='header_box_form_foundation_form_InputNumber' type='tel' placeholder="Номер телефона" name='number' value={this.props.userNumber} required onChange={(event) => {
                              this.props.updateState('userNumber', event.target.value)}} />
                        </label>
                        <label className='header_box_form_foundation_form_name'>
                            <input className='header_box_form_foundation_form_InputEmail' type='email' placeholder="e-mail" name='email' value={this.props.userEmail} required onChange={(event) => {
                              this.props.updateState('userEmail', event.target.value)}} />
                        </label>
                        <label className='form_checkbox'>
                        <input type="checkbox" name="accept" className='form_checkbox_input' checked={this.props.userAgree} required onChange={(event) => {
                              this.props.updateState('userAgree', event.target.checked)}}/><span className='checkbox_text'>Даю согласие на обработку моих персональных данных</span></label>
                    </div>
                        <button className='header_box_button' href='#0'>Get Started</button>
                    </form>
                </div>
            </div>
    )
  }

  formAddError(input) {
    input.classList.add('error');
  }

  formRemoveError(input) {
    input.classList.remove('error');
  }

  componentDidUpdate() {
   // console.log(`errorMessage: ${this.props.errorMessage}, userNumber: ${this.props.userNumber}`);
  }

}