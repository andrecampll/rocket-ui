import '../styles/tokens-grid.css'

type Props = {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export const TokensGrid = ({ tokens, hasRemValue = false }: Props) => (
  <table className="tokens-grid">
    <thead>
      <tr>
        <th>Name</th>
        <th>Value</th>
        {hasRemValue && <th>Pixels</th>}
      </tr>
    </thead>

    <tbody>
      {Object.entries(tokens).map(([key, value]) => {
        return (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
          </tr>
        )
      })}
    </tbody>
  </table>
)
