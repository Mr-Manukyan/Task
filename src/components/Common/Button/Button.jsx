import style from './Button.module.css'

export const Button = ({
  name, width, fontSize, buttonBlueStyle,
  height, borderRadius, padding, callBack,
}) => {


  return (
    <button className={style.btn} onClick={callBack}
      style={{
        width,
        height,
        borderRadius,
        fontSize,
        padding,
        backgroundImage: buttonBlueStyle
          ? 'linear-gradient(to left, #008165, #008dc5, #0024c2)'
          : 'linear-gradient(to left, #1a8100, #c5bb00, #c20000)'
      }}
    >
      {name}
    </button>
  )
}
