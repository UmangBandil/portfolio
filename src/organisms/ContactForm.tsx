import React, { useState } from 'react';
import FormField from '../molecules/FormField';
import Textarea from '../atoms/Textarea';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  successMessage?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  successMessage = 'Message sent successfully!',
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <FormField
        label="Name"
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
        name="name"
      />
      <FormField
        label="Email"
        type="email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={handleChange}
        required
        name="email"
      />
      <FormField
        label="Subject"
        type="text"
        placeholder="What is this about?"
        value={formData.subject}
        onChange={handleChange}
        required
        name="subject"
      />
      <div className="form-control">
        <label className="label">
          <span className="label-text">Message</span>
        </label>
        <Textarea
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          name="message"
        />
      </div>
      {submitted && (
        <div className="alert alert-success">
          <Typography variant="p">{successMessage}</Typography>
        </div>
      )}
      <Button variant="primary" className="w-full btn-lg">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;