
import style from '../../styles/LoginBtn.module.scss'

interface props{
    onClick: (e: React.MouseEvent<HTMLButtonElement>)=> void
}

export default function LoginBtn({onClick}:props){
    return(<button onClick={onClick} className={style.loginBtn}>LOG IN</button>)
}