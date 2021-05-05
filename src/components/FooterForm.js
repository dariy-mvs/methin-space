import React, { Component } from "react";
import "./FooterForm.css";

// принимает updateUserName={updateUserName} userName={userName} updateUserEmail={updateUserEmail} userEmail={userEmail}

export default class FooterForm extends Component {
  constructor(props) {
    super(props);
    
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    [...event.target.querySelectorAll('[required]')].forEach(el => {
      this.props.formValidate(el);
    });
    this.props.updateFormIsValid('header');
    if (this.props.formIsValid) {
      event.target.querySelector('.footer_form_button').textContent = 'Спасибо за сообщение!';
    }
  }

  
  render() {
    return (
      <article className="col_box_article col_box_detalis">
        <h3 className="col_box_detalis_header">напишите нам</h3>
        <span className="col_box_detalis_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis.
        </span>
        <form onSubmit={(event) => {
          this.submitForm(event);
        }}>
          <div className="footer_form">
            <div className="footer_form_foundation">
              <label className="footer_form_foundation_label">
                <input
                  className="footer_form_foundation_input"
                  placeholder="Имя"
                  name='name'
                  value={this.props.userName}
                  required
                  onChange={(event) => {
                    this.props.updateUserName(event.target.value);
                  }}
                />
              </label>
              <label className="footer_form_foundation_label">
                <input
                  className="footer_form_foundation_input"
                  type="email"
                  placeholder="e-mail"
                  name='email'
                  value={this.props.userEmail}
                  required
                  onChange={(event) => {
                    this.props.updateUserEmail(event.target.value);
                  }}
                />
              </label>
              <label className="footer_form_foundation_label">
                <input
                  className="footer_form_foundation_input"
                  placeholder="тема"
                  name="theme"
                  value={this.props.messageTheme}
                  onChange={(event) => {
                    this.props.updateMessageTheme(event.target.value);
                  }}
                />
              </label>
            </div>
            <div className="footer_form_message">
              <label className="footer_form_message_label">
                <textarea
                  className="footer_form_message_input"
                  placeholder="Ваше сообщение"
                  name="message"
                  required
                  value={this.props.userMessage}
                  onChange={(event) => {
                    this.props.updateUserMessage(event.target.value);
                  }}
                ></textarea>
              </label>
            </div>
          </div>
          <label className="form_checkbox">
            <input
              type="checkbox"
              name="accept"
              className="form_checkbox_input"
              checked={this.props.myAgree}
              required
              onChange={(event) => {
                this.props.updateMyAgree(event.target.checked);
              }}
            />
            <span className="checkbox_text">
              Даю согласие на обработку моих персональных данных
            </span>
          </label>
          <span className='error_message'>{this.props.errorMessage}</span>
          <button
            type="submit"
            className="footer_form_button"
          >
            Отправить
          </button>
        </form>
      </article>
    );
  }
}
