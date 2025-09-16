import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  max-width: 800px;
  background: ${({ theme }) => theme.card};
  border: 1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 250px;
  height: 180px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;


const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 12px;
`;

const Details = styled.div`
  margin-top: 10px;
`;

const Title = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 5px;
`;

const Date = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 8px;
`;

const Members = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const GithubButton = styled.a`
  margin-top: 15px;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  width: fit-content;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary_dark};
  }
`;

const ProjectCards = ({ project, setOpenModal }) => {
  const handleClick = (e) => {
    if (e.target.tagName === 'A') {
      e.stopPropagation();
    } else {
      setOpenModal({ state: true, project: project });
    }
  };

  return (
    <Card onClick={handleClick}>
      <Image src={project.image} />
      <Content>
        <Tags>
          {project.tags?.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        <Details>
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>
          <Description>{project.description}</Description>
        </Details>
        <Members>
          {project.member?.map((member, index) => (
            <Avatar key={index} src={member.img} />
          ))}
        </Members>
        <GithubButton
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          View on GitHub
        </GithubButton>
      </Content>
    </Card>
  );
};

export default ProjectCards;
