import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMusicStore from "../zustand/music-zustand";
import { Card, Carousel } from "react-bootstrap";

const DetalleScreen = () => {
  const musica = useMusicStore((state) => state.musica);
  const loading = useMusicStore((state) => state.loading);
  const error = useMusicStore((state) => state.error);
  const getDetalle = useMusicStore((state) => state.getDetalle);
  const detalle = useMusicStore((state) => state.detalle);

  const { id } = useParams();

  useEffect(() => {
    getDetalle(id);
  }, []);

  console.log(detalle);

  return (
      <div className="container-sing">
        {detalle.map((cancion) => (
          <div key={cancion.id} className="row-data">
            <img src={cancion.album.cover_small} />
            <p>{cancion.title}</p>
            <p className="text-muted">{cancion.album.title} </p>
            <audio controls>
              <source src={cancion.preview} type="audio/mp3" />
            </audio>
          </div>
        ))}
      </div>
  );
};

export default DetalleScreen;
