import Widget from '../Widget'
import React from 'react'

const Category = ({name,widgets}) => {
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {widgets.map(eachWidget => <Widget key={eachWidget.id} name={eachWidget.name} />)}
      </ul>
      <div>
        <h3>Add widget</h3>
      </div>
    </div>
  )
}

export default Category

