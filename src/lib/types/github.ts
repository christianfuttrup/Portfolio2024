interface Actor {
	id: number;
	login: string;
	display_login: string;
	gravatar_id: string;
	url: string;
	avatar_url: string;
}

interface Repo {
	id: number;
	name: string;
	url: string;
}

interface Commit {
	sha: string;
	author: {
		email: string;
		name: string;
	};
	message: string;
	distinct: boolean;
	url: string;
}

interface Payload {
	push_id?: number;
	size?: number;
	distinct_size?: number;
	ref?: string;
	head?: string;
	before?: string;
	commits?: Commit[];
	repository_id?: number;
	ref_type?: string;
	master_branch?: string;
	description?: string;
	pusher_type?: string;
}

export interface GitHubEvent {
	id: string;
	type: string;
	actor: Actor;
	repo: Repo;
	payload: Payload;
	public: boolean;
	created_at: string;
}
