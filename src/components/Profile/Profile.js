import { ProfileWrapper, ProfileImg, Stat } from "./Profile.styled"
import { Wrapper, Stats, PrimaryTitle, SecondaryTitle, CommonText, CommonBoldText, SecondaryText } from "components/Styles/CommonStyles"


export const Profile = ({username, tag, location, stats: {followers, views, likes}, avatar}) => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImg
        src={avatar}
        alt="User avatar"
        />
        <PrimaryTitle>{username}</PrimaryTitle>
        <SecondaryTitle>@{tag}</SecondaryTitle>
        <CommonText>{location}</CommonText>
      </ProfileWrapper>

      <Stats>
        <Stat>
          <SecondaryText>Followers</SecondaryText>
          <CommonBoldText>{followers}</CommonBoldText>
        </Stat>
        <Stat>
          <SecondaryText>Views</SecondaryText>
          <CommonBoldText>{views}</CommonBoldText>
        </Stat>
        <Stat>
          <SecondaryText>Likes</SecondaryText>
          <CommonBoldText>{likes}</CommonBoldText>
        </Stat>
      </Stats>
    </Wrapper>
  )
}


