import React, { Fragment } from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import SelectLang from '@/components/SelectLang';
import styles from './UserLayout.less';
import logo from '../assets/logo.png';

const links = [
  {
    key: 'github',
    title: formatMessage({ id: 'layout.user.link.github' }),
    href: 'https://github.com/hanfengmi',
    blankTarget:true,
  },
  {
    key: 'segmentfault',
    title: formatMessage({ id: 'layout.user.link.segmentfault' }),
    href: 'https://segmentfault.com/u/duolaweimeng',
    blankTarget:true,
  },
];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2019 Mr.Han
  </Fragment>
);

class UserLayout extends React.PureComponent {

  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>H 的后台</span>
              </Link>
            </div>
            <div className={styles.desc}>扶我起来，我还要学</div>
          </div>
          {children}
        </div>
        <GlobalFooter links={links} copyright={copyright} />
      </div>
    );
  }
}

export default UserLayout;
