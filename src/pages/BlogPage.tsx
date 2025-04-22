import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/ui/Section';
import BlogCard from '../components/ui/BlogCard';
import { blogPosts } from '../data';
import { media } from '../styles/media';

const BlogContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  background-color: ${({ $active }) => ($active ? 'var(--primary-color)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'white' : 'var(--text-color)')};
  border: 2px solid ${({ $active }) => ($active ? 'var(--primary-color)' : 'var(--border-color)')};
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: ${({ $active }) => ($active ? 'var(--primary-color)' : 'rgba(0, 0, 0, 0.05)')};
  }
`;

const BlogGrid = styled.div`
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

const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  border: 2px solid var(--border-color);
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.1);
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--secondary-color);
  font-size: 1.25rem;
  width: 100%;
`;

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  // Extract unique categories from all blog posts
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  useEffect(() => {
    let filtered = blogPosts;
    
    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredPosts(filtered);
  }, [activeCategory, searchQuery]);
  
  return (
    <Section title="Blog" subtitle="Read my latest thoughts on web development, design, and technology.">
      <BlogContainer>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>
        
        <FilterContainer>
          {categories.map(category => (
            <FilterButton
              key={category}
              $active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <AnimatePresence>
          {filteredPosts.length > 0 ? (
            <BlogGrid>
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                >
                  <BlogCard
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    image={post.image}
                    date={post.date}
                    category={post.category}
                    readTime={post.readTime}
                  />
                </motion.div>
              ))}
            </BlogGrid>
          ) : (
            <NoResults>
              No articles found matching your search criteria.
            </NoResults>
          )}
        </AnimatePresence>
      </BlogContainer>
    </Section>
  );
};

export default BlogPage;
