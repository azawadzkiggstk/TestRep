/**
 * WordPress dependencies
 */
import icon from './assets/icon';

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';
import metadata from '../block.json';
import save from './save';
import { overrideBlockType } from '../../../../assets/javascripts/helpers/overrideBlockType';

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon,
	edit,
	save,
	deprecated,
};

overrideBlockType( name, metadata, settings );
