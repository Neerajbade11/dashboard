import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import { useEcommerce } from '../EcommerceContext';
import { AiOutlineClose } from "react-icons/ai";
import './index.css';

const AddWidget = () => {
  const { categories, setCategories} = useEcommerce();

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
    setNewWidgetName('')
    setNewWidgetText('')
    setShowWidgetForm(false)
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

  //set state to newWidgetForm
  const [showWidgetForm, setShowWidgetForm] = useState(false)
  const [newWidgetName, setNewWidgetName] = useState('')
  const [newWidgetText, setNewWidgetText] = useState('')

  const handleNewWidget = () => {
    if (newWidgetName.trim()==='' || newWidgetText.trim()===''){
      alert('Please fill in both the name and text fields.')
      return ''
    }

    const newWidget = {
      id :  uuidv4(),
      name: newWidgetName,
      text: newWidgetText
    }

    const updatedCategories = categories.map((category) => 
      category.id === selectedCategoryId ? {
        ...category,
        widgets: [...category.widgets, newWidget]
      } :
      category
    )

    setChecked((prevChecked) => ({
      ...prevChecked,
      [newWidget.id] : true
    }) )

    setCategories(updatedCategories)
    setNewWidgetName('')
    setNewWidgetText('')
    setShowWidgetForm(false)

  }

  const selectedCategory = categories.find(category => category.id === selectedCategoryId);

  return (
    <div className="add-widget-section">
      <div className='header-nav'>
        <p>Add Widget</p>
        <div>
          <button><AiOutlineClose /></button>
        </div>
      </div>
      <div className='content'>
        <h3>Personalize your dashboard by adding the following widgets:</h3>
        <ul className="category-tab">
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
        <div className="new-widget-form">
           
           {
            showWidgetForm && (
              <div>
                  <input
                    type='text'
                    placeholder = "Widget Name"
                    value={newWidgetName}
                    onChange = {(e) => setNewWidgetName(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder = "Widget Text"
                    value={newWidgetText}
                    onChange = {(e) => setNewWidgetText(e.target.value)}
                  />
                  <button onClick={handleNewWidget} >Add Widget</button>
              </div>

            )
           }
           <button onClick={()=> setShowWidgetForm(!showWidgetForm)} >{showWidgetForm ? 'cancel' : 'Add New Widget'}</button>
        </div>
        <button onClick={handleConfirm}>Confirm</button>
        <button  >Cancel</button>
      </div>
    </div>
  );
};

export default AddWidget;
