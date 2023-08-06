import useGenres from "../hooks/useGenres"

const GenresList = () => {
    const { isLoading, data, error } = useGenres()
    console.log(data);
    
    return (
        <>
            {isLoading && <p>loading .....</p>}
            {error && <p>{ error}</p>}
        <ul>
                {data.map(gen => <li key={gen.id}>{ gen.name}</li>)} 
        </ul>
        </>
    )
}

export default GenresList
