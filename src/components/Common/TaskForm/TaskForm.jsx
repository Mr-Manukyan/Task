import { useForm } from 'react-hook-form'
import { Button } from '../Button/Button'
import { Input } from '../FormsControls/Input'
import style from './TaskForm.module.css'

export const TaskForm = ({ onSubmit, buttonName = 'create', buttonBlueStyle = false, defultValues }) => {


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
                <Input id='Description'
                    label='Your Description'
                    watch={watch}
                    register={register}
                    registerName='description'
                    errors={errors.description}
                    maxLengthMessage="Maximum` 35 symbols"
                    maxLengthValue={35}
                    requiredMessage='Description is required'
                    isRequired={true}
                />

                <div className={style.submitButtonWrapper}>
                    <Button name={buttonName} width='150px' buttonBlueStyle={buttonBlueStyle} />
                </div>
            </form>
        </div>
    )
}

