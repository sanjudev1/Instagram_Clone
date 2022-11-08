/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'

import {DarkLightModeContext} from 'react-light-dark-mode'

function Theme() {
  const {lightMode, toggleLightDarkMode} = useContext(DarkLightModeContext)

  const toggleMode = () => {
    toggleLightDarkMode()
  }

  return (
    <div>
      <button type="button" onClick={toggleMode} className="buttonColor">
        {lightMode ? 'Light Mode Active' : 'Dark Mode Active'}
        <h1>Theme</h1>
      </button>
    </div>
  )
}

export default Theme
