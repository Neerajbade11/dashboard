import React from 'react'
import { useEcommerce } from '../EcommerceContext';
import { AiOutlineClose } from "react-icons/ai";
import './index.css'


const Widget = ({widget}) => {
    const {name, id, text} = widget
    const {removeWidget, getCategoryIdByWidgetId} = useEcommerce()
  
    const handleRemoveWidget = () => {
        const categoryId = getCategoryIdByWidgetId(id)
        removeWidget(categoryId, id)
    }
    
    return (
        <li className='widget-card-item'>
            <div className='widget-content'>
                <h4 className='widget-name'>{name}</h4>
                <p className='widget-text'>{text}</p>
            </div>
            
            <div>
            <button className='widget-remove-btn' type='button' onClick={handleRemoveWidget} ><AiOutlineClose /></button>
            </div>
           
        </li>
    )
    }

export default Widget
