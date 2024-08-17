import { useEcommerce } from "../EcommerceContext";
import { useState } from "react";
import Category from "../Category";
import AddWidget from "../AddWidget";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { LuRefreshCcw } from "react-icons/lu";
import { BiDotsVerticalRounded } from "react-icons/bi";
import './index.css';

const Dashboard = () => {
    const { categories, searchCategoryWidget} = useEcommerce();
    const [showAddwidgetForm, setShowAddWidgetForm] = useState(false);

    const categoriesToDisplay = searchCategoryWidget.length > 0 ? searchCategoryWidget : categories;

    return (
        <section className='dashboard-section'>
            <div className='container'>
                <div className='dashboard-header'>
                    <h2 className='dashboard-title'>Ecommerce Dashboard</h2>
                    <div className='dashboard-actions'>
                        <button type='button' className='history-btn' onClick={()=>setShowAddWidgetForm(!showAddwidgetForm)}>
                            <span className="span-btn-text" >Add Widget</span> <span className="span-icon" ><AiOutlinePlus /></span>
                        </button>
                        <button type='button' className='dashboard-btn hide-btn'>
                            <span className=""><LuRefreshCcw /></span>
                        </button>
                        <button type='button' className='dashboard-btn hide-btn'>
                            <span className=""><BiDotsVerticalRounded /></span>
                        </button>
                        
                        <button type='button' className='history-btn '>
                            <span className="span-icon"><MdAccessTimeFilled /></span>
                             <span className="span-btn-text">Last 2 days</span> 
                            <span className="span-icon" ><FaAngleDown /></span>
                        </button>
                    </div>
                </div>
                <ul className='categories-list'>
                    {categoriesToDisplay.map((each) => (
                        <Category 
                            key={each.id}  
                            name={each.categoryName} 
                            widgets={each.widgets} 
                            id ={each.id}
                            searchCategoryWidget ={searchCategoryWidget}
                        />
                    ))}
                </ul>
                {
                    showAddwidgetForm && <AddWidget  showAddWidgetForm={showAddwidgetForm} setShowAddWidgetForm = {setShowAddWidgetForm}/>
                }
            </div>
        </section>
    );
}

export default Dashboard;
