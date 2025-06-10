import styled from 'styled-components';

export const CommunityContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const PostItem = styled.li`
  background-color: #f0f0f0;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 8px 20px;
  background-color: #37472b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2d3a25;
  }
`;
