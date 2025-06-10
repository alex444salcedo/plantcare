import { useState } from 'react';
import { CommunityContainer, Title, PostList, PostItem, Button } from './Community.styles';

export default function Community() {
  const [posts, setPosts] = useState([
    { id: 1, content: '¡Mi cactus está creciendo muy bien!' },
    { id: 2, content: '¿Alguien tiene consejos para el riego de orquídeas?' },
    { id: 3, content: 'Acabo de plantar un helecho, ¿alguien más tiene uno?' },
  ]);

  return (
    <CommunityContainer>
      <Title>Comunidad PlantCare</Title>
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <p>{post.content}</p>
            <Button>Responder</Button>
          </PostItem>
        ))}
      </PostList>
    </CommunityContainer>
  );
}
