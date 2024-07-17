import React, { useEffect } from 'react'
import useMusicStore from '../zustand/music-zustand';
import { Link } from 'react-router-dom';

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
    <div>
    <div>Streaming de Musica</div>
    {musica.length > 0 && (
      <ul>
        {musica.map((artista) => (
          
          <Link 
          key={artista.id}
          to={`detalle/${artista.id}`}
          className='btn btn-success me-4'>{artista.name} </Link>
        ))}
      </ul>
    )}
    
    </div>
  )
}

export default MainScreen