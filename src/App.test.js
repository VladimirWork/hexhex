import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from './App'

test('renders app', () => {
  render(<App />)

  const tree = renderer
    .create(<App />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
