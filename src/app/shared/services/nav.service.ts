import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any
	public collapseSidebar: boolean = false

	constructor() {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}
	}

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

  MENUITEMS: Menu[] = [
    {
      title: 'Home', path: '/home', icon: 'anchor', type: 'link', badgeType: 'primary',  badgeValue: 'new',  active: true
    },
    {
      title: 'Listagem de usuários', path: '/usuario-lista', icon: 'anchor', type: 'link', badgeType: 'primary'
	},
	{
	  title: 'Cadastro de usuários', path: '/usuario-detalhe', icon: 'anchor', type: 'link', badgeType: 'primary'
	}
    ];

	/*
	MENUITEMS: Menu[] = [
		{
			title: 'Starter Kit', icon: 'anchor', type: 'sub', badgeType: 'primary',  badgeValue: 'new',  active: true, children:
				[
					{
						title: 'Color Version', type: 'sub', active: true, children: [
							{ path: '/sample/sample-component', title: 'Layout Light', type: 'link' },
							{ path: '/sample/sample-component', title: 'Layout Dark', type: 'link' }
						]
					},
					{
						title: 'Sidebar', type: 'sub', active: false, children: [
							{ path: '/sample/sample-component', title: 'Light Sidebar', type: 'link' },
							{ path: '/sample/sample-component', title: 'Compact Sidebar', type: 'link', },
							{ path: '/sample/sample-component', title: 'Compact Icon Sidebar', type: 'link' },
							{ path: '/sample/sample-component', title: 'Dark Sidebar', type: 'link' },
							{ path: '/sample/sample-component', title: 'Sidebar Hidden', type: 'link', },
							{ path: '/sample/sample-component', title: 'Sidebar Fixed', type: 'link' },
							{ path: '/sample/sample-component', title: 'Sidebar With Image', type: 'link' },
							{ path: '/sample/sample-component', title: 'Disable', type: 'link', },
						]
					},
					{
						title: 'Page Layout', type: 'sub', active: false, children: [
							{ path: '/sample/sample-component', title: 'Boxed', type: 'link', },
							{ path: '/sample/sample-component', title: 'RTL', type: 'link', },
							{ path: '/sample/sample-component', title: '1 Column', type: 'link' },
						]
					},
					{
						title: 'Menu Options', type: 'sub', active: false, children: [
							{ path: '/sample/sample-component', title: 'Hide menu on Scroll', type: 'link' },
							{ path: '/sample/sample-component', title: 'Vertical Menu', type: 'link' },
							{ path: '/sample/sample-component', title: 'Mega Menu', type: 'link', },
							{ path: '/sample/sample-component', title: 'Fix Header', type: 'link' },
							{ path: '/sample/sample-component', title: 'Fix Header & Sidebar', type: 'link' },
						]
					},
					{
						title: 'Footers', type: 'sub', active: false, children: [
							{ path: '/sample/sample-component', title: 'Footer Light', type: 'link', },
							{ path: '/sample/sample-component', title: 'Footer Dark', type: 'link' },
							{ path: '/sample/sample-component', title: 'Footer Fixed', type: 'link' },
						]
					}
				]
		},
		{
			path: '/sample/sample-component', title: 'Raise Support', icon: 'headphones', type: 'link'
		},
		{
			path: '/sample/sample-component', title: 'Documentation', icon: 'file-text', type: 'link'
		}
	]
	 */

	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);


}
