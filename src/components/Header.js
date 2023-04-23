import React from 'react'
// import ReactDOM from 'react-dom'

const welcome = 'Welcome to Uki'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const firstName = 'John'
const lastName = 'perera'
const date = 'Jan 3,2023'
const numOne = 3
const numTwo = 2
const buttonStyles = {
    padding: '10px 20px',
    background: 'rgb(0, 255, 0)',
    border: 'none',
    borderRadius: 5,
  }
  const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

// JSX element, header
const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Instructor: {firstName} {lastName}
        </p>
        <small>Date: {date}</small>
    <p>
      {numOne} + {numTwo} = {numOne - numTwo}
    </p>
    <button style={buttonStyles}> action </button>
    <div>{hexaColor()}</div>

      </div>
    </header>
  )

}
export default Header

// const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
// ReactDOM.render(<Header />)
