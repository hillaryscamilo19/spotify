import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  mainMenu: {
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = { defaultOptions: [], accessLink: [] };
  customOptions: Array<any> = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu Biblioteca',
        icon: 'uil uil-book',
        router: ['/', 'favorites'],
        query: {hola: 'mundo'}
      },
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear Playlist',
        icon: 'uil uil-plus-square'
      },
      {
        name: 'Tus me gusta',
        icon: 'uil uil-heart'
      },
      {
        name: 'Tus episodio',
        icon: 'uil uil-bookmark-full'
      }
    ]

    this.customOptions = [
      {
        name: 'My Playlist #1',
        router:['/']
      },
      {
        name: 'My Playlist #2',
        router:['/']
      },
      {
        name: 'My Playlist #3',
        router:['/']
      },
      {
        name: 'My Playlist #4',
        router:['/']
      },
    ]
  }
  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  }
}
