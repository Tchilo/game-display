import genre from "../data/genre";

export interface Genres {
    name: string;
    id: number;
    image_background: string;
}

    
    const useGenres = () => ({ isLoading:null, data:genre, error:null })

export default useGenres