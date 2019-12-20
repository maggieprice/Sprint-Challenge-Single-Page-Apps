import React from "react";

export default function SearchForm(props) {
  
  const handleInputChange = event => {
    props.setQuery(event.target.value);
  };

  return (
    <section className="search-form">
     <form className="search">
              <input
                onChange={handleInputChange}
                value={props.query}
              />
            </form>
    </section>
  );
}
