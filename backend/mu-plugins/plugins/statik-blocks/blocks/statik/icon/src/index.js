import { registerBlockType } from '@wordpress/blocks';
import save from './save';
import icon from './icon';
import deprecated from './deprecated';
import metadata from '../block.json';
import edit from './edit';
import './style.scss';
import { saveResolver } from '../../../../assets/javascripts/components/blocks/save';

const settings = {
	icon,
	edit,
	save: saveResolver( save ),
	deprecated,
};

registerBlockType( metadata, settings );
