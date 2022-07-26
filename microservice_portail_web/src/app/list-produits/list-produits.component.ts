import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit";
import {ProduitService} from "../services/produit.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {

  produits! : Observable<Produit[]>;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produits = this.produitService.getProduits()
  }

}
