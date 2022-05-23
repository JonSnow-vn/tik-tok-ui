import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import {logo, deleteIcon, loadingIcon, searchIcon} from '~/assets/image';

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo.path} alt="InconTiktok" />
                </div>
                <div className={cx('search')}>
                    <input placeholder='Tìm kiếm tài khoản và video' spellCheck={false} />
                    <div className={cx('delete-icon')}>
                        <img src={deleteIcon.path} alt="delete-icon" />
                    </div>
                    {/* <div className={cx('loading-icon')}>
                        <img src={loadingIcon.path} alt="loading-icon" />
                    </div> */}
                    <button className={cx('search-icon')}>
                        <img src={searchIcon.path} alt="search-icon" />
                    </button>
                </div>
                <div className={cx('action')}>

                </div>
            </div>
        </header>
         
    );
}

export default Header;