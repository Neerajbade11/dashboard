import { useEcommerce } from "../EcommerceContext";
import Category from "../Category";

import { AiOutlinePlus } from "react-icons/ai";
import { LuRefreshCcw } from "react-icons/lu";
import { BiDotsVerticalRounded } from "react-icons/bi";

import './index.css'

const Dashboard = () => {
    const {categories} = useEcommerce()

    return(
        <section className='dashboard-section'>
            <div className='container'>
                <div className='wrapper'>
                    <div>
                        Dashboard
                    </div>
                    <div>
                        <button type='button'>Add Widget <AiOutlinePlus /></button>
                        <button type='button'> <LuRefreshCcw /></button>
                        <button type='button'><BiDotsVerticalRounded /></button>
                        <button type='button'>Last 2 days</button>
                    </div>
                </div>
                <div>
                    {
                        categories.map((each) => <Category key={each.id}  name={each.categoryName} widgets= {each.widgets} />)
                    }
                </div>
            </div>
        </section>
    )
}
    


export default Dashboard