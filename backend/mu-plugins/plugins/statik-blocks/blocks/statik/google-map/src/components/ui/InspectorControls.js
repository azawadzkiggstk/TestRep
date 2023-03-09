import { useBlockAttributes } from '../../../../../../assets/javascripts/hooks/useBlockAttributes';
import { MapStyles } from './MapStyles';
import { __ } from '@wordpress/i18n';
import {
	__experimentalUnitControl as UnitControl,
	PanelBody,
	ToggleControl,
	BaseControl,
} from '@wordpress/components';
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';
import { useCallback } from '@wordpress/element';

export function InspectorControls() {
	const { attributes, setAttributes } = useBlockAttributes();
	const { showMarker, mapStyle, height } = attributes;

	const changeMapStyle = useCallback( ( value ) => {
		setAttributes( { mapStyle: value } );
	} );

	const changeMapHeight = useCallback( ( value ) => {
		setAttributes( { height: value } );
	} );

	const toggleMapMarker = useCallback( ( value ) => {
		setAttributes( { showMarker: value } );
	} );

	return (
		<WPInspectorControls>
			<PanelBody
				title={ __( 'Map style', 'statik-blocks' ) }
				initialOpen={ true }
			>
				<MapStyles value={ mapStyle } onChange={ changeMapStyle } />
			</PanelBody>
			<PanelBody title={ __( 'Google map settings', 'statik-blocks' ) }>
				<BaseControl>
					<UnitControl
						label={ __( 'Height of a Map', 'statik-blocks' ) }
						placeholder={ __( 'inherit', 'statik-blocks' ) }
						value={ height }
						isPressEnterToChange={ true }
						onChange={ changeMapHeight }
						step={ 1 }
						__unstableInputWidth="80px"
					/>
				</BaseControl>
				<BaseControl>
					<ToggleControl
						title={ __( 'Marker', 'statik-blocks' ) }
						label={ __( 'Show Marker', 'statik-blocks' ) }
						checked={ showMarker }
						onChange={ toggleMapMarker }
					/>
				</BaseControl>
			</PanelBody>
		</WPInspectorControls>
	);
}
