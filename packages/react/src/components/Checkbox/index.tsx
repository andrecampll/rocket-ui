import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'

import * as S from './styles'

export type CheckboxProps = {} & ComponentProps<typeof S.Wrapper>

export const Checkbox = (props: CheckboxProps) => (
  <S.Wrapper {...props}>
    <S.Indicator asChild>
      <Check weight="bold" />
    </S.Indicator>
  </S.Wrapper>
)
