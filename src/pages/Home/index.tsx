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
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Home() {
  return (
    <HomeContainer>
      <Profile>
        <img
          src="https://images.unsplash.com/photo-1671275423001-72a89d07c702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt=""
        />

        <ProfileResume>
          <ProfileBio>
            <ProfileTitle>
              <h1>Cameron Williamson</h1>
              <a href="#">
                Github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </ProfileTitle>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </ProfileBio>

          <ProfileInfo>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              cameronwll
            </span>

            <span>
              <FontAwesomeIcon icon={faBuilding} />
              Rocketseat
            </span>

            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              32 seguidores
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

        <PublishingList></PublishingList>
      </Publishing>
    </HomeContainer>
  )
}
