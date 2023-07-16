export type IMenuItem = {
	name: string,
	link: string
}


export type IMenu = {
	// key        : value 
	[type: string]: IMenuItem[]
}

