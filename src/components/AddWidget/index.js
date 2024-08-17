import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useEcommerce } from '../EcommerceContext';
import { AiOutlineClose } from "react-icons/ai";
import './index.css';

const AddWidget = ({ showAddWidgetForm, setShowAddWidgetForm, categoryId }) => {
  const { categories, setCategories } = useEcommerce();

  const [selectedCategoryId, setSelectedCategoryId] = useState(categoryId || categories[0].id); 

  const [checked, setChecked] = useState({});

  useEffect(() => {
    if (showAddWidgetForm) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll'); 
    };
  }, [showAddWidgetForm]);

  useEffect(() => {
    
   

    const category = categories.find(cat => cat.id === selectedCategoryId)
    const newCheckedState = category.widgets.reduce((acc,widget) => {
      acc[widget.id] = true;
      return acc;
    },{});
    setChecked(newCheckedState)
  }, [selectedCategoryId, categories])

  

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);

    const category = categories.find(cat => cat.id === categoryId);
    const newCheckedState = category.widgets.reduce((acc, widget) => {
      acc[widget.id] = true; 
      return acc;
    }, {});
    setChecked(newCheckedState);
    setNewWidgetName('');
    setNewWidgetText('');
    setShowWidgetForm(false);
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
    setShowAddWidgetForm(false)
  };

  const [showWidgetForm, setShowWidgetForm] = useState(false);

  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');

  const handleNewWidget = (event) => {
    event.preventDefault()
    if (newWidgetName.trim() === '' || newWidgetText.trim() === '') {
      alert('Please fill in both the name and text fields.');
      return;
    }

    const newWidget = {
      id: uuidv4(),
      name: newWidgetName,
      text: newWidgetText
    };

    const updatedCategories = categories.map((category) => 
      category.id === selectedCategoryId 
        ? { ...category, widgets: [...category.widgets, newWidget] } 
        : category
    );

    setChecked(prevChecked => ({
      ...prevChecked,
      [newWidget.id]: true
    }));

    setCategories(updatedCategories);
    setNewWidgetName('');
    setNewWidgetText('');
    setShowWidgetForm(false);
  };


  const selectedCategory = categories.find(category => category.id === selectedCategoryId);

  return (
    <section className={`add-widget-section ${showAddWidgetForm && 'active'}`}>
        
          <div className="add-widget-header ">
            <p className="add-widget-title">Add Widget</p>
            <div>
              <button className="close-btn" onClick={() => setShowAddWidgetForm(false)}><AiOutlineClose /></button>
            </div>
          </div>
          <div className="add-widget-content">
            <p className="add-widget-subtitle">Personalize your dashboard by adding the following widgets:</p>
            <ul className="category-tab">
              {categories.map(category => (
                <li
                  key={category.id}
                  className={`category-tab-item ${category.id === selectedCategoryId ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <p className='category-name'>{category.categoryName}</p>
                </li>
              ))}
            </ul>
            <ul className="add-widget-list">
              {selectedCategory.widgets.map(widget => (
                <li key={widget.id} className="widget-item">
                  <label className="widget-label">
                    <input
                      type="checkbox"
                      id={`widget-checkbox ${widget.id}`}
                      name={`widget-checkbox ${widget.id}`}
                      className="widget-checkbox"
                      checked={checked[widget.id] || false}
                      onChange={() => handleCheckboxChange(widget.id)}
                    />
                    {widget.name}
                  </label>
                </li>
              ))}
            </ul>
            <div className="new-widget-form">
              {showWidgetForm && (
                <form className="new-widget-inputs" onSubmit={handleNewWidget}  >
                  <input
                    type="text"
                    placeholder="Widget Name"
                    value={newWidgetName}
                    onChange={(e) => setNewWidgetName(e.target.value)}
                    className="new-widget-input"
                  />
                  <input
                    type="text"
                    placeholder = "Widget Text"
                    value={newWidgetText}
                    onChange={(e) => setNewWidgetText(e.target.value)}
                    className="new-widget-input"
                  />
                  <button type='submit' className="add-widget-btn">Add Widget</button>
                </form>
              )}
              <button onClick={() => setShowWidgetForm(!showWidgetForm)} className="toggle-widget-form-btn">
                {showWidgetForm ? 'Cancel' : 'Add New Widget'}
              </button>
            </div>
            
          </div>
          

        <div className="action-buttons">
              <button className="cancel-btn" onClick={() => {
                setShowAddWidgetForm(false)
                setShowWidgetForm(false)
              }}>Cancel</button>
              <button onClick={handleConfirm} className="confirm-btn">Confirm</button>
          </div>
    </section>
  );
};

export default AddWidget;
