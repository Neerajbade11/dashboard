import { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";


const EcommerceContext = createContext()

export const EcommerceProvider = ({children}) => {
    const [searchCategoryWidget, setSearchCategoryWidget] = useState([])

    const [categories, setCategories] = useState([
        {
          id: uuidv4(),
          categoryName: "Product Management",
          widgets: [
            {
              id: uuidv4(),
              name: "Inventory Overview",
              text: "Monitor the current stock levels of all products."
            },
            {
              id: uuidv4(),
              name: "Product Listings",
              text: "View and manage all product listings in the store."
            }
          ]
        },
        {
          id: uuidv4(),
          categoryName: "Sales Analytics",
          widgets: [
            {
              id: uuidv4(),
              name: "Sales Performance",
              text: "Track daily, weekly, and monthly sales performance."
            },
            {
              id: uuidv4(),
              name: "Top Selling Products",
              text: "Identify the top-selling products in various categories."
            }
          ]
        },
        {
          id: uuidv4(),
          categoryName: "Customer Engagement",
          widgets: [
            {
              id: uuidv4(),
              name: "Customer Feedback",
              text: "Analyze customer reviews and feedback."
            },
            {
              id: uuidv4(),
              name: "Loyalty Programs",
              text: "Manage customer loyalty programs and rewards."
            }
          ]
        },
        {
          id: uuidv4(),
          categoryName: "Marketing Insights",
          widgets: [
            {
              id: uuidv4(),
              name: "Campaign Performance",
              text: "Measure the effectiveness of marketing campaigns."
            },
            {
              id: uuidv4(),
              name: "Conversion Rate",
              text: "Track the conversion rate of visitors to customers."
            }
          ]
        }
      ])

    const removeWidget = (categoryId, widgetId) => {
      const categoriesToDisplay = searchCategoryWidget.length > 0 ? searchCategoryWidget : categories

      const updatedCategories = categoriesToDisplay.map((eachCategory) => 
        categoryId === eachCategory.id ?
            {
              ...eachCategory,
              widgets: eachCategory.widgets.filter((eachWidget) => eachWidget.id !== widgetId)
            } :
            eachCategory
          )
      setSearchCategoryWidget(updatedCategories)
    }

    const getCategoryIdByWidgetId = (widgetId) => {
      for (const category of categories){
        const existId = category.widgets.some((widget) => widget.id === widgetId)
        if (existId){
          return category.id
        }
       
      }
      return null
    }

    const searchInputWidget = (searchInput) => {
      const normalizedSearchInput = searchInput.toLowerCase().split(' ').join('');
      let results = [];

        for (const category of categories) {
            const widgetSearch = category.widgets.filter((eachWidget) => eachWidget.name.toLowerCase().split(' ').join('') === normalizedSearchInput)
            
            if (widgetSearch.length > 0){
                results.push(
                  {
                    ...category,
                  widgets:[...widgetSearch]
                  }
                )
              }      
            }
        setSearchCategoryWidget(results)
      }
    

    return (
        <EcommerceContext.Provider value={{categories, setCategories, removeWidget, getCategoryIdByWidgetId, searchInputWidget, searchCategoryWidget}}>
            {children}
        </EcommerceContext.Provider>
    )

}

export const useEcommerce = () => useContext(EcommerceContext)