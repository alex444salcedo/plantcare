import { useEffect, useState } from 'react';
import { NoticiasContainer, Title, NewsList, NewsItem, NewsTitle, NewsDescription, Button } from './Noticias.styles';

export default function Noticias() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Aquí podrías hacer una llamada a tu backend para obtener las noticias
    const mockNews = [
      { id: 1, title: 'Cómo cuidar tus plantas en invierno', description: 'Consejos prácticos para el cuidado de las plantas en invierno.' },
      { id: 2, title: 'Las mejores plantas para tu oficina', description: 'Descubre las plantas que más se adaptan a ambientes de oficina.' },
      { id: 3, title: 'Plantas de interior que purifican el aire', description: 'Conoce las plantas que ayudan a mejorar la calidad del aire en tu hogar.' },
    ];
    setNews(mockNews);
  }, []);

  return (
    <NoticiasContainer>
      <Title>Noticias sobre Plantas</Title>
      <NewsList>
        {news.map((article) => (
          <NewsItem key={article.id}>
            <NewsTitle>{article.title}</NewsTitle>
            <NewsDescription>{article.description}</NewsDescription>
            <Button onClick={() => alert('Ver más...')}>Leer más</Button>
          </NewsItem>
        ))}
      </NewsList>
    </NoticiasContainer>
  );
}
