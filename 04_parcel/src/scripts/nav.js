import '../styles/nav.scss';

const Nav = () => {
  const template = `
    <nav class="nav">
      <ul class="nav_ul">
        <li class="nav_li"><a href="/" class="nav_a">One</a></li>
        <li class="nav_li"><a href="/" class="nav_a">Two</a></li>
        <li class="nav_li"><a href="/" class="nav_a">Three</a></li>
      </ul>
    </nav>
  `;

  return template;
}

export default Nav;