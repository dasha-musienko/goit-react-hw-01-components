import { StatiscticItem, } from "./Statistics.styled"
import { Wrapper, Stats, PrimaryTitle, CommonText, CommonBoldText } from "components/Styles/CommonStyles"


export const Statisctics = ({data, title}) => {
  return (
    <Wrapper>
      {
        title && <PrimaryTitle>{title}</PrimaryTitle>
      }

      <Stats>
        {data.map(({ id, label, percentage }) => (
         <StatiscticItem key={id}>
          <CommonText>{label}</CommonText>
          <CommonBoldText>{percentage}%</CommonBoldText>
        </StatiscticItem>
        ))}
      </Stats>
    </Wrapper>
  )
}


/**
 * 
 * [
  { "id": "id-1", "label": ".docx", "percentage": 22 },
  { "id": "id-2", "label": ".pdf", "percentage": 4 },
  { "id": "id-3", "label": ".mp3", "percentage": 17 },
  { "id": "id-4", "label": ".psd", "percentage": 47 },
  { "id": "id-5", "label": ".pdf", "percentage": 10 }
]
 */


