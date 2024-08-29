import './Header.scss';
import { NavMobileCommon } from './navMobile/common/NavMobileCommon';
import { NavPcCommon } from './navPc/common/NavPcCommon';
export const Header = () => {
	return (
		<header className='Header'>
			<NavMobileCommon />
			<NavPcCommon />
		</header>
	);
};
