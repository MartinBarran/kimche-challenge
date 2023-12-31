import { gql } from '@apollo/client';

//Query GraphQL para traer info de personajes
export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $searchedName: String, $filteredGender: String, $filteredSpecies: String, $filteredStatus: String) {
    characters(page: $page, filter: { name: $searchedName, gender: $filteredGender, species: $filteredSpecies, status: $filteredStatus  }) {
      info {
        pages
      }
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

//$filteredSpecies: String, $filteredStatus: String