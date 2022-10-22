import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import * as S from './styles'

export type AvatarProps = {} & ComponentProps<typeof S.AvatarImage>

export const Avatar = (props: AvatarProps) => (
  <S.Wrapper>
    <S.AvatarImage {...props} />

    <S.AvatarFallback delayMs={600}>
      <User />
    </S.AvatarFallback>
  </S.Wrapper>
)
