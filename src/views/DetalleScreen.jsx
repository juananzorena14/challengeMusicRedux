import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useMusicStore from '../zustand/music-zustand';
import { Card } from 'react-bootstrap';

const DetalleScreen = () => {

  const musica = useMusicStore((state) => state.musica);
  const loading = useMusicStore((state) => state.loading);
  const error = useMusicStore((state) => state.error);
  const getDetalle = useMusicStore((state) => state.getDetalle);
  const detalle = useMusicStore((state) => state.detalle);
  

  const {id} = useParams()

  useEffect(() => {
    getDetalle(id);
  }, []);

  console.log(detalle);

  return (
    <>

    {detalle.map((cancion) => (
        
      <Card style={{ width: '18rem' }} key={cancion.id}>
      <Card.Img variant="top" src={cancion.album.cover_medium} />
      <Card.Body>
        <Card.Title>{cancion.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <audio controls style={{width:"15rem"}}>
      <source src={cancion.preview} type="audio/mp3"/>
      </audio>
      </Card.Body>
    </Card>

    ))}
    </>
  )
  
}

export default DetalleScreen