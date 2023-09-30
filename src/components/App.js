import { Layout } from "./Styles/Layout";
import { Profile } from "./Profile/Profile";
import { Statisctics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionsHistory } from "./TransactionsHistory/TransactionsHistory";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";


import user from "../data/user.json"
import statistics from "../data/data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"


export const App = () => {
  return (
    <Layout>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
      <Statisctics data={statistics} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions}/>
      <GlobalStyle />
    </Layout>
  );
};

