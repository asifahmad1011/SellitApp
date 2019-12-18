import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Products } from '../../../../shared/classes/product';
import { ProductsService } from '../../../../shared/services/products.service';
import { trigger, transition, style, animate } from "@angular/animations";
import * as _ from 'lodash'
import * as $ from 'jquery';


@Component({
  selector: 'app-collection-right-sidebar',
  templateUrl: './collection-right-sidebar.component.html',
  styleUrls: ['./collection-right-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [  // angular animation
    trigger('Animation', [
      transition('* => fadeOut', [
        style({ opacity: 0.1 }),
        animate(1000, style({ opacity: 0.1 }))
      ]),
      transition('* => fadeIn', [
         style({ opacity: 0.1 }),
         animate(1000, style({ opacity: 0.1 }))
      ])
    ])
  ]
})
export class CollectionRightSidebarComponent implements OnInit {

  //she
  selectedCategory;

  public products     :   Products[] = [];
  public items        :   Products[] = [];
  public allItems     :   Products[] = [];
  public colorFilters :   any[] = [];
  public tagsFilters  :   any[] = [];
  public tags         :   any[] = [];
  public colors       :   any[] = [];
  public sortByOrder  :   string = '';   // sorting
  public animation    :   any;   // Animation

  lastKey = ''      // key to offset next query from
  finished = false  // boolean when end of data is reached
 
   
  // constructor(private route: ActivatedRoute, private router: Router,
  //   private productsService: ProductsService) { 
  //      this.route.params.subscribe(params => {
  //         const category = params['category'];
  //         this.productsService.getProductByCategory(category).subscribe(products => {
  //            this.allItems = products  // all products
  //            this.products = products.slice(0,8)
  //            this.getTags(products)
  //            this.getColors(products)
  //         })
  //      });
  // }

  //She
  constructor(private productsService: ProductsService, private activeRoute: ActivatedRoute) { }

  ngOnInit() { 
    //she
    this.activeRoute.params.subscribe(p => {
      var categoryId = p['category_id'];

      this.productsService.getProductByCat(categoryId).subscribe(res => {
        console.log("Category Items:",res);
        this.selectedCategory = res;
      });

    })
  }
  

}
