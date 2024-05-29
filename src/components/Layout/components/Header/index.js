import './Header.scss';
import AccountItem from '../AccountItem';
import Button from '../Button';
import Menu from '~/components/Popper/Menu';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEllipsisVertical,
    faKeyboard,
    faLanguage,
    faMagnifyingGlass,
    faCloudUpload,
    // faSignIn,
    faSpinner,
    faCoins,
    faUser,
    faGear,
} from '@fortawesome/free-solid-svg-icons';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'ja',
                    title: '日本語',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
];

const handleMenuChange = (menuItem) => {
    console.log(menuItem);
};

const currentUser = true;

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
    ];

    return (
        <header className="header-wrapper">
            <div className="header-wrapper-inner">
                <div className="header-wrapper-logo">
                    <img src={images.logo} alt="logo" />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className="search-result" tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className="search-title">Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className="header-wrapper-search">
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className="header-wrapper-search-clear">
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className="header-wrapper-search-loading"
                            icon={faSpinner}
                        />
                        <button className="header-wrapper-search-btn">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className="header-wrapper-action">
                    {currentUser ? (
                        <>
                            <Tippy content="Upload videos" placement="bottom">
                                <button className="header-wrapper-action-btn">
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <img
                                className="user-avatar"
                                alt="Nguyen Van A"
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/988d808ceb5ae42191ae6af9970e0c0d.jpeg?lk3s=a5d48078&nonce=53261&refresh_token=d742d3f6d7aa8215fd68ddf358894319&x-expires=1717124400&x-signature=f910%2Fq6g7B7iJVMt%2BXo0ybihILY%3D&shp=a5d48078&shcp=b59d6b55"
                            />
                        ) : (
                            <button className="menuMore">
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
