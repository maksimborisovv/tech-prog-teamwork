import './TopBar.css';

const TopBar = () => {
  return (
    <nav className='topbar__nav'>
      <ul className='topbar__ul'>
        <li className='topbar__li'>Задачи</li>
        <li className='topbar__li'>Статистика</li>
      </ul>
    </nav>
  );
};

export default TopBar;
