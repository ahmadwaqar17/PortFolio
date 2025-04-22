import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Section from '../components/ui/Section';
import { galleryItems } from '../data';
import { media } from '../styles/media';

const GalleryContainer = styled.div`
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

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  ${media.up('sm')} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${media.up('md')} {
    grid-template-columns: repeat(3, 1fr);
  }
  
  ${media.up('lg')} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  aspect-ratio: 1 / 1;
  cursor: pointer;
  
  &:hover {
    .overlay {
      opacity: 1;
    }
    
    img {
      transform: scale(1.05);
    }
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  text-align: center;
`;

const GalleryTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: white;
`;

const GalleryCategory = styled.span`
  font-size: 0.875rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const GalleryDescription = styled.p`
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const GalleryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  background-color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background-color: white;
    color: var(--primary-color);
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

const ModalImage = styled.div`
  width: 100%;
  height: 400px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  ${media.down('md')} {
    height: 300px;
  }
`;

const ModalInfo = styled.div`
  padding: 2rem;
  overflow-y: auto;
`;

const ModalTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`;

const ModalCategory = styled.div`
  font-size: 1rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const ModalDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const ModalDate = styled.div`
  font-size: 0.875rem;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
`;

const ModalButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: white;
  color: var(--text-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--secondary-color);
  font-size: 1.25rem;
  width: 100%;
  grid-column: 1 / -1;
`;

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  
  // Extract unique categories from gallery items
  const categories = ['all', ...new Set(galleryItems.map(item => item.category))];
  
  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);
  
  const openModal = (item: typeof galleryItems[0]) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <Section title="Gallery" subtitle="A visual showcase of my design and development work.">
      <GalleryContainer>
        <FilterContainer>
          {categories.map(category => (
            <FilterButton
              key={category}
              $active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <AnimatePresence>
          <GalleryGrid>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                >
                  <GalleryItem onClick={() => openModal(item)}>
                    <GalleryImage src={item.image} alt={item.title} />
                    <GalleryOverlay className="overlay">
                      <GalleryCategory>{item.category}</GalleryCategory>
                      <GalleryTitle>{item.title}</GalleryTitle>
                      <GalleryDescription>{item.description}</GalleryDescription>
                      <GalleryLink onClick={(e) => e.stopPropagation()}>
                        View Details
                      </GalleryLink>
                    </GalleryOverlay>
                  </GalleryItem>
                </motion.div>
              ))
            ) : (
              <NoResults>
                No gallery items found in this category.
              </NoResults>
            )}
          </GalleryGrid>
        </AnimatePresence>
        
        <AnimatePresence>
          {selectedItem && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <ModalContent
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ModalImage>
                  <img src={selectedItem.image} alt={selectedItem.title} />
                </ModalImage>
                <ModalInfo>
                  <ModalTitle>{selectedItem.title}</ModalTitle>
                  <ModalCategory>{selectedItem.category}</ModalCategory>
                  <ModalDescription>{selectedItem.description}</ModalDescription>
                  <ModalDate>Date: {selectedItem.date}</ModalDate>
                  
                  {selectedItem.link && (
                    <ModalButton href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                      View Project <FaExternalLinkAlt />
                    </ModalButton>
                  )}
                </ModalInfo>
                <CloseButton onClick={closeModal}>×</CloseButton>
              </ModalContent>
            </ModalOverlay>
          )}
        </AnimatePresence>
      </GalleryContainer>
    </Section>
  );
};

export default GalleryPage;
