import { useBlockAttributes } from '../../../../../assets/javascripts/hooks/useBlockAttributes';
import { __ } from '@wordpress/i18n';
import { useCallback } from '@wordpress/element';

export const useSetMapAttributes = () => {
	const { setAttributes } = useBlockAttributes();

	return useCallback( ( url ) => {
		const regex = RegExp( '/@(.*),(.*),(.*)z' );
		const params = url.match( regex );
		if ( params ) {
			const [ , lat, long, zoom ] = params;
			setAttributes( {
				latitude: parseFloat( lat ),
				longitude: parseFloat( long ),
				zoom: parseFloat( zoom ),
			} );
		} else {
			console.error( __( 'Please enter correct URL', 'statik-blocks' ) );
		}
	} );
};
