import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Subject, throwError, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap, catchError, retryWhen, retry } from "rxjs/operators";
import {SettingsService} from "./settings.service";
import { CartItem } from '../../../../shared/classes/cart-item';
import { Observable} from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-header-widgets',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingComponent implements OnInit {

    @Input() shoppingCartItems  :   CartItem[] = [];
    public show  :   boolean = false;
    public loading: boolean;
    public searchTerm = new Subject<string>();
    public baseUrl = "/api/v1/product/";
    public searchResults: any;
    public paginationElements: any;
    public errorMessage: any;
    public page:any;
    
    constructor(private searchService: SettingsService) { }
    
    public searchForm = new FormGroup({
      search: new FormControl('', Validators.required),
    });
    
  
    public search(){
      this.searchTerm.pipe(
        map((e: any) => {
          console.log(e.target.value);
          return e.target.value
        }),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(term => {
          this.loading = true;
          return this.searchService._searchEntries(term)
        }),
        catchError((e) => {
          //handle the error and return it
          console.log(e)
          this.loading = false;
          this.errorMessage = e.message;
          return throwError(e);
        }),
      ).subscribe(v => {
          this.loading = false;
          //return the results and pass the to the paginate module
          this.searchResults = v;
          this.paginationElements = this.searchResults;
      })
    }

   
  
    ngOnInit() {
      this.search();
    }

    public openSearch() {
      this.show = true;
    }
  
    public closeSearch() {
      this.show = false;
    }
  
  }

