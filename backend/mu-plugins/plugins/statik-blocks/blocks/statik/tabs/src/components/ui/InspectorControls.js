import {
	__experimentalColorGradientControl as ColorGradientControl,
	InspectorControls as WPInspectorControls,
	useSetting,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useInnerBlocks } from '../../../../../../assets/javascripts/hooks/useInnerBlocks';
import { useBlockAttributes } from '../../../../../../assets/javascripts/hooks/useBlockAttributes';
import { useCallback, useMemo } from '@wordpress/element';

export function InspectorControls() {
	const { setAttributes, attributes } = useBlockAttributes();

	const {
		descriptionEnabled,
		preSelectedTab,
		tabsAlignment,
		textColor,
		accentColor,
		activeTextColor,
		activeAccentColor,
		contentTextColor,
		contentBackgroundColor,
	} = attributes;

	const innerBlocks = useInnerBlocks();
	const colors = useSetting( 'color.palette' ) || [];

	const tabs = useMemo( () => {
		return innerBlocks.map( ( tab, index ) => ( {
			value: index,
			label: tab.attributes.title,
		} ) );
	}, [ innerBlocks ] );

	const alignment = [
		{ value: 'left', label: __( 'Left', 'statik-blocks' ) },
		{ value: 'center', label: __( 'Center', 'statik-blocks' ) },
		{ value: 'right', label: __( 'Right', 'statik-blocks' ) },
	];

	const setDescriptionEnabled = useCallback( ( value ) => {
		setAttributes( { descriptionEnabled: value } );
	} );

	const setPreSelectedTab = useCallback( ( value ) => {
		setAttributes( { preSelectedTab: Number( value ) } );
	} );

	const setTabsAlignment = useCallback( ( value ) => {
		setAttributes( { tabsAlignment: value } );
	} );

	const setAccentColor = useCallback( ( value ) => {
		setAttributes( { accentColor: value ? value : '' } );
	} );

	const setActiveAccentColor = useCallback( ( value ) => {
		setAttributes( { activeAccentColor: value ? value : '' } );
	} );

	const setTextColor = useCallback( ( value ) => {
		setAttributes( { textColor: value ? value : '' } );
	} );

	const setActiveTextColor = useCallback( ( value ) => {
		setAttributes( { activeTextColor: value ? value : '' } );
	} );

	const setContentBackgroundColor = useCallback( ( value ) => {
		setAttributes( { contentBackgroundColor: value ? value : '' } );
	} );

	const setContentTextColor = useCallback( ( value ) => {
		setAttributes( { contentTextColor: value ? value : '' } );
	} );

	return (
		<>
			<WPInspectorControls>
				<PanelBody title={ __( 'Tabs Selector', 'statik-blocks' ) }>
					<ToggleControl
						label="Tab Descriptions"
						checked={ descriptionEnabled }
						onChange={ setDescriptionEnabled }
					/>
					<SelectControl
						label={ __( 'Pre-selected Tab', 'statik-blocks' ) }
						value={ preSelectedTab }
						onChange={ setPreSelectedTab }
						options={ tabs }
					/>
					<SelectControl
						label={ __( 'Selector alignment', 'statik-blocks' ) }
						value={ tabsAlignment }
						onChange={ setTabsAlignment }
						options={ alignment }
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Tabs Selector Settings', 'statik-blocks' ) }
				>
					<ColorGradientControl
						label={ __( 'Accent color', 'statik-blocks' ) }
						colors={ colors }
						colorValue={ accentColor }
						onColorChange={ setAccentColor }
						gradients={ undefined }
						disableCustomColors={ false }
						disableCustomGradients={ true }
					/>
					<ColorGradientControl
						label={ __( 'Active accent color', 'statik-blocks' ) }
						colors={ colors }
						colorValue={ activeAccentColor }
						onColorChange={ setActiveAccentColor }
						gradients={ undefined }
						disableCustomColors={ false }
						disableCustomGradients={ true }
					/>
					<ColorGradientControl
						label={ __( 'Text color', 'statik-blocks' ) }
						colors={ colors }
						colorValue={ textColor }
						onColorChange={ setTextColor }
						gradients={ undefined }
						disableCustomColors={ false }
						disableCustomGradients={ true }
					/>
					<ColorGradientControl
						label={ __( 'Active text color', 'statik-blocks' ) }
						colors={ colors }
						colorValue={ activeTextColor }
						onColorChange={ setActiveTextColor }
						gradients={ undefined }
						disableCustomColors={ false }
						disableCustomGradients={ true }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Content Settings', 'statik-blocks' ) }>
					<ColorGradientControl
						label={ __( 'Background color', 'statik-blocks' ) }
						colors={ colors }
						colorValue={ contentBackgroundColor }
						onColorChange={ setContentBackgroundColor }
						gradients={ undefined }
						disableCustomColors={ false }
						disableCustomGradients={ true }
					/>
					<ColorGradientControl
						label={ __( 'Text color', 'statik-blocks' ) }
						colors={ colors }
						colorValue={ contentTextColor }
						onColorChange={ setContentTextColor }
						gradients={ undefined }
						disableCustomColors={ false }
						disableCustomGradients={ true }
					/>
				</PanelBody>
			</WPInspectorControls>
		</>
	);
}
