import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;

    const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
      if (isConfirmed) {
        console.log('Submitting feedback:', formData);
        setFormData({
          name: '',
          email: '',
          feedback: '',
          rating: ''
        });
        alert('Thank you for your valuable feedback!');
      };

    event.target.reset();

    };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          maxlength="500"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <div style={{display:'flex', gap:'10px', flexDirection:'column'}}>
          <div>Please rate us:</div>
          <div>
            <input 
              type='radio'
              name='rating'
              id='1'
              onChange={handleChange}
              value='1'
            />
            <label for='1'> 1</label>
          </div>
          <div>
            <input 
              type='radio'
              name='rating'
              id='2'
              onChange={handleChange}
              value='2'
            />
            <label for='2'> 2</label>
          </div>
          <div>
            <input 
              type='radio'
              name='rating'
              id='3'
              onChange={handleChange}
              value='3'
            />
            <label for='3'> 3</label>
          </div>
          <div>
            <input 
              type='radio'
              name='rating'
              id='4'
              onChange={handleChange}
              value='4'
            />
            <label for='4'> 4</label>
          </div>
          <div>
            <input 
              type='radio'
              name='rating'
              id='5'
              onChange={handleChange}
              value='5'
            />
            <label for='5'> 5</label>
          </div>
          <button type="submit">Submit Feedback</button>
        </div>

      </form>
    </>
  );
};

export default FeedbackForm;
