import { gql } from "@apollo/client";

export const GRT_EPISODES = gql`querty getEpisodes($page: Int, $filter: FilterEpisode) {
episodes}(page: $page, filter: $filter)
    {
        info {
            pages
            next
            prev
            count
        }
        results {
            id
            name
            air_date
            episode
        }
    }
}`;
