import { NavLink } from 'react-router-dom'
import {
  Actions,
  Info,
  InfoWrapper,
  PostBody,
  PostContainer,
  PostInfo,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Post() {
  return (
    <PostContainer>
      <PostInfo>
        <Actions>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </NavLink>
          <NavLink to="#">
            Ver no Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </Actions>

        <InfoWrapper>
          <h1>JavaScript data types and data structures</h1>
          <Info>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              cameronwll
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              Há 1 dia
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} /> 5 comentários
            </span>
          </Info>
        </InfoWrapper>
      </PostInfo>

      <PostBody></PostBody>
    </PostContainer>
  )
}
