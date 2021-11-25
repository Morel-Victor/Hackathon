import PropTypes from 'prop-types';
import SSearchBar from './style';
import searchIcon from '../../../assets/SearchIcon.png';

export default function SearchBar({
  searchBarInputUser,
  setSearchBarInputUser,
  setStatsSearchBar,
  searchCount,
  setSearchCount,
}) {
  return (
    <SSearchBar
      className="searchBar"
      onSubmit={(e) => {
        e.preventDefault();
        setStatsSearchBar(true);
        setSearchCount(searchCount + 1);
      }}
    >
      <input
        type="search"
        id="mySearch"
        name="title"
        value={searchBarInputUser}
        onChange={(e) => {
          return setSearchBarInputUser(e.target.value);
        }}
      />
      <button type="submit">
        <img src={searchIcon} alt="Search icon" />
      </button>
    </SSearchBar>
  );
}

SearchBar.propTypes = {
  searchBarInputUser: PropTypes.string,
  setSearchBarInputUser: PropTypes.func,
  setStatsSearchBar: PropTypes.func,
  searchCount: PropTypes.number,
  setSearchCount: PropTypes.func,
};
SearchBar.defaultProps = {
  searchBarInputUser: '',
  setSearchBarInputUser: () => {},
  setStatsSearchBar: () => {},
  searchCount: 0,
  setSearchCount: () => {},
};
