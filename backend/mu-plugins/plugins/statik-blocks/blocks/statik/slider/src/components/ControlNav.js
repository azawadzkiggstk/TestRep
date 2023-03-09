import { ControlNavButton } from './ControlNavButton';
import { useInnerBlocks } from '../../../../../assets/javascripts/hooks/useInnerBlocks';

export const ControlNav = () => {
	const blocks = useInnerBlocks();

	return (
		<div className="wp-block-statik-slider__control-nav">
			{ blocks.map( ( block, index ) => (
				<ControlNavButton
					key={ block.clientId }
					index={ index }
					blockId={ block.clientId }
				/>
			) ) }
		</div>
	);
};
