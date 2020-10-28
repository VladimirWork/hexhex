import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from './App'

describe('renders app and matches snapshot', () => {

  test('renders app', () => {
    render(<App />)
  })

  test('matches snapshot', () => {
    const tree = renderer
      .create(<App />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
