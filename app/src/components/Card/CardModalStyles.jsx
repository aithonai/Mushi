import styled from "styled-components"
import * as theme from "../Theme"
import { UilMultiply } from "@iconscout/react-unicons"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e7e7e7;
  padding: 0 1rem;
  max-height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #efefef;
    border-radius: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.8rem;
    background: #dedede;  
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #999;  
  }
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 2rem);
  height: 1.5rem;
  margin: 0 1rem;
  padding: 1rem 0;
`

export const CloseButton = styled(UilMultiply)` 
  align-self: flex-end;
  cursor: pointer;
`

export const Header = styled.header`
  font-size: 1.15rem;
  font-weight: ${theme.font.weight.bold};
`

export const ImageContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: flex-start;
  grid-gap: 0.3rem;
  padding-bottom: 0.5rem;
  ${props =>
    props.imagesLength > 1
      ? "grid-template-columns: 1fr 1fr;"
      : "grid-template-columns: 1fr;"}
`

export const Image = styled.img`
  max-height: 20rem;
  width: 100%;
  border-radius: 0.4rem;
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.15);
  object-fit: cover;
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
  font-size: 0.9rem;
  font-weight: ${theme.font.weight.medium};
  color: rgb(70, 70, 70);
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 10rem;
  width: 14rem;
  margin: 1rem 1rem;
`

export const Informations = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Info = styled.div`
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  color: rgb(58, 58, 58);
  letter-spacing: 0.03rem;
  border-radius: 0.5rem;
  padding: 0.6rem 0.3rem;
`

export const Title = styled.span`
  display: flex;
  font-size: 0.8rem;
`

export const Content = styled.span`
  font-weight: ${theme.font.weight.bold};
`
