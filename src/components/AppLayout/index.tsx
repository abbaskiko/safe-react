import React from 'react'
import styled from 'styled-components'
import { ListItemType } from 'src/components/List'

import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { screenXs } from 'src/theme/variables'
import { Button, Card, Icon, Text } from '@gnosis.pm/safe-react-components'
import Phone from './MobileStart/assets/phone@2x.png'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.background};

  /* @media (max-width: ${screenXs}px) {
    background-color: ${({ theme }) => theme.colors.primary};
    position: fixed;
    height: 100vh;
    width: 100vw;
  } */
`

const HeaderWrapper = styled.nav`
  height: 54px;
  width: 100%;
  z-index: 1;

  background-color: white;
  box-shadow: 0 0 4px 0 rgba(212, 212, 211, 0.59);
`

const BodyWrapper = styled.div`
  height: calc(100% - 54px);
  width: 100%;
  display: flex;
  flex-direction: row;
`

const SidebarWrapper = styled.aside`
  height: 100%;
  width: 200px;
  display: flex;
  flex-direction: column;
  z-index: 1;

  padding: 8px 8px 0 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 2px solid ${({ theme }) => theme.colors.separator};
`

const ContentWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: auto;

  padding: 0 16px;

  > :nth-child(1) {
    flex-grow: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  > :nth-child(2) {
    width: 100%;
    height: 59px;
  }
`
const ModalApp = styled.div`
  display: none;

  @media (max-width: ${screenXs}px) {
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    width: 100vw;
    height: 260px;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 2147483004; /* on top of Intercom Button*/
    padding: 20px 16px 0 16px;
  }
`

const StyledCard = styled(Card)`
  background-color: #fdfdfd;
  /*   width: 45vw; */
  min-width: 245px;
  height: 220px;
  padding: 24px 58px 24px 24px;
  box-sizing: border-box;
  box-shadow: none;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  @media (max-width: 300px) {
    padding: 16px;
    min-width: 215px;
  }
`
/* const StyledButton = styled(Button)`
  background: none;
  border: none;
  padding: 5px;
  width: 26px;
  height: 26px;

  span {
    margin-right: 0;
  }

  :focus {
    outline: none;
  }

  :hover {
    background: ${({ theme }) => theme.colors.separator};
    border-radius: 16px;
  }
`; */

const StyledImg = styled.img`
  margin: 24px -81px 0 -58px;
  z-index: 1;
  width: 46%;
  height: auto;

  @media (max-width: 300px) {
    display: none;
  }
`
const StyledCloseBtn = styled(Icon)`
  margin: 0 34px;

  @media (max-width: 300px) {
    margin: 0 24px 0 0;
  }
`

type Props = {
  sidebarItems: ListItemType[]
  safeAddress: string | undefined
  safeName: string | undefined
  balance: string | undefined
  granted: boolean
  onToggleSafeList: () => void
  onReceiveClick: () => void
  onNewTransactionClick: () => void
}

const Layout: React.FC<Props> = ({
  balance,
  safeAddress,
  safeName,
  granted,
  onToggleSafeList,
  onReceiveClick,
  onNewTransactionClick,
  children,
  sidebarItems,
}): React.ReactElement => (
  <Container>
    <HeaderWrapper>
      <Header />
    </HeaderWrapper>
    <BodyWrapper>
      <SidebarWrapper>
        <Sidebar
          items={sidebarItems}
          safeAddress={safeAddress}
          safeName={safeName}
          balance={balance}
          granted={granted}
          onToggleSafeList={onToggleSafeList}
          onReceiveClick={onReceiveClick}
          onNewTransactionClick={onNewTransactionClick}
        />
      </SidebarWrapper>
      <ContentWrapper>
        <div>{children}</div>
        <Footer />
      </ContentWrapper>
    </BodyWrapper>
    <ModalApp>
      <StyledCard>
        <Text size="lg">The Safe Multisig web app is not optimized for mobile.</Text>
        <Text size="lg">Get the mobile app for a better experience.</Text>
        <Button size="md" color="primary" variant="contained">
          Get the App
        </Button>
      </StyledCard>

      <StyledImg src={Phone} alt="Phone" />
      <StyledCloseBtn size="md" type="cross" />
    </ModalApp>
  </Container>
)

export default Layout
