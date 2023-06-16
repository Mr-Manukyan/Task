
import { EmployeForm } from '../EmployeForm/EmployeForm'
import style from './CreateUserForm.module.css'


export const CreateEmployeForm = ({ setIsShowCreateEmployModalForm, createNewEmploye }) => {

    const onSubmit = (data, reset) => {
        createNewEmploye(data)
        setIsShowCreateEmployModalForm(false)
        reset()

    }

    return (

        <div className={style.container}>
            <div className={style.paragraphWrapper}>
                <p className={style.paragraph}>Create New Employe</p>
            </div>
            <EmployeForm onSubmit={onSubmit} />
        </div>
    )

}

