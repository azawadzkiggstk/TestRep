import { useBlockAttributes } from '../../../../../assets/javascripts/hooks/useBlockAttributes';
import { useInnerBlocksIds } from '../../../../../assets/javascripts/hooks/useInnerBlocksIds';
import { useEffect, useState } from '@wordpress/element';
import { useInnerBlocks } from '../../../../../assets/javascripts/hooks/useInnerBlocks';

export const useTabsEffects = () => {
	const { attributes, setAttributes } = useBlockAttributes();
	const { activeTab, preSelectedTab } = attributes;

	const innerBlocks = useInnerBlocks();
	const innerBlocksIds = useInnerBlocksIds();
	const hasInnerBlocks = innerBlocksIds.length > 0;

	const [ activeTabId, setActiveTabId ] = useState(
		() => innerBlocksIds[ activeTab ]
	);
	const [ preSelectedTabId, setPreSelectedTabId ] = useState(
		() => innerBlocksIds[ preSelectedTab ]
	);

	/**
	 *  Update `activeTabId` if  `activeTab` has changed
	 */
	useEffect( () => {
		if ( hasInnerBlocks ) {
			setActiveTabId( innerBlocksIds[ activeTab ] );
		}
	}, [ activeTab ] );

	/**
	 *  Update `preSelectedTabId` if  `preSelectedTab` has changed
	 */
	useEffect( () => {
		if ( hasInnerBlocks ) {
			setPreSelectedTabId( innerBlocksIds[ preSelectedTab ] );
		}
	}, [ preSelectedTab ] );

	/**
	 * Update `activeTab`/`preSelectedTab` if the InnerBlocks order or length has changed
	 * (to point to the same slide which was set previously)
	 */
	useEffect( () => {
		// Update `activeTab` attr
		if ( hasInnerBlocks ) {
			if ( innerBlocksIds.includes( activeTabId ) ) {
				setAttributes( {
					activeTab: innerBlocksIds.indexOf( activeTabId ),
				} );
			} else {
				setAttributes( {
					activeTab: Math.max( 0, activeTab - 1 ),
				} );
			}
		}

		// Update `preSelectedTab` attr
		if ( hasInnerBlocks ) {
			if ( innerBlocksIds.includes( preSelectedTabId ) ) {
				setAttributes( {
					preSelectedTab: innerBlocksIds.indexOf( preSelectedTabId ),
				} );
			} else {
				setAttributes( {
					preSelectedTab: Math.max( 0, preSelectedTab - 1 ),
				} );
			}
		}
	}, [ innerBlocksIds ] );

	/**
	 * Update `tabs` attribute if the InnerBlocks have changed
	 */
	useEffect( () => {
		const tabs = innerBlocks.map( ( block ) => {
			const { blockId, title, description, tabClassName } =
				block.attributes;
			return {
				blockId,
				title,
				description,
				tabClassName,
			};
		} );

		setAttributes( {
			tabs,
		} );
	}, [ innerBlocks ] );
};
