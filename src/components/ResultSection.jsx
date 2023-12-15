import InputContext from '../context/InputContext'
import { useContext } from 'react'

const ResultSection = () => {
    const generalTextStyle = "md:text-8xl text-5xl italic font-bold"
    const { yearResult, monthResult, dayResult } = useContext(InputContext);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();

    return (
        <section>
            <div className='space-x-3'>
                <span className={`${generalTextStyle} text-purple`}>{
                    (yearResult === currentYear || yearResult === "") ? "--" : yearResult
                }</span>
                <span className={`${generalTextStyle} text-off_black`}>years</span>
            </div>
            <div className='space-x-3'>
                <span className={`${generalTextStyle} text-purple`}>
                    {(monthResult === currentMonth || monthResult === "") ? "--" : monthResult}
                </span>
                <span className={`${generalTextStyle} text-off_black`}>months</span>
            </div>
            <div className='space-x-3'>
                <span className={`${generalTextStyle} text-purple`}>
                    {(dayResult === currentDay || dayResult === "") ? "--" : dayResult}
                </span>
                <span className={`${generalTextStyle} text-off_black`}>days</span>
            </div>
        </section>
    )
}

export default ResultSection