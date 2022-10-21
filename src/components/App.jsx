import userData from 'data/user.json';
import statistics from 'data/data.json';
import friends from 'data/friends.json';
// import transactions from 'data/transactions.json';
import { User } from 'components/User/User';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
export const App = () => {
  return (
    <div>
      <User
        key={userData.tag}
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <Statistics title="UPLOAD STATS" stats={statistics} />
      <FriendList stats={friends} />
    </div>
  );
};
