import useData from "./useData";


interface Genres {
    name: string;
    id: number;
    image_background: string;
}

const useGenres = () => useData<Genres>('/genres')

export default useGenres