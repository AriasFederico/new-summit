import './Hero.scss';
import { Link } from 'react-router-dom';
import banner from '../../../../public/hero.png';
export const Hero = () => {
	const classComponent = 'Hero';
	return (
		<main className={classComponent}>
			<section className={`${classComponent}-cont`}>
				<div className={`${classComponent}-item-fx`}>
					<TitleHero className={`${classComponent}-h1`} />
					<ParagraphHero className={`${classComponent}-p`} />
					<LinkHero className={`${classComponent}-link`} />
				</div>
				<img
					src={banner}
					alt='Calculadoras y lista de precios'
					className={`${classComponent}-banner`}
					data-aos={'zoom'}
					data-aos-duration={1500}
				/>
			</section>
		</main>
	);
};

export const ParagraphHero = ({ className }) => {
	return (
		<p className={className}>
			Summit es una aplicación web gratuita e innovadora diseñada para facilitar
			la gestión y el cálculo de precios de manera rápida y eficiente, pensada
			para pequeños negocios y emprendedores
		</p>
	);
};

export const TitleHero = ({ className }) => {
	return <h1 className={className}>Optimiza precios, impulsa ganancias</h1>;
};

export const LinkHero = ({ className }) => {
	return (
		<Link className={className} to={'#'}>
			Registra tu negocio ahora!
		</Link>
	);
};
