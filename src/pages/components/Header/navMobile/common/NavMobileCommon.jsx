import './NavMobileCommon.scss';
import { Link } from 'react-router-dom';
import { CloseSvg } from '../../../../../components/common/CloseSvg';
import { Hamburger } from '../../../../../components/common/Hamburger';
import { LogoSvg } from '../../../../../components/common/LogoSvg';
import { useNav } from '../../hooks/useNav';

export const NavMobileCommon = () => {
	const classComponent = 'NavMobileCommon';
	const { navActive, handleNav, closeNav } = useNav();
	return (
		<nav className={classComponent}>
			<Link to={'/'} className={`${classComponent}-logo-summit`}>
				<LogoSvg className={`${classComponent}-logo`} />
				<p>Summit</p>
			</Link>

			{navActive ? (
				<CloseSvg className={`${classComponent}-close`} event={closeNav} />
			) : (
				<Hamburger
					className={`${classComponent}-hamburger`}
					event={handleNav}
				/>
			)}

			{navActive && (
				<div
					className={`${classComponent}-menu`}
					data-aos={'fade-left'}
					data-aos-duration={500}
				>
					<div className={`${classComponent}-links`}>
						<Link
							className={`${classComponent}-link`}
							onClick={closeNav}
							to={'/'}
						>
							INICIO
						</Link>
						<Link className={`${classComponent}-link`} onClick={closeNav}>
							INICIAR SESIÓN
						</Link>
						<Link className={`${classComponent}-link`} onClick={closeNav}>
							REGISTRARSE
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};
