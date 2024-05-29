import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import './DefaultLayout.scss';

function DefaultLayout({ children }) {
    return (
        <div className="layout-wrapper">
            <Header />
            <div className="layout-container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
