import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './Menu.scss';

function Header({ title, onBack }) {
    return (
        <header className="header-menu">
            <button className="back-btn" onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className="header-title">{title}</h4>
        </header>
    );
}

export default Header;
