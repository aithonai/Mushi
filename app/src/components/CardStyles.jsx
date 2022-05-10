import styled from "styled-components"
import * as theme from "./Theme"

export const NewCard = styled.div`
	width: 100%;
  max-width: 28rem;
  height: 6rem;
  border: 0px solid transparent;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  background-color: ${theme.color.white};
  font-family: ${theme.font.primary};
  color: #303030;
  cursor: pointer;
  text-align: left;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s ease;
`

export const Thumbnail = styled.div`
	width: 30%;
  background-color: ${theme.color.white};

  img {
    width: 100%;
    height: 100%;
    margin: auto auto;
    object-fit: cover;
  }
`

export const Information = styled.div`
	width: 70%;
	display: flex;
  flex-direction: column;
  padding: 0.4rem;
  max-width: calc(70% - 0.5rem*2);
  background-color: rgba(255, 255, 255, 0.5);
`

export const Title = styled.span`
	font-size: 1rem;
  font-weight: bold;
  display: -webkit-box;
  color: #555;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`

export const Description = styled.span`
	max-width: 15rem;
  font-size: 0.8rem;
  line-height: 1.1rem;
  font-weight: normal;
  color: gray;
  overflow: hidden;
`