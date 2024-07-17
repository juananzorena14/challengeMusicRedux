import { useEffect } from "react";
import useMusicStore from "../zustand/music-zustand";
import { Link } from "react-router-dom";
import '../index.css'

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
    <section className="section-artist container-md">
      <h2>Streaming de Musica</h2>
      <div className="container-artist">
        {musica.length > 0 &&
          musica.map((artista) => (
            <Link className="card-artist"
            key={artista.id}
            to={`detalle/${artista.id}`}
          >
            <img src={artista.picture_medium} className='rounded-circle'/>
            <h4>{artista.name}</h4>
          </Link>
          ))}
      </div>
    </section>
  );
};

export default MainScreen;
