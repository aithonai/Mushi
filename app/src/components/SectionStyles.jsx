import styled from "styled-components"

export const MySection = styled.section`
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  padding: 1.8rem 1.5rem;
  border-radius: 0.7rem;
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 2rem;

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    padding: 1rem 1rem;
    width: calc(100% - 1.5rem * 2);
  }
`

export const NoProductsMessage = styled.p`
  text-align: center;
`
