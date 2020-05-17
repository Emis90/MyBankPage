import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import '@testing-library/jest-dom'


it('renders a div Root component', () => {
   const div = document.createElement('div')
   ReactDOM.render(<Root/>, div)
})
it('renders a button Root component', () => {
    const header = document.createElement('header')
    ReactDOM.render(<Root/>, header)
 })
