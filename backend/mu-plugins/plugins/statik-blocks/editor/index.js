import { addFilter } from '@wordpress/hooks';
// import { use } from '@wordpress/data';
// import { addBlockPropsAttributePlugin } from '../assets/javascripts/redux/plugins/add-block-props-attribute';
import { addBlockPropsAttributeDefinition } from '../assets/javascripts/filters/add-block-props-attribute-definition';
import { addBlockPropsAttributeValue } from '../assets/javascripts/filters/add-block-props-attribute-value';
import { addBlockIdAttributeDefinition } from '../assets/javascripts/filters/add-block-id-attribute-definition';
import { addBlockIdAttributeValue } from '../assets/javascripts/filters/add-block-id-attribute-value';
import { addBlockFontVariations } from '../assets/javascripts/filters/add-block-font-variations';
import { unregisterNotOverriddenBlocks } from '../assets/javascripts/effects/unregister-not-overridden-blocks';
import { registerStatikStore } from '../assets/javascripts/redux/stores/statik';
import { addBlockEditAttributes } from '../assets/javascripts/filters/add-block-edit-attributes';

/**
 * Registers `statik` store via Gutenberg api
 */
registerStatikStore();

/**
 * Unregisters blocks which haven't been overridden (except `statik` blocks)
 */
if ( window.statikBlocks?.config?.coreBlocksEnabled === '1' ) {
	unregisterNotOverriddenBlocks();
}

/**
 * Adds `blockProps` attribute definition to the blocks' settings
 */
addFilter(
	'blocks.registerBlockType',
	'statik/add-block-props-attribute-definition',
	addBlockPropsAttributeDefinition
);

/**
 * Adds `blockId` attribute definition to the blocks' settings
 */
addFilter(
	'blocks.registerBlockType',
	'statik/add-block-id-attribute-definition',
	addBlockIdAttributeDefinition
);

/**
 * Adds `blockId` attribute value to the block
 */
addFilter(
	'blocks.getBlockAttributes',
	'statik/add-block-id-attribute-value',
	addBlockIdAttributeValue
);

/**
 * Adds `blockProps` attribute value to the block
 */
addFilter(
	'blocks.getBlockAttributes',
	'statik/add-block-props-attribute-value',
	addBlockPropsAttributeValue
);

/**
 * Adds Effects
 */
addFilter(
	'editor.BlockEdit',
	'statik/add-block-edit-attributes',
	addBlockEditAttributes
);

/**
 * Adds `Font Variations` panel to the blocks with `typography` support
 */
addFilter(
	'editor.BlockEdit',
	'statik/add-block-font-variations',
	addBlockFontVariations
);

/**
 * Adds `blockProps` attribute to the Redux `UPDATE_BLOCK_ATTRIBUTES` action
 */
// use( addBlockPropsAttributePlugin, {} );
