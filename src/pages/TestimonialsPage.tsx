import { motion } from 'framer-motion';
import styled from 'styled-components';
import Section from '../components/ui/Section';
import TestimonialCard from '../components/ui/TestimonialCard';
import { testimonials } from '../data';
import { media } from '../styles/media';

const TestimonialsContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  ${media.up('md')} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${media.up('lg')} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialsHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const TestimonialsPage = () => {
  return (
    <Section title="Testimonials" subtitle="What people say about working with me.">
      <TestimonialsContainer>
        <TestimonialsHeader>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: '1.125rem', lineHeight: 1.7 }}
          >
            I've had the pleasure of working with amazing clients and colleagues throughout my career. 
            Here are some of their kind words about our collaborations.
          </motion.p>
        </TestimonialsHeader>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                avatar={testimonial.avatar}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
              />
            </motion.div>
          ))}
        </TestimonialsGrid>
      </TestimonialsContainer>
    </Section>
  );
};

export default TestimonialsPage;
