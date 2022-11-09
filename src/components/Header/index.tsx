import { NavLink } from 'react-router-dom';
import { MapPin } from 'phosphor-react';

import coffeLogoImg from '../../assets/coffee-delivery-logo.svg'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeLogoImg} alt="" />
      </NavLink>

      <HeaderButtonsContainer>
        <HeaderButton variant="purple">
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </HeaderButton>
        <NavLink to="/completeOrder">
          <HeaderButton variant="yellow">
            1
          </HeaderButton>
        </NavLink>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}