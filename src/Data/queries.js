import { gql } from '@apollo/client';

//Query GraphQL recibiendo parámetros
export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $nameFilter: String) {
    characters(page: $page, filter: { name: $nameFilter }) {
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
