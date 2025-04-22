import { useState, FormEvent, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';
import Button from './Button';
import { media } from '../../styles/media';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  ${media.down('sm')} {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.1);
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.1);
  }
`;

const SubmitButton = styled(Button)`
  align-self: flex-start;
`;

const FormMessage = styled(motion.div)<{ $type: 'success' | 'error' }>`
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-bottom: 1.5rem;
  background-color: ${({ $type }) =>
    $type === 'success' ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)'
  };
  color: ${({ $type }) =>
    $type === 'success' ? 'var(--success-color)' : 'var(--error-color)'
  };
  border: 1px solid ${({ $type }) =>
    $type === 'success' ? 'var(--success-color)' : 'var(--error-color)'
  };
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    font-size: 1.25rem;
  }
`;

const ErrorMessage = styled.span`
  color: var(--error-color);
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Clear form status after 5 seconds
  useEffect(() => {
    if (formStatus) {
      const timer = setTimeout(() => {
        setFormStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        message: 'Your message has been sent successfully! I will get back to you soon.',
        type: 'success',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <AnimatePresence>
        {formStatus && (
          <FormMessage
            $type={formStatus.type}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {formStatus.type === 'success' ? <FaCheck /> : <FaTimes />}
            {formStatus.message}
          </FormMessage>
        )}
      </AnimatePresence>

      <FormRow>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>
      </FormRow>

      <FormGroup>
        <Label htmlFor="subject">Subject</Label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          aria-invalid={!!errors.subject}
        />
        {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
      </FormGroup>

      <SubmitButton
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : (
          <>
            <FaPaperPlane /> Send Message
          </>
        )}
      </SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;
