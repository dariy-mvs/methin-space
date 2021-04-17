import React, { Component } from 'react'
import './HeaderBoxForm.css';

export default class HeaderBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.querySelector('.header_box_button').textContent = 'Мы с Вами свяжемся!';
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
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
                        <label className='header_box_form_foundation_form_name'>
                            <input className='header_box_form_foundation_form_Inputname' placeholder="Имя" name='name' value={this.state.name} required onChange={this.handleChange} />
                        </label>
                        <label className='header_box_form_foundation_form_name'>
                            <input className='header_box_form_foundation_form_InputNumber' type='tel' placeholder="Номер телефона" name='number' value={this.state.number}required onChange={this.handleChange} />
                        </label>
                        <label className='header_box_form_foundation_form_name'>
                            <input className='header_box_form_foundation_form_InputEmail' type='email' placeholder="e-mail" name='email' value={this.state.email}required onChange={this.handleChange} />
                        </label>
                    </div>
                        <button className='header_box_button' href='#0'>Get Started</button>
                    </form>
                </div>
            </div>
    )
  }

  componentDidUpdate() {
    console.log(this.state);
  }

}
