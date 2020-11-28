import React from 'react';
import ThemeContext from './ThemeContext';
import {useContext} from 'react';


function HeaderButton() {

const theme = useContext(ThemeContext);

  return (
    <div>
      <button style={theme}> Press me </button>
    </div>
  );
}


export default HeaderButton;