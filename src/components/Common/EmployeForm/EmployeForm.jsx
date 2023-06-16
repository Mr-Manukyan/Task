import { useForm } from 'react-hook-form'
import { Button } from '../Button/Button'
import { Input } from '../FormsControls/Input'
import style from './EmployeForm.module.css'

export const EmployeForm = ({ onSubmit, buttonName = 'create', buttonBlueStyle = false, defultValues }) => {


    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ mode: "all", defaultValues: { ...defultValues } })

    return (
        <div className={style.formContainer}>
            <form onSubmit={handleSubmit((e) => onSubmit(e, reset))} className={style.userForm}>
                <Input id='name'
                    label='Your Name'
                    watch={watch}
                    register={register}
                    registerName='name'
                    errors={errors.name}
                    maxLengthMessage="Maximum` 15 symbols"
                    maxLengthValue={15}
                    requiredMessage='Name is required'
                    isRequired={true}
                />
                <Input id='Surname'
                    label='Your Surname'
                    watch={watch}
                    register={register}
                    registerName='surname'
                    errors={errors.surname}
                    maxLengthMessage="Maximum` 25 symbols"
                    maxLengthValue={25}
                    requiredMessage='LastName is required'
                    isRequired={true}
                />

                <Input id='email'
                    label='Your Email'
                    watch={watch}
                    register={register}
                    registerName='email'
                    errors={errors.email}
                    maxLengthMessage="Maximum` 40 symbols"
                    maxLengthValue={40}
                    requiredMessage='Email is required'
                    isRequired={true}
                    regExp={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
                    regExpMessage='Please enter valid email'
                />

                <Input id='position'
                    label='Your Position'
                    watch={watch}
                    register={register}
                    registerName='position'
                    errors={errors.position}
                    requiredMessage='Position is required'
                    isRequired={true}
                    maxLengthMessage="Maximum` 20 symbols"
                    maxLengthValue={20}
                />

                <div className={style.submitButtonWrapper}>
                    <Button name={buttonName} width='150px' buttonBlueStyle={buttonBlueStyle} />
                </div>
            </form>
        </div>
    )
}

