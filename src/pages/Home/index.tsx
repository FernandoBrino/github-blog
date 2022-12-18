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
import { PublishingResume } from './components/PublishingResume'

export function Home() {
  return (
    <HomeContainer>
      <Profile>
        <Picture>
          <img
            src="https://images.unsplash.com/photo-1671318805052-deee86db6df3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </Picture>

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

        <PublishingList>
          <PublishingResume />
          <PublishingResume />
          <PublishingResume />
          <PublishingResume />
        </PublishingList>
      </Publishing>
    </HomeContainer>
  )
}
