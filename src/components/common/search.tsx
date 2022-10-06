import inputStyle from "../../styles/searchInput.module.css"
import SearchIcon from '@mui/icons-material/Search';
export const SearchInput = (props: any) => {
    const { isShown, setIsShown } = props;

    return (
      <>
        <div className={inputStyle.container}>
            <SearchIcon className={inputStyle.searchIcon}>

            </SearchIcon>
            <input placeholder="Location" className={inputStyle.input} type="text" />  
        </div>
      </>
    );
  };
  