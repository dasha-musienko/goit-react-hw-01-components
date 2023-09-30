import { CommonBoldText} from "components/Styles/CommonStyles"
import { FriendCard, StatusIndicator } from "./FriendListItem.styled"


export const FriendListItem = ({avatar, name, isOnline, id}) => {
  return (
    <li key={id}>
      <FriendCard>
        <StatusIndicator color={checksStatus(isOnline)}/>
        <img src={avatar} alt="User avatar" width="48" />
        <CommonBoldText>{name}</CommonBoldText>
      </FriendCard>
    </li>
  )
}


function checksStatus (value) {
  return value ? "#3EF551" : "#FF1616";
}
