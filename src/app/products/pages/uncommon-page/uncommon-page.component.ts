import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

type Gender = 'male' | 'female' | '';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


  // i18nSelect Pipe
  public name: string = 'Alfonso';
  public gender: Gender = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
    '': 'invitarle'
  }

  changeClient(): void {
    switch (this.name) {
      case 'Alfonso':
        this.name = 'Melissa';
        this.gender = 'female';
        break;
      case 'Melissa':
        this.name = '';
        this.gender = '';
        break;
      default:
        this.name = 'Alfonso';
        this.gender = 'male';
        break;
    }
  }

  // i18nPlural Pipe
  public clients: string[] = [ 'María', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia' ];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos 1 cliente',
    '=2': 'tenemos 2 personas',
    'other': 'tenemos # clientes'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Alfonso',
    age: 56,
    address: 'Zaragoza, España'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(1000).pipe(
    tap( value => console.log( 'tap:', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa' );
      this.person.name = 'Otro nombre';
    }, 3500)
  })

}
