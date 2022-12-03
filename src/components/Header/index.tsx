import { HeaderContainer } from './styles'
import backgroundCover from '../../assets/backgroundCover.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={backgroundCover} alt="" />
    </HeaderContainer>
  )
}
