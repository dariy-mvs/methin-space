import React, { Component } from 'react'
import './HeaderBoxForm.css';

export default class HeaderBoxForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formAddError = this.formAddError.bind(this);
    this.formRemoveError = this.formRemoveError.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    [...event.target.querySelectorAll('[required]')].forEach(el => {
      this.props.formValidate(el);
    });
    this.props.updateFormIsValid('header');
    if (this.props.formIsValid) {
      event.target.querySelector('.header_box_button').textContent = 'Мы с Вами свяжемся!';
    }
    
  }

  render() {
    return (
      <div className="header_box_form" onClick={(event) => {event.target.closest('.header_box_form').scrollIntoView(true)}}>
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
                              this.props.updateUserName(event.target.value)}} />
                        </label>
                        <label className='header_box_form_foundation_form_name'>
                            <input className='header_box_form_foundation_form_InputNumber' type='tel' placeholder="Номер телефона" name='number' value={this.props.userNumber} required onChange={(event) => {
                              this.props.updateUserNumber(event.target.value)}} />
                        </label>
                        <label className='header_box_form_foundation_form_name'>
                            <input className='header_box_form_foundation_form_InputEmail' type='email' placeholder="e-mail" name='email' value={this.props.userEmail} required onChange={(event) => {
                              this.props.updateUserEmail(event.target.value)}} />
                        </label>
                        <label className='form_checkbox'>
                        <input type="checkbox" name="accept" className='form_checkbox_input' checked={this.props.myAgree} required onChange={(event) => {
                              this.props.updateMyAgree(event.target.checked)}}/><span className='checkbox_text'>Даю согласие на обработку моих персональных данных</span></label>
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
    console.log(this.props.errorMessage);
  }

}