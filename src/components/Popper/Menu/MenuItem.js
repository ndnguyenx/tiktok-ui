import Button from '~/components/Layout/components/Button';
import './Menu.scss';

function MenuItem({ data, onClick }) {
    return (
        <Button className="menu-item" leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
