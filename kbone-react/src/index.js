import React from 'react'
import ReactDOM from 'react-dom'
import Todos from './components/Todos'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  ReactDOM.render(<Todos />, container)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
