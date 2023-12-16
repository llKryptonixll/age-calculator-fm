import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import InputContext from "../context/InputContext"

const FormSection = () => {
    const inputStyles = "max-w-[160px] w-full h-[70px] border-[1px] border-light_grey rounded-md p-5 outline-purple outline-1 caret-purple md:text-3xl text-smokey_grey"
    const labelStyles = "text-smokey_grey tracking-[4px]"
    const errorStyles = "absolute w-full text-sm italic text-light_red -bottom-6"

    const { setInputDay, setInputMonth, setInputYear } = useContext(InputContext);
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const onSubmit = (data) => {
        setInputDay(data.day);
        setInputMonth(data.month);
        setInputYear(data.year);
    };
    return (
        <section className=''>
            <form onSubmit={handleSubmit(onSubmit)} className='grid gap-12 md:gap-0'>
                <div className='flex md:space-x-7 space-x-4'>
                    <div className='grid gap-2 relative'>
                        <label className={`${labelStyles} ${errors.day && "text-light_red"}`} htmlFor="day">DAY</label>
                        <input
                            {...register("day", {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                },
                                validate: (fieldValue) => {
                                    const monthValue = parseInt(getValues("month"));
                                    const yearValue = parseInt(getValues("year"));
                                    const dayValue = parseInt(fieldValue);
                                    const isLeapYear = (yearValue % 4 === 0 && yearValue % 100 !== 0) || (yearValue % 400 === 0);

                                    if (
                                        (monthValue === 2 && (isLeapYear ? dayValue > 29 : dayValue > 28)) || // February
                                        ((monthValue === 4 || monthValue === 6 || monthValue === 9 || monthValue === 11) && dayValue > 30)
                                    ) {
                                        return "Must be a valid date";
                                    } else if (dayValue < 1) {
                                        return "Must be a valid date";
                                    }
                                    else if (dayValue > 31) {
                                        return "Must be a valid date";
                                    }
                                    return true;
                                },
                                pattern: {
                                    value: /^\d{1,2}$/,  // Allow only 1 or 2 digits
                                    message: "Must be a valid date"
                                }
                            })}
                            id='day'
                            name='day'
                            className={`${inputStyles} ${errors.day && "outline-light_red"}`}
                            placeholder='DD'
                            type="number"
                            maxLength="2"
                        />
                        <span className={errorStyles}>{errors.day?.message}</span>
                    </div>
                    <div className='grid gap-2 relative'>
                        <label className={`${labelStyles} ${errors.month && "text-light_red"}`} htmlFor="month">MONTH</label>
                        <input
                            {...register("month", {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                },
                                validate: (fieldValue) => {
                                    const monthValue = parseInt(fieldValue);
                                    return (
                                        (monthValue >= 1 && monthValue <= 12) || "Must be a valid date"
                                    );
                                }
                            })}
                            name='month'
                            className={`${inputStyles} ${errors.month && "outline-light_red"}`}
                            id='month'
                            placeholder='MM'
                            type="number"
                        />
                        <span className={errorStyles}>{errors.month?.message}</span>
                    </div>
                    <div className='grid gap-2 relative'>
                        <label className={`${labelStyles} ${errors.year && "text-light_red"}`} htmlFor="year">YEAR</label>
                        <input
                            {...register("year", {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                },
                                validate: (fieldValue) => {
                                    const yearValue = parseInt(fieldValue);
                                    const currentYear = new Date().getFullYear();
                                    return (
                                        (yearValue < currentYear) || "Must be in the past"
                                    );
                                }
                            })}
                            name='year'
                            className={`${inputStyles} ${errors.year && "outline-light_red"}`}
                            id='year'
                            placeholder='YYYY'
                            type="number"
                        />
                        <span className={errorStyles}>{errors.year?.message}</span>
                    </div>
                </div>

                <div className='grid items-center w-full relative after:h-[1px] after:w-full after:bg-light_grey after:absolute after:z-10'>
                    <button className='bg-purple hover:bg-off_black transition-colors md:justify-self-end justify-self-center md:w-[100px] md:h-[100px] w-[65px] h-[65px] rounded-full grid place-items-center relative z-20' aria-label='calculate-age-button'>
                        <img className='w-full md:h-[50px] h-[30px]' src="images/icon-arrow.svg" alt="arrow-icon" />
                    </button>
                </div>
            </form>
        </section>
    )
}

export default FormSection