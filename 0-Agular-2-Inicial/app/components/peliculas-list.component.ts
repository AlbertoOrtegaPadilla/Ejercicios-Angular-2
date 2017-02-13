import{Component}from "angular2/core";
import{Pelicula}from "../model/pelicula";
import{PeliculasService} from "../services/peliculas.service";
import{ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
    selector: "peliculas-list",
    templateUrl:"app/view/peliculas-list.html",
    providers: [PeliculasService],
    directives: [ROUTER_DIRECTIVES]
})

export class PeliculasListComponent{
    
    public pelicula:Pelicula;
    public peliculaElegida:Pelicula;
    public mostrarDatos:boolean;
    public peliculas;

    constructor(private _peliculasService: PeliculasService){

        this.mostrarDatos = false;
        
        //this.holaMundo();

        this.peliculas = this._peliculasService.getPeliculas();
        
        this.peliculaElegida = this.peliculas[0];
        this.pelicula = this.peliculas[0];
    }

    holaMundo(){
      alert("Pelicula: " + this.pelicula.titulo + " - " + this.pelicula.director);
    }

    onShowHide(value){
      this.mostrarDatos = value;
    }

    onLog(titulo  = null){

      if(titulo != null){
          console.log(this.pelicula.titulo);
        }else{
            console.log(this.pelicula);
        }
    }

    onChangeFavoritePelicula(pelicula){
        this.pelicula = pelicula;
        this.peliculaElegida = pelicula;
    }

}