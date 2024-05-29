import './AccountItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountItem() {
    return (
        <div className="accWrapper">
            <img
                className="accWrapper-avatar"
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/51261386db5d984a0947ae0ecc0fe411.jpeg?lk3s=a5d48078&nonce=45218&refresh_token=00081d0cd0c14311aaac00c03f024098&x-expires=1716948000&x-signature=mwcT%2BXMJ4HS%2BGEzaO4TFOUD5KZo%3D&shp=a5d48078&shcp=81f88b70"
                alt="name"
            />
            <div className="accWrapper-info">
                <h4 className="accWrapper-info-name">
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className="check" icon={faCheckCircle} />
                </h4>
                <span className="accWrapper-info-username"> nguyen van a </span>
            </div>
        </div>
    );
}

export default AccountItem;
