import { createContext, useState, useEffect } from "react";

const InputContext = createContext();

export function InputProvider({ children }) {
    const [inputDay, setInputDay] = useState("");
    const [inputMonth, setInputMonth] = useState("");
    const [inputYear, setInputYear] = useState("");
    const [yearResult, setYearResult] = useState("");
    const [monthResult, setMonthResult] = useState("");
    const [dayResult, setDayResult] = useState("");

    function calculateAge() {
        const currentDate = new Date;
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();

        setYearResult(currentYear - inputYear);
        setMonthResult(currentMonth - inputMonth);
        setDayResult(currentDay - inputDay)
    }

    useEffect(() => {
        calculateAge();
    }, [inputDay, inputMonth, inputYear]);

    return (
        <InputContext.Provider value={{ setInputDay, setInputMonth, setInputYear, inputDay, inputMonth, inputYear, yearResult, monthResult, dayResult}}>
            {children}
        </InputContext.Provider>
    )
}

export default InputContext;