import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { 
      console.log(email);
      setEmail(''); 
      setIsSubmitted(true); 
      setMessage('Your email has been submitted successfully!'); 
    } else {
      setMessage('Please enter a valid email address.'); 
    }
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p>{message}</p>} {/* Display feedback message */}
    </section>
  );
};

export default Contact;