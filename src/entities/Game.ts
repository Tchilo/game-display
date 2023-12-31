import { Genres } from "./Genres";
import { Platform } from "./Platform";
import { Publisher } from "./Publishers";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;
    slug: string;
    description_raw: string;
    genres: Genres[]
    publishers:Publisher[]
}
