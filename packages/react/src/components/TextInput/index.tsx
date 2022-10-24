import { ComponentProps } from 'react'
import * as S from './styles'

export type TextInputProps = {
  prefix?: string
} & ComponentProps<typeof S.Input>

export const TextInput = ({ prefix, ...props }: TextInputProps) => (
  <S.Wrapper>
    {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
    <S.Input {...props} />
  </S.Wrapper>
)
