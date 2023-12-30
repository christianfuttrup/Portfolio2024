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

export interface GitHubData {
	id: string;
	type: string;
	actor: Actor;
	repo: Repo;
	payload: Payload;
	public: boolean;
	created_at: string;
}

export interface GitHubCommit {
	commit: CommitDetail;
	committer: GitHubUser;
	repository: Repo;
	sha: string;
}

interface CommitDetail {
	author: AuthorCommitter;
	committer: AuthorCommitter;
	message: string;
	tree: Tree;
	url: string;
	comment_count: number;
	verification: Verification;
}

interface AuthorCommitter {
	name: string;
	email: string;
	date: string;
}

interface Tree {
	sha: string;
	url: string;
}

interface Verification {
	verified: boolean;
	reason: string;
	signature: null | string;
	payload: null | string;
}

interface GitHubUser {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
}

export interface GitHubResponse {
	profile: GitHubData;
	commit: GitHubCommit;
}
