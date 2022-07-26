export class Produit {
  id:number;
  description:string;
  image:string;
  prix:number;
  titre:string;


  constructor(id: number, description: string, image: string, prix: number, titre: string) {
    this.id = id;
    this.description = description;
    this.image = image;
    this.prix = prix;
    this.titre = titre;
  }
}
