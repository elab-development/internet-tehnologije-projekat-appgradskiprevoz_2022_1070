import { useState} from "react";




function useSearchSort() {
    const[search, setSearch]=useState();
    const[sortBy, setSortBy]=useState();
    const[sortOrder, setSortOrder]=useState('asc');

    return{
        search,
        setSearch,
        sortBy,
        setSortBy,
        sortOrder,
        setSortOrder
    };



};

export default useSearchSort;