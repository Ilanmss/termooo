import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'termooo';
  palavras = ['raios', 'censo', 'roupa', 'furia', 'audio']
  tecladoLinha1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  tecladoLinha2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç']
  tecladoLinha3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

  letraChutada: any = ['', '', '', '', '']
  palavraChutada: any = []
  palavra = this.palavras[Math.floor(Math.random() * this.palavras.length)]
  letras = this.palavra.split("")
  tamanhoPalavra = this.palavra.length

  temLetra1: any = ['nada', 'nada', 'nada', 'nada', 'nada'] // tem, acertou, errou
  temLetra2: any = ['nada', 'nada', 'nada', 'nada', 'nada'] // tem, acertou, errou
  temLetra3: any = ['nada', 'nada', 'nada', 'nada', 'nada'] // tem, acertou, errou
  temLetra4: any = ['nada', 'nada', 'nada', 'nada', 'nada'] // tem, acertou, errou
  temLetra5: any = ['nada', 'nada', 'nada', 'nada', 'nada'] // tem, acertou, errou
  
  desabilitarChutes: Array<boolean> = [false, true, true, true, true]
  desabilitar1 = false
  desabilitar2 = true
  desabilitar3 = true
  desabilitar4 = true
  desabilitar5 = true

  quintoChute = ['', '', '', '', '']
  quartochute = ['', '', '', '', '']
  terceiroChute = ['', '', '', '', '']
  segundoChute = ['', '', '', '', '']
  primeiroChute = ['', '', '', '', '']

  console(){
    console.log("console")
  }
  classebtn = ''
  teclei(tecla: any){
    console.log(tecla)
    
    if(this.desabilitarChutes[0] == false){
      for(let i = 0; i<5  ; i++){
        if(this.primeiroChute[i]==''){
          this.primeiroChute[i] = tecla
          if(tecla != '') this.palavraChutada.push(tecla)
          tecla=''
            
        } 
      }
    } else if(this.desabilitarChutes[1] == false){
      for(let i = 0; i<5  ; i++){
        if(this.segundoChute[i]==''){
          this.segundoChute[i] = tecla
          if(tecla != '') this.palavraChutada.push(tecla)
          tecla=''  
        } 
      }
    } else if(this.desabilitarChutes[2] == false){
      for(let i = 0; i<5  ; i++){
        if(this.terceiroChute[i]==''){
          this.terceiroChute[i] = tecla
          if(tecla != '') this.palavraChutada.push(tecla)
          tecla=''
  
        } 
      }
    }else if(this.desabilitarChutes[3] == false){
      for(let i = 0; i<5  ; i++){
        if(this.quartochute[i]==''){
          this.quartochute[i] = tecla
          if(tecla != '') this.palavraChutada.push(tecla)
          tecla=''        
  
        } 
      }
    }else if(this.desabilitarChutes[4] == false){
      for(let i = 0; i<5  ; i++){
        if(this.quintoChute[i]==''){
          this.quintoChute[i] = tecla
          if(tecla != '') this.palavraChutada.push(tecla)
          tecla=''
  
        } 
      }
    }
  }
  comparar(){
    if(this.desabilitarChutes[0] == false){
      for(let i = 0; i<5  ; i++){
        if(this.letras[i] == this.palavraChutada[i]) this.temLetra1[i] = 'acertou'
        else if(this.letras.includes(this.palavraChutada[i])) this.temLetra1[i] = 'tem'
        else this.temLetra1[i] = 'errou'
      }
      this.palavraChutada = []
      this.desabilitarChutes[0] = true
      this.desabilitarChutes[1] = false
      this.desabilitar1 = true
      this.desabilitar2 = false
    } else if(this.desabilitarChutes[1] == false){
      for(let i = 0; i<5  ; i++){
        if(this.letras[i] == this.palavraChutada[i]) this.temLetra2[i] = 'acertou'
        else if(this.letras.includes(this.palavraChutada[i])) this.temLetra2[i] = 'tem'
        else this.temLetra2[i] = 'errou'
      }
      this.palavraChutada = []
      this.desabilitarChutes[1] = true
      this.desabilitarChutes[2] = false
      this.desabilitar2 = true
      this.desabilitar3 = false
    } else if(this.desabilitarChutes[2] == false){
      for(let i = 0; i<5  ; i++){
        if(this.letras[i] == this.palavraChutada[i]) this.temLetra3[i] = 'acertou'
        else if(this.letras.includes(this.palavraChutada[i])) this.temLetra3[i] = 'tem'
        else this.temLetra3[i] = 'errou'
      } 
      this.palavraChutada = []
      this.desabilitarChutes[2] = true
      this.desabilitarChutes[3] = false
      this.desabilitar3 = true
      this.desabilitar4 = false
    } else if(this.desabilitarChutes[3] == false){
      for(let i = 0; i<5  ; i++){
        if(this.letras[i] == this.palavraChutada[i]) this.temLetra4[i] = 'acertou'
        else if(this.letras.includes(this.palavraChutada[i])) this.temLetra4[i] = 'tem'
        else this.temLetra4[i] = 'errou'
      }
      this.palavraChutada = []
      this.desabilitarChutes[3] = true
      this.desabilitarChutes[4] = false
      this.desabilitar4 = true
      this.desabilitar5 = false
    } else if(this.desabilitarChutes[4] == false){
      for(let i = 0; i<5  ; i++){
        if(this.letras[i] == this.palavraChutada[i]) this.temLetra5[i] = 'acertou'
        else if(this.letras.includes(this.palavraChutada[i])) this.temLetra5[i] = 'tem'
        else this.temLetra5[i] = 'errou'
      }
    }
  }
  moverFoco(inicial: any, final: any){
    length = inicial.length
    if(length == 1) final.focus()
  }



}
