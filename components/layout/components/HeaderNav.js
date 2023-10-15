import styled, { createGlobalStyle } from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
  }
`;

const HeaderNav = () => {
  const Router = useRouter();

  return (
    <div>
      <GlobalStyles />
      <HeaderNavWrapper>
        <Link href={'/'}>
          <HeaderNavLinks active={Router.pathname == "/" ? "true" : "false"} >
            Campaigns
          </HeaderNavLinks>
        </Link>
        <Link href={'/createcampaign'}>
          <HeaderNavLinks active={Router.pathname == "/createcampaign" ? "true" : "false"} >
            Create Campaign
          </HeaderNavLinks>
        </Link>
        <Link href={'/dashboard'}>
          <HeaderNavLinks active={Router.pathname == "/dashboard" ? "true" : "false"} >
            Dashboard
          </HeaderNavLinks>
        </Link>
      </HeaderNavWrapper>
    </div>
  )
};

const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 6px;
  height: 50%;
  border-radius: 10px;
  `;

const HeaderNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.active ? props.theme.bgSubDiv : props.theme.bgDiv};
  height: 100%;
  font-family: 'Roboto';
  margin: 5px;
  border-radius: 10px;
  padding: 10px 10px 10px 10px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: small;
  text-decoration: none;
`;

export default HeaderNav;