import {
	__experimentalDivider as Divider,
	__experimentalUnitControl as UnitControl,
	PanelBody,
} from '@wordpress/components';
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { ResponsiveSettingsTabs } from '../../../../../../assets/javascripts/components/ResponsiveSettingsTabs';
import { useBlockAttributes } from '../../../../../../assets/javascripts/hooks/useBlockAttributes';
import { useRwdAttribute } from '../../../../../../assets/javascripts/hooks/common/useRwdAttribute';
import { useCallback } from '@wordpress/element';

export function InspectorControls() {
	const { attributes, setAttributes } = useBlockAttributes();
	const { height } = attributes;
	const rwdHeight = useRwdAttribute( height );

	const setHeight = useCallback( ( tab ) => ( value ) => {
		rwdHeight.setDeviceValue( tab, value );
		setAttributes( {
			height: rwdHeight.toRwd(),
		} );
	} );

	return (
		<WPInspectorControls>
			<PanelBody title={ __( 'Spacer settings', 'statik-blocks' ) }>
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
