import { useEcommerce } from "../EcommerceContext";
import { useState } from "react";
import Category from "../Category";
import AddWidget from "../AddWidget";
import { AiOutlinePlus } from "react-icons/ai";
import { LuRefreshCcw } from "react-icons/lu";
import { BiDotsVerticalRounded } from "react-icons/bi";
import './index.css';

const Dashboard = () => {
    const { categories } = useEcommerce();
    const [showAddwidgetForm, setShowAddWidgetForm] = useState(false);

    return (
        <section className='dashboard-section'>
            <div className='container'>
                <div className='dashboard-header'>
                    <h2 className='dashboard-title'>Ecommerce Dashboard</h2>
                    <div className='dashboard-actions'>
                        <button type='button' className='btn' onClick={()=>setShowAddWidgetForm(!showAddwidgetForm)}>
                            Add Widget <span className="icon-btn"><AiOutlinePlus /></span>
                        </button>
                        <button type='button' className='btn'>
                            <span className="icon-btn"><LuRefreshCcw /></span>
                        </button>
                        <button type='button' className='btn'>
                            <span className="icon-btn"><BiDotsVerticalRounded /></span>
                        </button>
                        <button type='button' className='btn'>
                            Last 2 days
                        </button>
                    </div>
                </div>
                <ul className='categories-list'>
                    {categories.map((each) => (
                        <Category 
                            key={each.id}  
                            name={each.categoryName} 
                            widgets={each.widgets} 
                            id ={each.id}
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
