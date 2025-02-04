import { useEffect, useState } from "react"
import { BsMoonFill, BsSunFill } from "react-icons/bs"

import React from "react"

const themes = {
  winter: "winter",
  synthwave: "synthwave",
}

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.winter
}

// console.log(localStorage.getItem("theme"))

const ToggleComponent = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage())

  const handleTheme = () => {
    const { synthwave, winter } = themes
    const newTheme = theme === winter ? synthwave : winter

    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className='mr-4'>
      <label className='swap swap-rotate '>
        {/* this hidden checkbox controls the state */}
        <input type='checkbox' onChange={handleTheme} />

        {/* sun icon */}
        <BsSunFill className='swap-on h-4 w-4' />

        {/* moon icon */}
        <BsMoonFill className='swap-off h-4 w-4' />
      </label>
    </div>
  )
}

export default ToggleComponent
