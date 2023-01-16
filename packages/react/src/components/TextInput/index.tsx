import { ComponentProps, forwardRef } from 'react'

import * as S from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof S.Input>, 'size'> {
  prefix?: string
  size?: ComponentProps<typeof S.Wrapper>['size']
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, size, ...props }: TextInputProps, ref) => {
    return (
      <S.Wrapper size={size}>
        {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
        <S.Input ref={ref} {...props} />
      </S.Wrapper>
    )
  },
)

TextInput.displayName = 'TextInput'
