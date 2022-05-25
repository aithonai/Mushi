import styled from "styled-components"
import * as theme from "../Theme"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border-left: 1px solid #e7e7e7;
  padding: 0 1rem;
`

export const ImageContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: flex-start;
  grid-gap: 0.3rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  ${props =>
    props.imagesLength > 1
      ? "grid-template-columns: 1fr 1fr;"
      : "grid-template-columns: 1fr;"}
`

export const Image = styled.img`
  max-height: 20rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.15);
`
export const CardSection = styled.section`
  margin: 1rem 0;
`

export const SectionTitle = styled.span`
  color: rgb(52, 52, 52);
  font-size: 1.2rem;
  font-family: ${theme.font.primary};
  font-weight: ${theme.font.weight.bold};
`

export const Description = styled.p`
  max-width: 60ch;
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 8rem;
  margin: 1rem 2rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 1rem;
`

export const Title = styled.span`
  font-weight: ${theme.font.weight.bold};
`

export const Content = styled.span`
  padding-left: 1rem;
`
