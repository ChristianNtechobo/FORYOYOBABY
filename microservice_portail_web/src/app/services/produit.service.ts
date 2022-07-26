import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../model/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) {
  }

  getProduits(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/produits')
  }

  getProduitById(id:number): Observable<Produit> {
    return this.http.get<Produit>('http://localhost:8080/produits/'+id)
  }
}
