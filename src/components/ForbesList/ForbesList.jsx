import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ forbsData }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {forbsData.map(item => (
          <ForbesListItem
            name={item.name}
            capital={item.capital}
            avatar={item.avatar}
            isIncrease={item.isIncrease}
            key={item.id}
          />
        ))}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
