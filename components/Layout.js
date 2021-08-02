import styled from "styled-components";
import Link from "next/link";

const HeaderStyles = styled.header`
  // TODO: make this look better
  background: blue;
  nav {
    display: flex;
    width: 100%;
    height: 100%;
    color: white;
    justify-content: space-around;
    align-items: center;
    padding: 3rem;

    a {
      color: inherit;
    }
  }
`;

const MainContent = styled.main`
  max-width: 960px;
  margin: 0 auto;
`;

// TODO: add footer styles
const FooterStyles = styled.footer``;

export default function Layout(props) {
  return (
    <>
      <HeaderStyles>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </HeaderStyles>
      <MainContent>{props.children}</MainContent>
      <footer>
        <p>(c) Ruderverein Olympia Wien 2021</p>{" "}
      </footer>
    </>
  );
}
