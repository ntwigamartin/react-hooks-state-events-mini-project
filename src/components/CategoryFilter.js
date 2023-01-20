import React from "react";

function CategoryFilter({categories,onButton,selectedButton}) {


  const cats= categories.map((list,index)=>{
    return (
    <button 
    key ={index}
    onClick={()=>{selectedButton(list)}}
    className={onButton === list ? 'selected':''}>
    {list}
    </button>
      )
  }) 
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
        {cats}
    </div>
  );
}

export default CategoryFilter;
