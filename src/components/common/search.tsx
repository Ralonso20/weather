import inputStyle from "../../styles/searchInput.module.css"
import SearchIcon from '@mui/icons-material/Search';
export const SearchInput = (props: any) => {
    const { isShown, setIsShown } = props;

    const handleChange = (event) => {
      let { value } = event.target;
      props.setField(value);
    };

    return (
      <>
        <div className={inputStyle.container}>
            <SearchIcon  className={inputStyle.searchIcon}>

            </SearchIcon>
            <input onChange={handleChange} placeholder="Location" value={props.field} className={inputStyle.input} type="text" onKeyDown={((event) => props.onKeyPress(event))}/>  
        </div>
      </>
    );
  };
  