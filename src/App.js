import './App.css';
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { GiMeal } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiMeal /> 
        <Logo to={"/recipe"}>GourmetGuru</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size:2rem;
  font-weight: 400;
  font-family: 'Dancing Script', cursive;
  color:#ff724c;
`

const Nav= styled.div`
  padding: 4rem 0rem;
  display: flex;
  align-items:center;
  svg{
    font-size: 2rem;
    color:#ff724c;
  }
`
export default App;
