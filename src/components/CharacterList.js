import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
    const [data, setData]= useState({
      info: {},
      results:[]
    });
    const [query, setQuery] = useState("");
  
   useEffect(() => {
        axios
        .get(
          `https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(response => {
            console.log(response.data)
            setData(response.data);
          })
          .catch(err=>{
            console.log(err);
          })
      }, [query]);
      
        return (
      <div className="characters1">
        <SearchForm query={query} setQuery={setQuery} />
        <section className="character-list">
          <div>
            {
              data.results.map((item, index)=>{
                return (
                  <div key={index}>
                    <CharacterCard x={item} />
                  </div>
                )
              })
            }
          </div> 
        </section>
      </div>)}
        
