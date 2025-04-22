import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from './Card';
import { media } from '../../styles/media';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

const BlogCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const BlogImage = styled.div`
  position: relative;
  height: 200px;
  margin: -1.5rem -1.5rem 1.5rem;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const BlogCategory = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 1;
`;

const BlogContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--secondary-color);
`;

const BlogTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  
  a {
    color: var(--text-color);
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const BlogExcerpt = styled.p`
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ReadMoreLink = styled(Link)`
  align-self: flex-start;
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition);
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const BlogCard = ({
  id,
  title,
  excerpt,
  image,
  date,
  category,
  readTime,
}: BlogCardProps) => {
  return (
    <BlogCardContainer hoverable>
      <BlogImage>
        <BlogCategory>{category}</BlogCategory>
        <img src={image} alt={title} />
      </BlogImage>
      
      <BlogContent>
        <BlogMeta>
          <span>{date}</span>
          <span>{readTime}</span>
        </BlogMeta>
        
        <BlogTitle>
          <Link to={`/blog/${id}`}>{title}</Link>
        </BlogTitle>
        
        <BlogExcerpt>{excerpt}</BlogExcerpt>
        
        <ReadMoreLink to={`/blog/${id}`}>
          Read More
        </ReadMoreLink>
      </BlogContent>
    </BlogCardContainer>
  );
};

export default BlogCard;
