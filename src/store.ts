import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools'

interface GameQuery {
    genreId?: number
    platformId?: number
    sortOrder?: string
    searchText?: string
}

interface GameQueryType {
    gamequery: GameQuery
    setGenre: (genreId: number) => void
    setPlatform: (platformId: number) => void
    setOrder: (order: string) => void
    setSearchText: (text: string) => void
}

const useGameQueryStore = create<GameQueryType>(set => ({
    gamequery: {},
    setGenre: (genreId) => set(store => ({ gamequery:{...store.gamequery,genreId} })),
    setPlatform: (platformId) => set(store => ({ gamequery: {...store.gamequery, platformId } })),
    setOrder: (sortOrder) => set(store => ({ gamequery: { ...store.gamequery, sortOrder } })),
    setSearchText: (searchText) => set(() => ({ gamequery: { searchText } })),
}))

if (process.env.NODE_ENV === 'development')
    mountStoreDevtool('GameQueryStore', useGameQueryStore)


export default useGameQueryStore