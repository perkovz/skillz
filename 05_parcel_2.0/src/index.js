import './critical-scss/main.scss';
import Breadcrumb from './components/breadcrumb/breadcrumb';
import Button from './components/buttons/buttons';
import Card from './components/card/card';

const root = document.getElementById('root');
root.innerHTML = `
  <div class="container">
    ${Breadcrumb()}
    ${Button()}
    ${Card()}
  </div>
`