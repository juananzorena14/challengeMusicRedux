import axios from "axios";
import { create } from "zustand";

const useMusicStore = create((set) => ({
  musica: [],
  loading: false,
  error: null,
  detalle: [],

  getMusica: async() => {
    set({loading:true, error:null});
      try {
        const resp = await axios.get("https://api.deezer.com/user/2529/artists");
        set({musica: resp.data.data, loading: false});
      } catch (error) {
        set ({error: error.message, loading:false})
      }
  },

  getDetalle: async(id) => {
    try {
        const resp = await axios.get(`https://api.deezer.com/artist/${id}/top?limit=5`);
        console.log(resp.data);
        set({detalle: resp.data.data, loading: false});
      } catch (error) {
        set ({error: error.message, loading:false})
      }
  }
}));

export default useMusicStore;