import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.2rem;
  position: absolute;
  top: 20.8rem;
  left: 28.8rem;
  color: white;
`

export const Profile = styled.div`
  display: flex;
  width: 86.4rem;
  height: 20.8rem;
  padding: 3.2rem 4rem;
  gap: 3.2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  > img {
    width: 14.8rem;
    border-radius: 8px;
  }
`

export const ProfileResume = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProfileBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  p {
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProfileTitle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2.4rem;
    font-weight: 700;

    color: ${(props) => props.theme['base-title']};
  }

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

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`

export const Publishing = styled.div``

export const PublishingSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;

    h1 {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 1.4rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    padding: 1.6rem;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme.blue};

      &::placeholder {
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`

export const PublishingList = styled.div``
