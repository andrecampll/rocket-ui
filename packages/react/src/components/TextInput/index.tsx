import { ComponentProps } from 'react'
import * as S from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof S.Input>, 'size'> {
  prefix?: string
  size?: ComponentProps<typeof S.Wrapper>['size']
}

export const TextInput = ({ prefix, size, ...props }: TextInputProps) => (
  <S.Wrapper size={size}>
    {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
    <S.Input {...props} />
  </S.Wrapper>
)

TextInput.displayName = 'TextInput'
