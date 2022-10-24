import userData from 'data/user.json';
import statistics from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Profile } from 'components/User/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <Statistics title="UPLOAD STATS" stats={statistics} />
      <Statistics stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
