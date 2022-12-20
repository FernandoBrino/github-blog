import styled from 'styled-components'

export const ResumeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 41.6rem;
  height: 26rem;
  padding: 3.2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};
  border: 2px solid ${(props) => props.theme['base-background']};

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const Header = styled.header`
  display: flex;
  gap: 2rem;

  h1 {
    max-width: 70%;
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
    line-height: 2.5rem;
  }

  p {
    line-height: 2.5rem;
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const Content = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 5; /*define how many line you want to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme['base-text']};
`
