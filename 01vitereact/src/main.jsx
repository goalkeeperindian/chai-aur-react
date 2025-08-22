import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App | Chai Lelo Chai Garam Garam Chai.</h1>
    </div>
  )
}
/* 
const ReactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google.'
} */

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(

  < App />

)
