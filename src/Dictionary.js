import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css"

export default function Dictionary() {
    let [keyWord, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        // API Documentation >>> https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
    return (
        <div className="Dictionary">
          <form onSubmit={search}>
            <input type="search"  onChange={handleKeywordChange}/>
          </form>
        </div>
    );
    
}