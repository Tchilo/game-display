import usePlatform from "./usePlatforms"

const usePlatformhook = (id?: number) => {
    const { data: platforms } = usePlatform()
    
    return platforms.results.find((g) => g.id === id)

}

export default usePlatformhook
