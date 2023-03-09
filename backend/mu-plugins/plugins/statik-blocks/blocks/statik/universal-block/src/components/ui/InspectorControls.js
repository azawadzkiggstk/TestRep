import {
	__experimentalDivider as Divider,
	__experimentalUnitControl as UnitControl,
	PanelBody,
	SelectControl,
} from '@wordpress/components';
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';
import { useBlockAttributes } from '../../../../../../assets/javascripts/hooks/useBlockAttributes';
import { useRwdAttribute } from '../../../../../../assets/javascripts/hooks/common/useRwdAttribute';
import { useCallback, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { ResponsiveSettingsTabs } from '../../../../../../assets/javascripts/components/ResponsiveSettingsTabs';
import { useBlockData } from '../../../../../../assets/javascripts/hooks/useBlockData';

export function InspectorControls() {
	const { attributes, setAttributes } = useBlockAttributes();
	const { height, blockType, block } = attributes;

	const rwdHeight = useRwdAttribute( height );

	const blockData = useBlockData();

	const setHeight = useCallback( ( tab ) => ( value ) => {
		rwdHeight.setDeviceValue( tab, value );
		setAttributes( {
			height: rwdHeight.toRwd(),
		} );
	} );

	const blocksTypesOptions = useMemo( () => {
		return ( blockData.extra ?? [] ).map( ( blockTypeExtra ) => {
			return {
				value: blockTypeExtra.slug,
				label: blockTypeExtra.name,
			};
		} );
	}, [ blockData ] );

	const blocksOptionsByBlockType = useMemo( () => {
		const result = ( blockData.extra ?? [] ).map( ( blockTypeExtra ) => {
			const blocksOptions = ( blockTypeExtra.extra ?? [] ).map(
				( blockExtra ) => {
					return {
						value: blockExtra.slug,
						label: blockExtra.name,
					};
				}
			);
			return [ blockTypeExtra.slug, blocksOptions ];
		} );
		return new Map( result );
	}, [] );

	return (
		<WPInspectorControls>
			<PanelBody
				title={ __( 'Universal Block settings', 'statik-blocks' ) }
			>
				<SelectControl
					label={ __( 'Select block type', 'statik-blocks' ) }
					value={ blockType }
					onChange={ ( key ) => {
						setAttributes( { blockType: key, block: '' } );
					} }
					options={ [
						{
							value: '',
							label: __( 'Select block type…', 'statik-blocks' ),
							disabled: true,
						},
						...blocksTypesOptions,
					] }
				/>
				{ blockType && (
					<SelectControl
						label={ 'Select block' }
						value={ block }
						onChange={ ( value ) => {
							setAttributes( { block: value } );
						} }
						options={ [
							{
								value: '',
								label: __( 'Select block…', 'statik-blocks' ),
								disabled: true,
							},
							...blocksOptionsByBlockType.get( blockType ),
						] }
					/>
				) }
				<ResponsiveSettingsTabs>
					{ ( tab ) => {
						return (
							<>
								<Divider marginTop={ '0 !important' } />
								<UnitControl
									label={ __(
										'Vertical spacing',
										'statik-blocks'
									) }
									value={ rwdHeight.getDeviceValue(
										tab.name
									) }
									onChange={ setHeight( tab.name ) }
									step={ 1 }
									isPressEnterToChange={ true }
									placeholder={ __(
										'inherit',
										'statik-blocks'
									) }
									__unstableInputWidth="80px"
								/>
							</>
						);
					} }
				</ResponsiveSettingsTabs>
			</PanelBody>
		</WPInspectorControls>
	);
}
