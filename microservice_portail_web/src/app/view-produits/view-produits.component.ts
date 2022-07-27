import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProduitService } from "../services/produit.service";
import { Produit } from "../model/produit";
import {CommandeService} from "../services/commande.service";

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
    private commandeService: CommandeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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

  addCommande() {
    const commande = {
      "produit": {
        "id": this.id,
      },
      "commandePayee": false,
      "dateCommande": new Date(),
      "quantite": 1
    }

    this.commandeService.addCommande(commande).subscribe(
      response => {
        this.router.navigate(['/payment'], { queryParams: { commandeId: response.id } })
      }
    )
  }
}
