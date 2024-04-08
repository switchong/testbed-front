
import { useNavigate } from 'react-router-dom';
import CSS1 from '../../assets/css/sample01.css';
import closeImg from '../../assets/icon/icons8-5.png';
function CardHeader() {
    const navigate = useNavigate();
    const CardHandler = () => {
        navigate(-1);
    }
    return (
        <>
            <div className={CSS1.mainBody}>
                <div className={CSS1.inner_sub_title} style={{
                    display: 'flex',
                    textAlign: 'center'
                }}>
                        <p style={{
                        width: 346
                    }} >내 카드 관리</p>
                        <img src={closeImg} style={{
                        width: 14,
                        height: 14,
                        float: 'right',
                        cursor:'pointer'
                    }} onClick={CardHandler}/>
                    
                </div>
                <div>

                </div>
            </div>
        </>
    );
}

export default CardHeader;