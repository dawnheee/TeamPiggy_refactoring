import styled from "styled-components";
import theme from "Styles/theme";
function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  const buttonClick = (e, i) => {
    e.preventDefault();
    setPage(i + 1);
  };

  const prevClick = (e, i) => {
    e.preventDefault();
    setPage(page - i);
  };

  const nextClick = (e, i) => {
    e.preventDefault();
    setPage(page + i);
  };

  return (
    <Nav>
      <Button onClick={(e) => prevClick(e, 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={(e) => buttonClick(e, i)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={(e) => nextClick(e, 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  gap: 4px;
  margin-bottom: 1vh;
  @media ${({ theme }) => theme.desktop} {
    margin-bottom: 30px;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 8px;
  margin: 0;
  background: #cbcbeb;
  color: white;
  font-size: 10px;

  &:hover {
    background: rgba(101, 146, 236, 0.6);
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: skyblue;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
