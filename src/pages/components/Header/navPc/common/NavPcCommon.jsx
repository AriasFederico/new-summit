import { Link, NavLink } from 'react-router-dom';
import './NavPcCommon.scss';
import { LogoSvg } from '../../../../../components/common/LogoSvg';
export const NavPcCommon = () => {
	const classComponent = 'NavPcCommon';
	return (
		<nav className={classComponent}>
			<Link to={'/'} className={`${classComponent}-logo-summit`}>
				<LogoSvg className={`${classComponent}-logo`} />
				<p>Summit</p>
			</Link>

			<div className={`${classComponent}-links`}>
				<NavLink
					to={'/'}
					className={({ isActive }) =>
						isActive
							? `${classComponent}-link-active`
							: `${classComponent}-link`
					}
				>
					Inicio
				</NavLink>
				<NavLink
					to={'/ingresar'}
					className={({ isActive }) =>
						isActive
							? `${classComponent}-link-active`
							: `${classComponent}-link`
					}
				>
					Iniciar sesión
				</NavLink>
				<NavLink
					to={'/registrarse'}
					className={({ isActive }) =>
						isActive
							? `${classComponent}-link-active`
							: `${classComponent}-link`
					}
				>
					Registrarse
				</NavLink>
			</div>
		</nav>
	);
};
