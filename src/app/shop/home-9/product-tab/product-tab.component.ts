import { Component, OnInit, Input } from "@angular/core";
import { Products } from "../../../shared/classes/product";
import { ProductsService } from "../../../shared/services/products.service";
import { HttpClient } from "@angular/common/http";
declare var $: any;

@Component({
  selector: "app-product-tab-nine",
  templateUrl: "./product-tab.component.html",
  styleUrls: ["./product-tab.component.scss"]
})
export class ProductTabNineComponent implements OnInit {
  // Get product Using Input
  @Input() products: Products;
  public productList: any = [];
  category_res = [];

  constructor(
    private productService: ProductsService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // tab js
    $("#tab-1").css("display", "Block");
    $(".default").css("display", "Block");
    $(".tabs li a").on("click", function() {
      event.preventDefault();
      $(this)
        .parent()
        .parent()
        .find("li")
        .removeClass("current");
      $(this)
        .parent()
        .addClass("current");
      var currunt_href = $(this).attr("href");
      $("#" + currunt_href).show();
      $(this)
        .parent()
        .parent()
        .parent()
        .find(".tab-content")
        .not("#" + currunt_href)
        .css("display", "none");
    });
    this.productService.getProducts().subscribe(data => {
      this.productList = data;
      console.log("productlist", this.productList);
    });

    this.productService.Category().subscribe((res) => {
      this.category_res = res
      console.log("Category:", res)});
    }
}