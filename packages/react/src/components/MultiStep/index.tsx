import * as S from './styles'

export type MultiStepProps = {
  size: number
  currentStep?: number
}

export const MultiStep = ({ size, currentStep = 1 }: MultiStepProps) => (
  <S.Wrapper>
    <S.Label>
      Step {currentStep} of {size}
    </S.Label>

    <S.Steps css={{ '--steps-size': size }}>
      {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
        <S.Step key={step} active={currentStep >= step} />
      ))}
    </S.Steps>
  </S.Wrapper>
)
