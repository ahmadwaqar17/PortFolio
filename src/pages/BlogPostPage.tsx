import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa';
import Section from '../components/ui/Section';
import { blogPosts } from '../data';
import { media } from '../styles/media';
import ReactMarkdown from 'react-markdown';

const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const PostHeader = styled.div`
  margin-bottom: 3rem;
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  
  ${media.up('md')} {
    font-size: 3rem;
  }
`;

const PostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary-color);
  font-size: 0.875rem;
  
  svg {
    color: var(--primary-color);
  }
`;

const PostImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow: var(--box-shadow);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostContent = styled.div`
  margin-bottom: 3rem;
  font-size: 1.125rem;
  line-height: 1.8;
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  blockquote {
    border-left: 4px solid var(--primary-color);
    padding-left: 1.5rem;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 1.5rem;
    font-style: italic;
    color: var(--secondary-color);
  }
  
  code {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: monospace;
    font-size: 0.9em;
  }
  
  pre {
    background-color: #f6f8fa;
    padding: 1rem;
    border-radius: var(--border-radius);
    overflow-x: auto;
    margin-bottom: 1.5rem;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
  
  img {
    max-width: 100%;
    border-radius: var(--border-radius);
    margin-bottom: 1.5rem;
  }
  
  a {
    color: var(--primary-color);
    text-decoration: underline;
    
    &:hover {
      color: var(--accent-color);
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;
`;

const Tag = styled(Link)`
  background-color: rgba(0, 112, 243, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const AuthorCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  background-color: rgba(0, 0, 0, 0.02);
  margin-bottom: 3rem;
`;

const AuthorAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const AuthorBio = styled.p`
  color: var(--secondary-color);
  font-size: 0.875rem;
  line-height: 1.6;
`;

const RelatedPosts = styled.div`
  margin-top: 4rem;
`;

const RelatedTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  ${media.up('md')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const RelatedPost = styled(Link)`
  display: flex;
  gap: 1rem;
  
  &:hover h4 {
    color: var(--primary-color);
  }
`;

const RelatedPostImage = styled.div`
  width: 100px;
  height: 70px;
  border-radius: var(--border-radius);
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RelatedPostInfo = styled.div`
  flex: 1;
`;

const RelatedPostTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  transition: var(--transition);
`;

const RelatedPostMeta = styled.div`
  font-size: 0.75rem;
  color: var(--secondary-color);
`;

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState(blogPosts.find(p => p.id === id));
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }
    
    // Find related posts based on category and tags
    const related = blogPosts
      .filter(p => p.id !== id && (
        p.category === post.category || 
        p.tags.some(tag => post.tags.includes(tag))
      ))
      .slice(0, 2);
    
    setRelatedPosts(related);
  }, [id, post, navigate]);
  
  if (!post) {
    return null;
  }
  
  return (
    <Section background="light">
      <PostContainer>
        <BackButton to="/blog">
          <FaArrowLeft /> Back to Blog
        </BackButton>
        
        <PostHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PostTitle>{post.title}</PostTitle>
            
            <PostMeta>
              <MetaItem>
                <FaCalendarAlt />
                <span>{post.date}</span>
              </MetaItem>
              
              <MetaItem>
                <FaClock />
                <span>{post.readTime}</span>
              </MetaItem>
              
              <MetaItem>
                <FaTag />
                <span>{post.category}</span>
              </MetaItem>
            </PostMeta>
          </motion.div>
        </PostHeader>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PostImage>
            <img src={post.image} alt={post.title} />
          </PostImage>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <PostContent>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </PostContent>
          
          <TagsContainer>
            {post.tags.map(tag => (
              <Tag key={tag} to={`/blog?tag=${tag}`}>
                {tag}
              </Tag>
            ))}
          </TagsContainer>
          
          <AuthorCard>
            <AuthorAvatar>
              <img src={post.author.avatar} alt={post.author.name} />
            </AuthorAvatar>
            
            <AuthorInfo>
              <AuthorName>{post.author.name}</AuthorName>
              <AuthorBio>{post.author.bio}</AuthorBio>
            </AuthorInfo>
          </AuthorCard>
        </motion.div>
        
        {relatedPosts.length > 0 && (
          <RelatedPosts>
            <RelatedTitle>Related Articles</RelatedTitle>
            <RelatedGrid>
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <RelatedPost to={`/blog/${relatedPost.id}`}>
                    <RelatedPostImage>
                      <img src={relatedPost.image} alt={relatedPost.title} />
                    </RelatedPostImage>
                    
                    <RelatedPostInfo>
                      <RelatedPostTitle>{relatedPost.title}</RelatedPostTitle>
                      <RelatedPostMeta>{relatedPost.date} · {relatedPost.readTime}</RelatedPostMeta>
                    </RelatedPostInfo>
                  </RelatedPost>
                </motion.div>
              ))}
            </RelatedGrid>
          </RelatedPosts>
        )}
      </PostContainer>
    </Section>
  );
};

export default BlogPostPage;
