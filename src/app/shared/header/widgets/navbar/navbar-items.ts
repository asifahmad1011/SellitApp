// Menu
export interface Menu {
  path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
  megaMenuType?: string; // small, medium, large
  image?: string;
  children?: Menu[];
}

export const MENUITEMS: Menu[] = [

	
	{
		title: 'Category', type: 'sub', megaMenu: true, megaMenuType: 'large', children: [
	      { 
	      	title: 'Electronics',  type: 'link', children: [
		      	{ path: '/pages/search/', title: 'Apple Products',  type: 'link' },
		      	{ path: '/home/nine/', title: 'Mobile Phones',  type: 'link' },
		      	{ path: '/home/nine/', title: 'Laptop',  type: 'link' },
		      	{ path: '/home/nine/', title: 'Desktop PC',  type: 'link' },
		      	{ path: '/home/nine/', title: 'LED/LCD TV',  type: 'link' },
		      	{ path: '/home/nine/', title: 'Speakers',  type: 'link' }
	      	]
	      },
	      { 
	      	title: 'Cars',  type: 'link', children: [
		      	{ path: '/home/nine/', title: 'Automatic',  type: 'link' },
		      	{ path: '/home/nine/', title: 'Manual',  type: 'link' },
		      	{ path: '/home/nine/', title: 'Sedan',  type: 'link' },
		      	{ path: '/home/nine/', title: 'Hatchback',  type: 'link' },
		      	{ path: '/home/nine/', title: 'Sports',  type: 'link' },
		      	{ path: '/home/nine/', title: 'Minitruck',  type: 'link' }
	      	]
	      },
	      { 
	      	title: 'Jobs',  type: 'link', children: [
		      	{ path: '/home/nine/', title: 'Full-Time',  type: 'link' },
		      	{ path: '/home/nine/', title: 'Part-Time',  type: 'link' },
		      	{ path: '/home/nine/', title: 'Students',  type: 'link' },
		      	{ path: '/home/nine/', title: 'Contract',  type: 'link' },
		      	{ path: '/home/nine/', title: 'Master-Thesis',  type: 'link' },
		      	{ path: '/home/nine/', title: 'Internship',  type: 'link' }
	      	]
	      },
	      { 
	      	title: 'Others',  type: 'link', children: [
		      	{ path: '/home/nine', title: 'Bike',  type: 'link' },
		      	{ path: '/home/nine', title: 'Bicycle',  type: 'link' },
		      	{ path: '/home/nine', title: 'Books',  type: 'link' },
		      	{ path: '/home/nine', title: 'Furniture',  type: 'link' },
		      	{ path: '/home/nine', title: 'Home-Appliances',  type: 'link' },
		      	{ path: '/home/nine', title: '',  type: 'link' }
	      	]
	      },
	    ]
	},
]