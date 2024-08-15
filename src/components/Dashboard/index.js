import { useEcommerce } from "../EcommerceContext";
import Category from "../Category";
import { AiOutlinePlus } from "react-icons/ai";
import { LuRefreshCcw } from "react-icons/lu";
import { BiDotsVerticalRounded } from "react-icons/bi";
import './index.css';

const Dashboard = () => {
    const { categories } = useEcommerce();

    return (
        <section className='dashboard-section'>
            <div className='container'>
                <div className='dashboard-header'>
                    <h2 className='dashboard-title'>Ecommerce Dashboard</h2>
                    <div className='dashboard-actions'>
                        <button type='button' className='dashboard-btn'>
                            Add Widget <AiOutlinePlus />
                        </button>
                        <button type='button' className='dashboard-btn'>
                            <LuRefreshCcw />
                        </button>
                        <button type='button' className='dashboard-btn'>
                            <BiDotsVerticalRounded />
                        </button>
                        <button type='button' className='dashboard-btn'>
                            Last 2 days
                        </button>
                    </div>
                </div>
                <div className='categories-list'>
                    {categories.map((each) => (
                        <Category 
                            key={each.id}  
                            name={each.categoryName} 
                            widgets={each.widgets} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
