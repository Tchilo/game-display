import useData from "./useData";


export interface Genres {
    name: string;
    id: number;
    image_background: string;
}

const useGenres = () => useData<Genres>('/genres')

export default useGenres