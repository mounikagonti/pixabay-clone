import { useEffect, useState, useCallback } from "react";
import Select, { components } from "react-select";
import { FiSearch } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { getPixabayApi } from "../../redux/slice/PixabaySlice";

const options: any = [{ value: "images", label: "Images" }];

const style = {
  control: (base: any) => ({
    ...base,
    border: 0,
    // This line disable the blue border
    boxShadow: "none",
  }),
};

const SelectField = () => {
  const [searchValue, setSearchValue] = useState<any>("");
  const [query, setQuery] = useState<any>();
  const { pixabayData }: any = useSelector<any>((state: any) => state.pixabay);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPixabayApi());
  }, []);

  const handleSelectChange = (info: any) => {
    setSearchValue(info?.value);
  };

  const debounce = (fn: any, delay: number) => {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };

  const handleQueryChange = (e: any) => {
    setQuery(e?.target?.value);
    debounce(dispatch(getPixabayApi(e?.target?.value)), 1000);
  };

  return (
    <div className="selectField_wrapper">
      <div className="search_icon">
        <FiSearch />
      </div>
      <div className="searchInput">
        <input
          style={{ border: "none", outline: "none" }}
          type="search"
          name="input"
          placeholder="Search images..."
          value={query}
          onChange={handleQueryChange}
        />
      </div>
      <div className="select_container">
        <Select
          styles={style}
          options={options}
          onChange={handleSelectChange}
          value={options?.filter((item: any) => {
            return item?.value === searchValue;
          })}
        />
      </div>
    </div>
  );
};

export default SelectField;
