import style from './Input.module.css'
import { motion } from 'framer-motion'


export const Input = ({ register, isRequired = false, regExp = new RegExp(''),
  id, placeholder, registerName, requiredMessage = '', regExpMessage = '',
  maxLengthValue = 10, maxLengthMessage = '', minLengthValue = 0,
  minLengthMessage = '', errors, type, label = '', watch,
}) => {

  const value = watch(registerName)


  return (
    <div className={style.inputField}>
      <input id={id}
        className={errors ? style.inputError : style.input}
        placeholder={placeholder}
        type={type}
        {...register(registerName,

          {

            [isRequired ? 'required' : '']: requiredMessage,
            pattern: {
              value: regExp,
              message: regExpMessage
            },
            maxLength: {
              value: maxLengthValue,
              message: maxLengthMessage
            },
            minLength: {
              value: minLengthValue,
              message: minLengthMessage
            },
          }
        )}
      />
      <label htmlFor={id} className={errors ? style.labelError : (value ? style.labelActive : style.label)}>
        {label}
      </label>

      {errors &&
        <motion.div className={style.errorWrapper}
          initial={{ opacity: 0, x: '-30px' }}
          animate={{ opacity: 1, x: '0px' }}
          exit={{ opacity: 0, x: '-30px' }}
          transition={{ duration: .3 }}
        >
          <p className={style.errorMessage}>
            {errors?.message}
          </p>
        </motion.div>
      }
    </div>
  )
}















