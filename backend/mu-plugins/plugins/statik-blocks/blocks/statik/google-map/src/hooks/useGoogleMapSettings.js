import { useBlockData } from '../../../../../assets/javascripts/hooks/useBlockData';

export function useGoogleMapSettings() {
	const data = useBlockData();

	return {
		apiToken: data?.settings?.apiToken,
	};
}
