import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$primary500',
  borderRadius: '$md',
  padding: '$4',
})

export const App = () => <Button>Hello World</Button>
