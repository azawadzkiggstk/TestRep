import {
	InspectorControls as WPInspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';
import {
	__experimentalUnitControl as UnitControl,
	PanelBody,
	BaseControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useBlockAttributes } from '../../../../../../assets/javascripts/hooks/useBlockAttributes';
import { useIsIconBorderRespected } from '../../hooks/useIsIconBorderRespected';
import { useIsAccentColorRespected } from '../../hooks/useIsAccentColorRespected';
import { useIsIconColorRespected } from '../../hooks/useIsIconColorRespected';
import { useCallback } from '@wordpress/element';

const units = [ { value: 'px', label: 'px', default: 0 } ];

export function InspectorControls() {
	const { attributes, setAttributes } = useBlockAttributes();
	const { iconColor, accentColor, iconSize, iconSpacing, iconBorder } =
		attributes;

	const handleIconSizeChange = useCallback( ( newIconSize ) =>
		setAttributes( { iconSize: newIconSize } )
	);
	const handleIconSpacingChange = useCallback( ( newIconSpacing ) =>
		setAttributes( { iconSpacing: newIconSpacing } )
	);
	const handleIconBorderChange = useCallback( ( newIconBorder ) =>
		setAttributes( { iconBorder: newIconBorder } )
	);

	const handleIconColorChange = useCallback( ( newIconColor ) =>
		setAttributes( { iconColor: newIconColor } )
	);
	const handleAccentColorChange = useCallback( ( newAccentColor ) =>
		setAttributes( { accentColor: newAccentColor } )
	);

	const isBorderRespected = useIsIconBorderRespected();
	const isIconColorRespected = useIsIconColorRespected();
	const isAccentColorRespected = useIsAccentColorRespected();

	const colorSettings = [
		...( isIconColorRespected
			? [
					{
						value: iconColor,
						onChange: handleIconColorChange,
						label: __( 'Icon color', 'statik-blocks' ),
					},
			  ]
			: [] ),
		...( isAccentColorRespected
			? [
					{
						value: accentColor,
						onChange: handleAccentColorChange,
						label: __( 'Accent color', 'statik-blocks' ),
					},
			  ]
			: [] ),
	];

	return (
		<>
			<WPInspectorControls>
				<PanelBody title={ __( 'Icon settings', 'statik-blocks' ) }>
					<BaseControl>
						<UnitControl
							label={ __( 'Height of an icon', 'statik-blocks' ) }
							value={ iconSize }
							onChange={ handleIconSizeChange }
							units={ units }
							step={ 1 }
							min={ 0 }
							isPressEnterToChange={ true }
							__unstableInputWidth="80px"
						/>
					</BaseControl>
					<BaseControl>
						<UnitControl
							label={ __(
								'Icon wrapper spacing',
								'statik-blocks'
							) }
							value={ iconSpacing }
							onChange={ handleIconSpacingChange }
							units={ units }
							step={ 1 }
							min={ 0 }
							isPressEnterToChange={ true }
							__unstableInputWidth="80px"
						/>
					</BaseControl>
					{ isBorderRespected && (
						<BaseControl>
							<UnitControl
								label={ __( 'Icon outline', 'statik-blocks' ) }
								value={ iconBorder }
								onChange={ handleIconBorderChange }
								units={ units }
								step={ 1 }
								min={ 0 }
								isPressEnterToChange={ true }
								__unstableInputWidth="80px"
							/>
						</BaseControl>
					) }
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Color settings', 'statik-blocks' ) }
					colorSettings={ colorSettings }
				/>
			</WPInspectorControls>
		</>
	);
}
