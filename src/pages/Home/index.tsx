import {
  HomeContainer,
  ProfileBio,
  Profile,
  ProfileTitle,
  Publishing,
  PublishingList,
  PublishingSearch,
  ProfileInfo,
  ProfileResume,
  Picture,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ResumeIssue } from './components/ResumeIssue'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface GithubUserProps {
  login: string
  name: string
  bio: string
  followers: number
  company: string
  avatar_url: string
  html_url: string
}

interface IssueProps {
  id: number
  title: string
  body: string
  comments: number
  number: number
  created_at: string
  repository_url: string
}

interface UserIssuesProps {
  items: IssueProps[]
}

export function Home() {
  const [user, setUser] = useState<GithubUserProps>({} as GithubUserProps)
  const [issues, setIssues] = useState<IssueProps[]>([])

  useEffect(() => {
    api
      .get<GithubUserProps>('https://api.github.com/users/FernandoBrino')
      .then((response) => setUser(response.data))

    api
      .get<UserIssuesProps>('search/issues?q=user:FernandoBrino')
      .then((response) => setIssues(response.data.items))
  }, [])

  return (
    <HomeContainer>
      <Profile>
        <Picture>
          <img src={user.avatar_url} alt="" />
        </Picture>

        <ProfileResume>
          <ProfileBio>
            <ProfileTitle>
              <h1>{user.name}</h1>
              <a href={user.html_url}>
                Github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </ProfileTitle>
            <p>{user.bio}</p>
          </ProfileBio>

          <ProfileInfo>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {user.login}
            </span>

            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {user.company}
            </span>

            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {user.followers} seguidores
            </span>
          </ProfileInfo>
        </ProfileResume>
      </Profile>

      <Publishing>
        <PublishingSearch>
          <span>
            <h1>Publicações</h1>
            <p>{issues.length} publicações</p>
          </span>
          <input type="text" placeholder="Buscar conteúdo" />
        </PublishingSearch>

        <PublishingList>
          {issues.map((issue) => (
            <ResumeIssue key={issue.id} issue={issue} />
          ))}
        </PublishingList>
      </Publishing>
    </HomeContainer>
  )
}
