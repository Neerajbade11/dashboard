import Widget from '../Widget'
import React from 'react'
import './index.css'

const Category = ({name,widgets}) => {
  return (
    <div className='category-container container' >
      <h1 className='category-title'>{name}</h1>
      <ul className='widget-list'>
        {widgets.map(eachWidget => <Widget key={eachWidget.id} widget={eachWidget}  />)}
        <div className='add-widget'>
          <p>Add widget</p>
        </div>
      </ul>
      
    </div>
  )
}

export default Category

