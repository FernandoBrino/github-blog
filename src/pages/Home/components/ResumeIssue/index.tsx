import { useNavigate } from 'react-router-dom'
import { Content, Header, ResumeIssueContainer } from './styles'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IssueProps {
  title: string
  body: string
  number: number
  created_at: string
  repository_url: string
}

interface ResumeIssueProps {
  issue: IssueProps
}

export function ResumeIssue({ issue }: ResumeIssueProps) {
  const navigate = useNavigate()

  const pastTime = formatDistance(new Date(issue.created_at), new Date(), {
    locale: ptBR,
  })

  const repository = issue.repository_url.split('/')[5]

  function handleLookCompletePost() {
    navigate(`/Post/${repository}/${issue.number}`)
  }

  return (
    <ResumeIssueContainer onClick={handleLookCompletePost}>
      <Header>
        <h1>{issue.title}</h1>
        <p>Há {pastTime}</p>
      </Header>

      <Content>{issue.body}</Content>
    </ResumeIssueContainer>
  )
}
