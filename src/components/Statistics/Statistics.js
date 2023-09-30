import { StatiscticItem, } from "./Statistics.styled"
import { Wrapper, Stats, PrimaryTitle, CommonText, CommonBoldText } from "components/Styles/CommonStyles"
import { randomColor } from 'helpers/randomColor';


export const Statisctics = ({data, title}) => {
  return (
    <Wrapper>
      {
        title && <PrimaryTitle>{title}</PrimaryTitle>
      }

      <Stats>
        {data.map(({ id, label, percentage }) => (
         <StatiscticItem key={id} color={randomColor()}>
          <CommonText>{label}</CommonText>
          <CommonBoldText>{percentage}%</CommonBoldText>
        </StatiscticItem>
        ))}
      </Stats>
    </Wrapper>
  )
}


