import user from '../assets/user.json';
import { Profile } from './Profile/Profile';
import css from './App.module.css'

console.log(user);
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
