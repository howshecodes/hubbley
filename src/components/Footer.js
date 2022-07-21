import SocialIcons from "./SocialIcons"
import { Container } from "./styles/Container.styled"
import {Flex} from "./styles/Flex.styled"
import {StyledFooter} from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
        <Container>
            <img src="./images/logo_white.svg" alt="" />

            <Flex>
               <ul>
                    <li>
                        For a simple solution to all your problems. We are here for you.
                    </li>
                    <li>  +0-000-000-000</li>
                    <li>namuna@hubbley.com</li>
                </ul> 
                <ul>
                    <li>Hamro Bare</li>
                    <li>Hami k garchau</li>
                    <li>Dherai jaso sodhiyeka prasnaharu</li>
                </ul>

                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                <SocialIcons />

            </Flex>

            <p>&copy; 2022 Huddle.All rights reserved</p>
        </Container>
    </StyledFooter>
  )
}
