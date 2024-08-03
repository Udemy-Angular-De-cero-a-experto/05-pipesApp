import { Component } from '@angular/core';

import { MenuItem, MessageService } from 'primeng/api';

import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``,
  providers: [MessageService]
})
export class OrderComponent {

  public menuItems: MenuItem[];

  public keysMap = {
    'name': 'NOMBRE',
    'canFly': 'VUELA',
    'color': 'COLOR'
  }

  public isUpperCase: boolean = true;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    },
  ];

  constructor(private messageService: MessageService) {
    this.menuItems = [
        {
            label: 'Nombre',
            command: () => {
                this.changeOrder('name');
                this.messageService.add({ severity: 'success', summary: 'Ordenar por:', detail: 'NOMBRE' });
              }
            },
            {
              label: 'Vuela',
              command: () => {
                this.changeOrder('canFly');
                this.messageService.add({ severity: 'success', summary: 'Ordenado por:', detail: 'VUELA' });
              }
            },
            {
              label: 'Color',
              command: () => {
                this.changeOrder('color');
                this.messageService.add({ severity: 'success', summary: 'Ordenado por:', detail: 'COLOR' });
            }
        },
    ];
  }

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero ): void {
    this.orderBy = value;
    this.messageService.add({ severity: 'success', summary: 'Ordenado por:', detail: value.toUpperCase() });
  }

}
