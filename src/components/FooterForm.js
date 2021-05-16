import React, { Component } from 'react';
import './FooterForm.css';
import PropTypes from 'prop-types';

// принимает:
// updateState={this.updateState}
// userName={this.state.userName}
// userEmail={this.state.userEmail}
// userMessage={this.state.userMessage}
// messageTheme={this.state.messageTheme}
// userAgree={this.state.userAgree}
// formValidate={this.formValidate}
// errorMessage={this.state.errorMessage}

export default class FooterForm extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  async submitForm(event) {
    const { formValidate, updateState } = this.props;
    event.preventDefault();
    let errorCounter = 0;
    [...event.target.querySelectorAll('[required]')].forEach((el) => {
      errorCounter += formValidate(el);
    });
    if (errorCounter === 0) {
      const formData = new FormData(event.target);
      const response = await fetch('../src/mail.php', {
        method: 'POST',
        body: formData,
      });
      const footerButton = event.target.querySelector('.footer_form_button');
      if (response.ok) {
        footerButton.textContent = 'Спасибо за сообщение!';
      } else {
        footerButton.textContent = 'Что-то пошло не так...';
      }
    } else {
      updateState('errorMessage', 'проверьте корректность данных');
    }
  }

  render() {
    const {
      userName, userEmail, messageTheme,
      userMessage, updateState, userAgree, errorMessage,
    } = this.props;
    return (
      <article className="col_box_article col_box_detalis color-block">
        <h3 className="col_box_detalis_header">напишите нам</h3>
        <span className="col_box_detalis_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis.
        </span>
        <form
          className="footer_form_box"
          onSubmit={(event) => {
            this.submitForm(event);
          }}
        >
          <div className="footer_form">
            <div className="footer_form_foundation">
              <label className="footer_form_foundation_label" htmlFor="footer_name">
                <input
                  className="footer_form_foundation_input"
                  placeholder="Имя"
                  name="name"
                  id="footer_name"
                  value={userName}
                  required
                  onChange={(event) => {
                    updateState('userName', event.target.value);
                  }}
                />
              </label>
              <label className="footer_form_foundation_label" htmlFor="footer_email">
                <input
                  className="footer_form_foundation_input"
                  type="email"
                  placeholder="e-mail"
                  name="email"
                  id="footer_email"
                  value={userEmail}
                  required
                  onChange={(event) => {
                    updateState('userEmail', event.target.value);
                  }}
                />
              </label>
              <label
                className="footer_form_foundation_label"
                htmlFor="footer_theme"
              >
                <input
                  className="footer_form_foundation_input"
                  placeholder="тема"
                  name="theme"
                  id="footer_theme"
                  value={messageTheme}
                  onChange={(event) => {
                    updateState('messageTheme', event.target.value);
                  }}
                />
              </label>
            </div>
            <div className="footer_form_message">
              <label
                className="footer_form_message_label"
                htmlFor="footer_message"
              >
                <textarea
                  className="footer_form_message_input"
                  placeholder="Ваше сообщение"
                  name="message"
                  id="footer_message"
                  required
                  value={userMessage}
                  onChange={(event) => {
                    updateState('userMessage', event.target.value);
                  }}
                />
              </label>
            </div>
          </div>
          <label
            className="form_checkbox"
            htmlFor="footer_accept"
          >
            <input
              type="checkbox"
              name="accept"
              id="footer_accept"
              className="form_checkbox_input"
              checked={userAgree}
              required
              onChange={(event) => {
                updateState('userAgree', event.target.checked);
              }}
            />
            <span className="checkbox_text">
              Даю согласие на обработку моих персональных данных
            </span>
          </label>
          <span className="error_message">{errorMessage}</span>
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

FooterForm.propTypes = {
  updateState: PropTypes.func.isRequired,
  userName: PropTypes.string,
  formValidate: PropTypes.func.isRequired,
  userEmail: PropTypes.string,
  userMessage: PropTypes.string,
  messageTheme: PropTypes.string,
  userAgree: PropTypes.bool,
  errorMessage: PropTypes.string,
};
FooterForm.defaultProps = {
  userName: '',
  userEmail: '',
  userMessage: '',
  messageTheme: '',
  userAgree: false,
  errorMessage: '',
};
