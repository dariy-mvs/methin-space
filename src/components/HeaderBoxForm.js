import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HeaderBoxForm.css';

// Принимает
// updateState - функция
// userName, userEmail, userNumber, errorMessage - строки,
// userAgree - boolean,
// formValidate - функция
export default class HeaderBoxForm extends Component {
  static formAddError(input) {
    input.classList.add('error');
  }

  static formRemoveError(input) {
    input.classList.remove('error');
  }

  static async formSubmit(event) {
    const formData = new FormData(event.target);
    const response = await fetch('../src/mail.php', {
      method: 'POST',
      body: formData,
    });
    console.log(response);
    const headerFormButton = event.target.querySelector('.header_box_button');
    if (response.ok) {
      headerFormButton.textContent = 'Мы с Вами свяжемся!';
    } else {
      headerFormButton.textContent = 'Что-то пошло не так...';
    }
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.formSubmit = this.formSubmit.bind(this);
    // this.formRemoveError = this.formRemoveError.bind(this);
  }

  componentDidUpdate() {
  }

  handleSubmit(event) {
    const { formValidate, updateState } = this.props;
    event.preventDefault();
    const promiseValidate = new Promise((resolve) => {
      let errorCounter = 0;
      [...event.target.querySelectorAll('[required]')].forEach((el) => {
        errorCounter += formValidate(el);
      });
      if (errorCounter !== 0) {
        updateState('errorMessage', 'проверьте корректность данных');
      } else {
        updateState('errorMessage', '');
        resolve(errorCounter);
      }
    });
    promiseValidate.then((errorCounter) => {
      if (errorCounter === 0) {
        HeaderBoxForm.formSubmit(event);
      } else {
        updateState('errorMessage', 'проверьте корректность данных');
      }
    });
  }

  render() {
    const {
      userName, userEmail, userNumber, userAgree, errorMessage, updateState,
    } = this.props;
    return (
      <div
        className="header_box_form"
        onClick={(event) => {
          if (!event.target.closest('.header_box_button')) {
            event.target.closest('.header_box_form').scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }}
        role="presentation"
      >
        <div className="header_box_form_head">
          <h3>
            <span className="header_box_form_head_caption1">запишись</span>
            <span className="header_box_form_head_caption2"> бесплатно</span>
          </h3>
        </div>
        <div className="header_box_form_foundation">
          <form className="header_box_form_foundation_form" onSubmit={this.handleSubmit}>
            <div className="header_box_form_foundation_label">
              <span className="error_message">{errorMessage}</span>
              <label
                className="header_box_form_foundation_form_name"
                htmlFor="header_name"
              >
                <input
                  className="header_box_form_foundation_form_Inputname"
                  placeholder="Имя"
                  name="name"
                  id="header_name"
                  value={userName}
                  required
                  onChange={(event) => {
                    updateState('userName', event.target.value);
                  }}
                />
              </label>
              <label
                className="header_box_form_foundation_form_name"
                htmlFor="header_number"
              >
                <input
                  className="header_box_form_foundation_form_InputNumber"
                  type="tel"
                  placeholder="Номер телефона"
                  name="number"
                  id="header_number"
                  value={userNumber}
                  required
                  onChange={(event) => {
                    updateState('userNumber', event.target.value);
                  }}
                />
              </label>
              <label
                className="header_box_form_foundation_form_name"
                htmlFor="header_email"
              >
                <input
                  className="header_box_form_foundation_form_InputEmail"
                  type="email"
                  placeholder="e-mail"
                  name="email"
                  id="header_email"
                  value={userEmail}
                  required
                  onChange={(event) => {
                    updateState('userEmail', event.target.value);
                  }}
                />
              </label>
              <label
                className="form_checkbox"
                htmlFor="header_accept"
              >
                <input
                  type="checkbox"
                  name="accept"
                  id="header_accept"
                  className="form_checkbox_input"
                  checked={userAgree}
                  required
                  onChange={(event) => {
                    updateState('userAgree', event.target.checked);
                  }}
                />
                <span className="checkbox_text">Даю согласие на обработку моих персональных данных</span>
              </label>
            </div>
            <button
              type="submit"
              className="header_box_button"
              href="#0"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    );
  }
}

HeaderBoxForm.propTypes = {
  updateState: PropTypes.func.isRequired,
  userName: PropTypes.string,
  formValidate: PropTypes.func.isRequired,
  userEmail: PropTypes.string,
  userNumber: PropTypes.string,
  userAgree: PropTypes.bool,
  errorMessage: PropTypes.string,
};
HeaderBoxForm.defaultProps = {
  userName: '',
  userEmail: '',
  userNumber: '',
  userAgree: false,
  errorMessage: '',
};
