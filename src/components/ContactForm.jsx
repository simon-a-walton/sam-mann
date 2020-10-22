import React from 'react';
import { colors } from './../constants/StyleConstants';
import { css } from 'glamor';

const submitButton = css({
  marginTop: '12px',
  backgroundColor: colors.purple,
  color: 'white',
  border: '2px solid white',
  borderRadius: '8px',
  ':hover': {
    backgroundColor: colors.green
  }
});

const labelFormat = css({
  fontWeight: 400
});

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ''
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action='https://formspree.io/f/xeqpgqrk'
        method='POST'
      >
        <div className='row'>
          <div className='col-lg-6 col-sm-12'>
            <label {...labelFormat}>Email:</label>
            <input type='email' name='email' className='w-100'/>
          </div>
          <div className='col-12 pt-2'>
            <label {...labelFormat}>Message:</label>
            <input type='text' name='message' className='p-3 w-100' />
          </div>
        </div>
        {status === 'SUCCESS' ? <p>Thanks!</p> : <button className={submitButton}>Submit</button>}
        {status === 'ERROR' && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}
