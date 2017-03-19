require('../css/style.css');

import {render} from 'react-dom';
import React from 'react';
import Hello from './hello';

render(<Hello/>, document.getElementById("content"));
