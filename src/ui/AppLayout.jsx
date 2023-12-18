import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
const StyedAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow: hidden;
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
  overflow-x: auto;
`;

const Contaner = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function AppLayout() {
  return (
    <StyedAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Contaner>
          <Outlet />
        </Contaner>
      </Main>
    </StyedAppLayout>
  );
}

export default AppLayout;
