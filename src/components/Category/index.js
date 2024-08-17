import React, { useState } from 'react';
import AddWidget from '../AddWidget';
import Widget from '../Widget';
import { AiOutlinePlus } from "react-icons/ai";
import './index.css';

const Category = ({id, name, widgets, searchCategoryWidget}) => {
  
  const [showAddwidgetForm, setShowAddWidgetForm] = useState(false);

  return (
    <div className='category-container'>
      <h1 className='category-title'>{name}</h1>
      <ul className='widget-list'>
        {widgets.map(eachWidget => <Widget key={eachWidget.id} widget={eachWidget} />)}
        {
          searchCategoryWidget.length >0 ? '' : <div className='add-widget'>
          <button onClick={() => setShowAddWidgetForm(!showAddwidgetForm)} type='button' className='history-btn'>
            <span className='span-add-icon' ><AiOutlinePlus /></span> <span className="span-btn-text">Add widget</span>
          </button>
        </div>
        }
      </ul>
      { 
        showAddwidgetForm && <AddWidget showAddWidgetForm={showAddwidgetForm} setShowAddWidgetForm = {setShowAddWidgetForm} categoryId = {id} />
      }
    </div>
  );
};

export default Category;
