import { Wrapper} from "components/Styles/CommonStyles"
import { FriendListWrapper } from "./FriendList.styled"
import { FriendListItem } from "components/FriendListItem/FriendListItem"


export const FriendList = ({friends}) => {
  return (
    <Wrapper>
      <FriendListWrapper>
        {friends.map(({avatar, name, isOnline, id}) => {
           return <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline}/>
          </li>
        })}
      </FriendListWrapper>
    </Wrapper>
  )
}

