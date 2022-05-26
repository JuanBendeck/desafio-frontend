import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable, startWith } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

export interface Country {
  name: string;
  alpha2Code: string;
  flag: string;  
  region: string;
  capital: string;
  callcode: any;
  demonym: string;
  languages: any;
  currencies: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

  filteredCountries!: Observable<Country[]>;
  countries: Country[] = [];
  selectedCountries: object[] = [];
  countryCtrl = new FormControl('',[Validators.required]);

  constructor(private dataService: DataService, private snackBar: MatSnackBar) {
    this.filteredCountries = this.countryCtrl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(country => (country ? this._filterCountries(country) : this.countries.slice())),
    );   
  }

  displayFn(country: Country): string {
    return country && country.name ? country.name : '';
  }

  private _filterCountries(value: string): Country[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
    this.getDsData();
  }

  getDsData(){
    const susbscription = this.dataService.getAllCountries().subscribe(value => 
      {
        if(value){      
        for (let i = 0; i < value.length; i++) {
          this.countries.push(
            {
             name: value[i].name,
             alpha2Code: value[i].alpha2Code,
             flag: value[i]['flags'].png,
             region: value[i].subregion,
             capital: value[i].capital,
             callcode: value[i].callingCodes[0],
             demonym: value[i].demonym,
             languages: value[i].languages,
             currencies: value[i].currencies})}
             this.snackBarControl('Data loaded successfully!');
        }
        if(susbscription){
          susbscription.unsubscribe();
        }
    }, error => {this.snackBarControl(error.message), console.error(error)}
      );
    // console.log(this.countries);
    // this.data$ = this.dataService.getAllCountries();    
  }

  
  selectedOption(country: Country){
    this.selectedCountries.push(country);
    this.countryCtrl.setValue('');
  }

  snackBarControl(message: string, actions?: string) {
    // console.log(message);
    this.snackBar.open(message, actions ? actions : '', {
      duration: 2500,
      panelClass: 'mat-snack-bar-totvs',
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
 

}
