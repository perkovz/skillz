import '/src/scripts/nav.js';
import '/src/scripts/button.js';
import Nav from './nav';
import Button from './button';

const root = document.getElementById('root');
root.innerHTML = `
  <div class="container">
    ${Nav()}
    ${Button()}
  </div>
`