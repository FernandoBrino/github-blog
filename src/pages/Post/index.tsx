import { NavLink, useParams } from 'react-router-dom'
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
import { useEffect, useState } from 'react'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { api } from '../../lib/axios'

interface IssueProps {
  title: string
  comments: number
  created_at: string
  html_url: string
  body: string
  user: {
    login: string
  }
}

export function Post() {
  const { repo, issueNumber } = useParams()
  const [issue, setIssue] = useState<IssueProps>()

  useEffect(() => {
    api
      .get<IssueProps>(`/repos/FernandoBrino/${repo}/issues/${issueNumber}`)
      .then((response) => setIssue(response.data))
  }, [repo, issueNumber])

  const pastTime = formatDistance(
    new Date(issue?.created_at ?? new Date()),
    new Date(),
    {
      locale: ptBR,
    },
  )

  return (
    <PostContainer>
      <PostInfo>
        <Actions>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </NavLink>
          <a href={issue?.html_url}>
            Ver no Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Actions>

        <InfoWrapper>
          <h1>{issue?.title}</h1>
          <Info>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {issue?.user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              Há {pastTime}
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} /> {issue?.comments} comentários
            </span>
          </Info>
        </InfoWrapper>
      </PostInfo>

      <PostBody>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {issue?.body ?? ''}
        </ReactMarkdown>
      </PostBody>
    </PostContainer>
  )
}
