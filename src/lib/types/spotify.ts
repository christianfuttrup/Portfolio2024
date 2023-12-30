export interface SpotifyData {
	timestamp: number;
	context: SpotifyContext;
	progress_ms: number;
	item: SpotifyItem;
	currently_playing_type: string;
	actions: SpotifyActions;
	is_playing: boolean;
}

interface SpotifyContext {
	external_urls: SpotifyExternalUrls;
	href: string;
	type: string;
	uri: string;
}

interface SpotifyItem {
	album: SpotifyAlbum;
	artists: SpotifyArtist[];
	available_markets: string[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_ids: SpotifyExternalIds;
	external_urls: SpotifyExternalUrls;
	href: string;
	id: string;
	is_local: boolean;
	name: string;
	popularity: number;
	preview_url: string;
	track_number: number;
	type: string;
	uri: string;
}

interface SpotifyAlbum {
	album_type: string;
	artists: SpotifyArtist[];
	available_markets: string[];
	external_urls: SpotifyExternalUrls;
	href: string;
	id: string;
	images: SpotifyImage[];
	name: string;
	release_date: string;
	release_date_precision: string;
	total_tracks: number;
	type: string;
	uri: string;
}

interface SpotifyArtist {
	external_urls: SpotifyExternalUrls;
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
}

interface SpotifyImage {
	height: number;
	url: string;
	width: number;
}

interface SpotifyExternalUrls {
	spotify: string;
}

interface SpotifyExternalIds {
	isrc: string;
}

interface SpotifyActions {
	disallows: SpotifyDisallows;
}

interface SpotifyDisallows {
	resuming: boolean;
	toggling_repeat_context: boolean;
	toggling_repeat_track: boolean;
	toggling_shuffle: boolean;
}
