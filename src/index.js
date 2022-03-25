import ReactDOM from 'react-dom';
import Root from "./screens/Root";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass);//add to library icon can be used throughout app

ReactDOM.render(<Root />, document.getElementById('root'));