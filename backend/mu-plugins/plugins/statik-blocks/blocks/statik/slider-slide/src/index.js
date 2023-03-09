import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import icon from './icon';
import save from './save';
import deprecated from './deprecated';
import metadata from '../block.json';
import './style.scss';
import { saveResolver } from '../../../../assets/javascripts/components/blocks/save';

const settings = {
	icon,
	edit,
	save: saveResolver( save ),
	deprecated,
};

registerBlockType( metadata, settings );
