export const CloseSvg = ({ className, event }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 24 24'
			className={className}
			onClick={event}
		>
			<path
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='m7 7l10 10M7 17L17 7'
			/>
		</svg>
	);
};
