import { NextApiRequest, NextApiResponse } from 'next';
import { formatPhoneNumber, formatEmail } from '../../lib/utils';

const contactFormHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }

  const formattedPhoneNumber = formatPhoneNumber(email);
  const formattedEmail = formatEmail(email);

  // Send email using a library like nodemailer
  // For demonstration purposes, we'll just log the message to the console
  globalThis.console.log(`Name: ${name}`);
  globalThis.console.log(`Phone Number: ${formattedPhoneNumber}`);
  globalThis.console.log(`Email: ${formattedEmail}`);
  globalThis.console.log(`Message: ${message}`);

  return res.status(201).json({ message: 'Thank you for contacting us!' });
};

export default contactFormHandler;