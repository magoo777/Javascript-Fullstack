import styled from 'styled-components';

const NavStyle = styled.nav`

nav {
  background-color: #eee;
}

nav ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 50px;
  max-width: 600px;
  margin: 0 auto;
  padding: 0;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  list-style-type: none;
  font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
}

nav ul li:not(:first-child) {
  cursor: pointer;
}

nav ul li:last-child {
  cursor: default;
}

.login_user {
  margin: 0;
}

.logout_user {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: lightgray;
  padding: 3px 10px;
  cursor: pointer;
}

.logout__btn {
  position: relative;
  top: 2px;
}
/*# sourceMappingURL=navigation.css.map */
`;

export default NavStyle