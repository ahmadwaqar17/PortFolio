import styled from 'styled-components';
import { FaQuoteLeft } from 'react-icons/fa';
import Card from './Card';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  avatar: string;
  testimonial: string;
  rating?: number;
}

const TestimonialCardContainer = styled(Card)`
  position: relative;
  padding: 2rem;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: rgba(0, 112, 243, 0.1);
  font-size: 2rem;
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  line-height: 1.7;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h4`
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
`;

const AuthorRole = styled.p`
  font-size: 0.875rem;
  color: var(--secondary-color);
`;

const RatingContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Star = styled.span<{ $filled: boolean }>`
  color: ${({ $filled }) => ($filled ? 'var(--warning-color)' : 'var(--border-color)')};
  font-size: 1rem;
  margin-right: 0.25rem;
`;

const TestimonialCard = ({
  name,
  role,
  company,
  avatar,
  testimonial,
  rating = 5,
}: TestimonialCardProps) => {
  return (
    <TestimonialCardContainer>
      <QuoteIcon>
        <FaQuoteLeft />
      </QuoteIcon>
      
      {rating > 0 && (
        <RatingContainer>
          {[...Array(5)].map((_, index) => (
            <Star key={index} $filled={index < rating}>
              ★
            </Star>
          ))}
        </RatingContainer>
      )}
      
      <TestimonialText>"{testimonial}"</TestimonialText>
      
      <TestimonialAuthor>
        <AuthorAvatar>
          <img src={avatar} alt={name} />
        </AuthorAvatar>
        
        <AuthorInfo>
          <AuthorName>{name}</AuthorName>
          <AuthorRole>
            {role}{company && ` at ${company}`}
          </AuthorRole>
        </AuthorInfo>
      </TestimonialAuthor>
    </TestimonialCardContainer>
  );
};

export default TestimonialCard;
