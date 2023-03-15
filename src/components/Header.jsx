import { StyledHeader, StyledLogo, StyledNav, StyledImage  } from "./styles/Header.styled";
import { StyledButton } from "./styles/Button.styled"
import { StyledContainer } from "./styles/Container.styled";
import { StyledFlex } from "./styles/Flex.styled"

export default function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNav>
          <StyledLogo src='./images/logo.svg' alt='' />
          <StyledButton>Try It Free</StyledButton>
        </StyledNav>
        <StyledFlex>
          <div>
            <h1>
              Build the community fans will love
            </h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <StyledButton bg='#ff0099' color='#fff'>
              Get started for free
            </StyledButton>
          </div>
          <StyledImage src="./images/illustration-mockups.svg" alt="" />
        </StyledFlex>
      </StyledContainer>
    </StyledHeader>
  );
}
