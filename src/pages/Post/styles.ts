import styled from 'styled-components'

export const PostContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  top: 20.8rem;
  left: calc(50% - 864px / 2);
  width: 86.4rem;
  padding-bottom: 10rem;
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 86.4rem;
  height: 16.8rem;
  padding: 3.2rem;
  border-radius: 10px;
  gap: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    position: relative;

    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;

    color: ${(props) => props.theme.blue};

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: ${(props) => props.theme['base-profile']};
      transform-origin: bottom center;
      transition: transform 0.25s ease-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom rigth left;
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }

    svg {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.8rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${(props) => props.theme['base-span']};

    svg {
      color: ${(props) => props.theme['base-label']};
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`

export const Info = styled.div`
  display: flex;
  gap: 3.2rem;
`

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${(props) => props.theme['base-text']};

  a {
    color: ${(props) => props.theme.blue};
  }
`
