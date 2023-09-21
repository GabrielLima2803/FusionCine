import { onMounted, ref } from "vue";
import axios from 'axios'

const movies = ref([]);
const tvs = ref([]);

onMounted(async () => {
    try {
      let movieResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=pt-BR&page=1&sort_by=popularity.desc`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmExY2YzZWUxZjA0MzkyMGMxN2I4Y2ZmMjZiOTVlOCIsInN1YiI6IjY0ZmYxNTcxMmRmZmQ4MDBhZGI2ZjlhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9mkPip-VR_aTvrIw61NobRPhAcfE1KiG-yzIfX6COaM'
        }
      });
      
      let tvResponse = await axios.get('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=true&language=pt-BR&page=1&sort_by=popularity.desc', {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmExY2YzZWUxZjA0MzkyMGMxN2I4Y2ZmMjZiOTVlOCIsInN1YiI6IjY0ZmYxNTcxMmRmZmQ4MDBhZGI2ZjlhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9mkPip-VR_aTvrIw61NobRPhAcfE1KiG-yzIfX6COaM'
        }
      });
  
      movies.value = movieResponse.data.results;
      tvs.value = tvResponse.data.results;
    } catch (error) {
      console.error('Erro ao buscar os dados da API:', error);
    }
  });

export {movies, tvs}