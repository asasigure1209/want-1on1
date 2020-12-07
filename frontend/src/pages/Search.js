import { useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProfileCardList from '../components/profileCardList';
import SearchThanksCommentList from '../components/SearchThanksCommentList';

function Search() {
  const query = new URLSearchParams(useLocation().search);
  const word = query.get('want')

  return (
    <div>
      <p>「{word}」の検索結果</p>
      <Tabs>
        <TabList>
          <Tab>感謝ログ</Tab>
          <Tab>プロフィール</Tab>
        </TabList>
        <TabPanel>
          <SearchThanksCommentList word={word} />
        </TabPanel>
        <TabPanel>
          <ProfileCardList word={word} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Search;
