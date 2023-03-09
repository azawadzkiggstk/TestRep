import { useBlockAttributes } from '../../../../../../assets/javascripts/hooks/useBlockAttributes';
import { PanelBody, ToggleControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	__experimentalColorGradientControl as ColorGradientControl,
	InspectorControls as WPInspectorControls,
	useSetting,
} from '@wordpress/block-editor';
import { useCallback } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { useInnerBlocks } from '../../../../../../assets/javascripts/hooks/useInnerBlocks';

export function InspectorControls() {
	const { attributes, setAttributes } = useBlockAttributes();
	const {
		showToggleIcon,
		openOnlyOne,
		headerBackgroundColor,
		headerTextColor,
		contentBackgroundColor,
		contentTextColor,
	} = attributes;

	const innerBlocks = useInnerBlocks();
	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

	const colors = useSetting( 'color.palette' ) || [];
	const headerSelectors = [ 'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ];
	const finalHeaderSelectors = headerSelectors.map( ( selector ) => {
		return {
			label: selector,
			value: selector,
		};
	} );

	const activeHeaderSelector = innerBlocks[ 0 ]
		? innerBlocks[ 0 ].attributes.headerSelector
		: 'h3';

	const setHeaderBackgroundColor = useCallback( ( value ) => {
		setAttributes( {
			headerBackgroundColor: value ? value : '',
		} );
	} );

	const setHeaderTextColor = useCallback( ( value ) => {
		setAttributes( {
			headerTextColor: value ? value : '',
		} );
	} );

	const setContentBackgroundColor = useCallback( ( value ) => {
		setAttributes( {
			contentBackgroundColor: value ? value : '',
		} );
	} );

	const setContentTextColor = useCallback( ( value ) => {
		setAttributes( {
			contentTextColor: value ? value : '',
		} );
	} );

	const toggleShowToggleIcon = useCallback( () => {
		setAttributes( {
			showToggleIcon: ! showToggleIcon,
		} );
	} );

	const toggleOpenOnlyOne = useCallback( () => {
		setAttributes( {
			openOnlyOne: ! openOnlyOne,
		} );
	} );

	const setHeaderSelector = useCallback( ( value ) => {
		innerBlocks.forEach( ( innerBlock ) => {
			updateBlockAttributes( innerBlock.clientId, {
				headerSelector: value,
			} );
		} );
	} );

	return (
		<WPInspectorControls>
			<PanelBody title={ __( 'Accordion settings', 'statik-blocks' ) }>
				<ToggleControl
					label={ __( 'Display toggle Icons', 'statik-blocks' ) }
					checked={ showToggleIcon }
					onChange={ toggleShowToggleIcon }
				/>
				<ToggleControl
					label={ __(
						'Allow one item expanded at the time',
						'statik-blocks'
					) }
					checked={ openOnlyOne }
					onChange={ toggleOpenOnlyOne }
				/>
			</PanelBody>
			<PanelBody
				title={ __( 'Header Settings', 'statik-blocks' ) }
				initialOpen={ false }
			>
				<SelectControl
					label={ __( 'Header selector', 'statik-blocks' ) }
					options={ finalHeaderSelectors }
					value={ activeHeaderSelector }
					onChange={ setHeaderSelector }
				/>
				<ColorGradientControl
					label={ __( 'Background color', 'statik-blocks' ) }
					colorValue={ headerBackgroundColor }
					colors={ colors }
					gradients={ undefined }
					disableCustomColors={ false }
					disableCustomGradients={ true }
					onColorChange={ setHeaderBackgroundColor }
				/>
				<ColorGradientControl
					label={ __( 'Text color', 'statik-blocks' ) }
					colorValue={ headerTextColor }
					colors={ colors }
					gradients={ undefined }
					disableCustomColors={ false }
					disableCustomGradients={ true }
					onColorChange={ setHeaderTextColor }
				/>
			</PanelBody>
			<PanelBody
				title={ __( 'Content Settings', 'statik-blocks' ) }
				initialOpen={ false }
			>
				<ColorGradientControl
					label={ __( 'Background color', 'statik-blocks' ) }
					colorValue={ contentBackgroundColor }
					colors={ colors }
					gradients={ undefined }
					disableCustomColors={ false }
					disableCustomGradients={ true }
					onColorChange={ setContentBackgroundColor }
				/>
				<ColorGradientControl
					label={ __( 'Text color', 'statik-blocks' ) }
					colorValue={ contentTextColor }
					colors={ colors }
					gradients={ undefined }
					disableCustomColors={ false }
					disableCustomGradients={ true }
					onColorChange={ setContentTextColor }
				/>
			</PanelBody>
		</WPInspectorControls>
	);
}
