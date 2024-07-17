import React, { useEffect } from 'react'
import useMusicStore from '../zustand/music-zustand';
import { Link } from 'react-router-dom';
import { Card, Container, Row } from 'react-bootstrap';

const MainScreen = () => {

  const musica = useMusicStore((state) => state.musica);
  const loading = useMusicStore((state) => state.loading);
  const error = useMusicStore((state) => state.error);
  const getMusica = useMusicStore((state) => state.getMusica);

  useEffect(() => {
    getMusica();
  }, [getMusica]);

  console.log(musica);



  return (
    <Container> 
      <Row className='mt-3'>
        <h2>Streaming de Musica</h2>
      </Row>
      <Row className='d-flex flex-row flex-wrap'>
        {musica.length > 0 && (
          <Row>
            {musica.map((artista) => ( 
              <Link 
                key={artista.id}
                to={`detalle/${artista.id}`}
                className='card w-25 m-3'>
                <Card.Img src={artista.picture_medium}/>
                <Card.Body>{artista.name}</Card.Body> 
              </Link>
            ))}
          </Row>
        )}
      </Row>
    </Container>
  )
}

export default MainScreen