import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../model/produit";

@Component({
  selector: 'app-card-produit',
  templateUrl: './card-produit.component.html',
  styleUrls: ['./card-produit.component.css']
})
export class CardProduitComponent {

  @Input() produit!: Produit;

  constructor() {
  }

}
