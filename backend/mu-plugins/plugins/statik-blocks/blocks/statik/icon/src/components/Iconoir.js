import { memo, createElement } from '@wordpress/element';
import sprites from '../assets/icons/iconoir.svg';

export const Iconoir = memo( ( props ) => {
	const { icon, width = 24, height = 24, ...restProps } = props;

	const svgProps = { href: `${ sprites }#${ icon }` };

	return (
		<svg width={ width } height={ height } { ...restProps }>
			{ createElement( 'use', svgProps ) }
		</svg>
	);
} );
