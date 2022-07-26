import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProduitService } from "../services/produit.service";
import { Produit } from "../model/produit";

@Component({
  selector: 'app-view-produits',
  templateUrl: './view-produits.component.html',
  styleUrls: ['./view-produits.component.css']
})
export class ViewProduitsComponent implements OnInit {
  id!: number;
  produit!: Produit;
  imageUrl!: string;

  constructor(
    private produitService: ProduitService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.produit = new Produit(0, "", "", 0, "");
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.produitService.getProduitById(this.id).subscribe(produit => {
        this.produit = produit;
        this.imageUrl = `http://localhost:8080/images/${this.produit.image}`;
      })
    });
  }
}
