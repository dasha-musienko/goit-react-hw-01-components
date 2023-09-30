import { Wrapper } from "components/Styles/CommonStyles"
import { THead, TableHeadTitle, TableBody, TableData } from "./TransactionsHistory.styled"


export const TransactionsHistory = ({transactions}) => {
  return (
    <Wrapper>
      <table>
        <THead>
          <tr>
            <TableHeadTitle>Type</TableHeadTitle>
            <TableHeadTitle>Amount</TableHeadTitle>
            <TableHeadTitle>Currency</TableHeadTitle>
          </tr>
        </THead>

        <TableBody>
          {transactions.map(({ id, type, amount, currency}) => {
            return (
            <tr key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </tr>)
          })}
        </TableBody>
      </table>
    </Wrapper>
  )
}
