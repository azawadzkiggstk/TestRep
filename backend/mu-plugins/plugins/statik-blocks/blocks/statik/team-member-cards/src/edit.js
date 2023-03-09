import { InspectorControls } from './components/ui/InspectorControls';
import { useBlockProps } from '@wordpress/block-editor';
import { TeamMemberCards } from './components/TeamMemberCards';
import { useSetBlockProps } from '../../../../assets/javascripts/hooks/useSetBlockProps';
import { useRwdAttribute } from '../../../../assets/javascripts/hooks/common/useRwdAttribute';
import { useBlockStyle } from '../../../../assets/javascripts/hooks/useBlockStyle';
import './editor.scss';

export default function TeamMemberCardsEdit( props ) {
	const { attributes } = props;

	const { cardsPerRow } = attributes;

	const blockProps = useBlockProps();

	useSetBlockProps();

	const cardsPreRowRwd = useRwdAttribute( cardsPerRow );

	const defaultStyle = useBlockStyle( `
		--wp-block-statik-team-member-cards--attr--cardsPerRow: ${ cardsPreRowRwd.inherit.default };
	` );

	const mobileStyle = useBlockStyle(
		`
		--wp-block-statik-team-member-cards--attr--cardsPerRow: ${ cardsPreRowRwd.inherit.mobile };
	`,
		{
			before: '@media (min-width: 0) {',
			after: '}',
		}
	);

	const tabletStyle = useBlockStyle(
		`
		--wp-block-statik-team-member-cards--attr--cardsPerRow: ${ cardsPreRowRwd.inherit.tablet };
	`,
		{
			before: '@media (min-width: 768px) {',
			after: '}',
		}
	);

	const desktopStyle = useBlockStyle(
		`
		--wp-block-statik-team-member-cards--attr--cardsPerRow: ${ cardsPreRowRwd.inherit.desktop };
	`,
		{
			before: '@media (min-width: 1000px) {',
			after: '}',
		}
	);

	return (
		<>
			<InspectorControls />
			<div { ...blockProps }>
				<style { ...defaultStyle } />
				<style { ...mobileStyle } />
				<style { ...tabletStyle } />
				<style { ...desktopStyle } />
				<TeamMemberCards />
			</div>
		</>
	);
}
