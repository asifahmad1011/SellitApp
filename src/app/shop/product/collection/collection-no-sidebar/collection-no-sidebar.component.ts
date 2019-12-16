import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Products } from '../../../../shared/classes/product';
import { ProductsService } from '../../../../shared/services/products.service';
import { PaginationService } from '../../../../shared/classes/paginate'
import { trigger, transition, style, animate } from "@angular/animations";
import { CollectionService } from './collection-no-sidebar.service';


@Component({
  selector: 'app-collection-no-sidebar',
  templateUrl: './collection-no-sidebar.component.html',
  styleUrls: ['./collection-no-sidebar.component.scss'],

})


export class CollectionNoSidebarComponent implements OnInit {

  private allProduct   :   Products[] = [];
  public  products     :   Products[] = [];
  public  sortByOrder  :   string = '';   // sorting
  public  animation    :   any;   // Animation
  paginate: any = {};
  selectedProduct;

  constructor(private route: ActivatedRoute, private router: Router, private activeRoute: ActivatedRoute,
    private productsService: ProductsService, private CollectionService: CollectionService, private paginateService: PaginationService) {

    }
  

  ngOnInit() { 
 
    this.activeRoute.params.subscribe(p => {
      var category_id = p['id'];

      this.CollectionService.getCategoryById(category_id).subscribe(res => {
        console.log("Category Data",res);
        this.selectedProduct = res;
      });

    })

   }
}
