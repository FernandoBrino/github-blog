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
import { ResumeCard } from './components/ResumeCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface GithubUser {
  login: string
  name: string
  bio: string
  followers: number
  company: string
  avatar_url: string
  html_url: string
}

export function Home() {
  const [user, setUser] = useState<GithubUser>({} as GithubUser)

  useEffect(() => {
    axios
      .get<GithubUser>(' https://api.github.com/users/FernandoBrino')
      .then((response) => setUser(response.data))
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
            <p>6 publicações</p>
          </span>
          <input type="text" placeholder="Buscar conteúdo" />
        </PublishingSearch>

        <PublishingList>
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
        </PublishingList>
      </Publishing>
    </HomeContainer>
  )
}
