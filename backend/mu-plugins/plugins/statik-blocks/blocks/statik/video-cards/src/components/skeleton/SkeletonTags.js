import { Skeleton } from '../../../../../../assets/javascripts/components/skeleton/Skeleton';

export function SkeletonTags() {
	return (
		<>
			<li>
				<Skeleton.Inline>Lorem</Skeleton.Inline>
			</li>
			<li>
				<Skeleton.Inline>Dolor amet</Skeleton.Inline>
			</li>
		</>
	);
}
