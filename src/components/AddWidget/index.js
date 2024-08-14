import React, { useState } from 'react';
import { useEcommerce } from '../EcommerceContext';
import { AiOutlineClose } from "react-icons/ai";
import './index.css';

const AddWidget = () => {
  const { categories, setCategories } = useEcommerce();
  const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0].id); 


  const initialCheckedState = categories[0].widgets.reduce((acc, widget) => {
    acc[widget.id] = true;
    return acc;
  }, {});

  const [checked, setChecked] = useState(initialCheckedState);

  
  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);

    const category = categories.find(cat => cat.id === categoryId);
    const newCheckedState = category.widgets.reduce((acc, widget) => {
      acc[widget.id] = true; 
      return acc;
    }, {});
    setChecked(newCheckedState);
  };

 
  const handleCheckboxChange = (widgetId) => {
    setChecked(prevState => ({
      ...prevState,
      [widgetId]: !prevState[widgetId]
    }));
  };


  const handleConfirm = () => {
    const updatedCategories = categories.map(category => 
      category.id === selectedCategoryId
        ? {
            ...category,
            widgets: category.widgets.filter(widget => checked[widget.id]) 
          }
        : category
    );
    setCategories(updatedCategories);
  };

  const selectedCategory = categories.find(category => category.id === selectedCategoryId);

  return (
    <div>
      <div className='header-nav'>
        <p>Add Widget</p>
        <div>
          <button><AiOutlineClose /></button>
        </div>
      </div>
      <div className='content'>
        <h3>Personalize your dashboard by adding the following widgets:</h3>
        <ul>
          {categories.map(category => (
            <li
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              style={{ fontWeight: category.id === selectedCategoryId ? 'bold' : 'normal' }}
            >
              {category.categoryName}
            </li>
          ))}
        </ul>
        <ul>
          {selectedCategory.widgets.map(widget => (
            <li key={widget.id}>
              <label>
                <input
                  type='checkbox'
                  checked={checked[widget.id]}
                  onChange={() => handleCheckboxChange(widget.id)}
                />
                {widget.name}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={handleConfirm}>Confirm</button>
        <button>Cancle</button>
      </div>
    </div>
  );
};

export default AddWidget;
