const MENU = {
	myMatrimony: [ 
		{        
			name: "Dashboard",
			link: "/dashboard"
		}
		,
		{
			name: "My Profile",
			link: "/my-profile"
		},
		{
			name: "Setting",
			link: "/my-account"
		},

	],
	matches: [
		{
			name: "New Matches",
			link: "/match"
		},
		// {
		// 	name: "My Matches(3)",
		// 	link: "/parner"
		// },
		// {
		// 	name: "Near Me(1)",
		// 	link: "near-me"
		// }
	],

	search: [

		{
			name: "Basic Search",
			link: "/search/basic-search"
		},

		{
			name: "Advanced Search",
			link: "/search/advanced-search"
		},
	],
	inbox: [
		{
			name: "Received",
			link: "/inbox/pending/interests"
		},

		{
			name: "Accepted",
			link: "/inbox/accepted/interests"
		},
		{
			name: "Requests",
			link: "/inbox/pending/requests"
		},

		{
			name: "Send",
			link: "/inbox/send/interests"
		},

		{
			name: "Deleted",
			link: "/inbox/archived/interests"
		},

	],
};
export { MENU };

