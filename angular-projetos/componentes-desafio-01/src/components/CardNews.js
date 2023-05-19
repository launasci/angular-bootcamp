class Cardnews extends HTMLElement{
  constructor(){
    super();

    const shadow = this.attachShadow({mode:'open'})
    shadow.appendChild(this.build())
    shadow.appendChild(this.styles())

  }

  build(){
    // metodo onde vamos construir os elementos


    const componentRoot = document.createElement('div')
    componentRoot.setAttribute('class', "card") 

    // estamos atribuindo uma classe para a div com setAttribute()
    // que é o oposto do getAttributes()

    const cardLeft = document.createElement('div')
    cardLeft.setAttribute('class', 'card-left')
    
    const autor = document.createElement('span')
    autor.textContent = (this.getAttribute('autor') || 'Autor Desconhecido')

    const linkTitulo = document.createElement('a')
    linkTitulo.textContent = this.getAttribute('link-titulo')
    linkTitulo.href = this.getAttribute('link-url')

    const conteudo = document.createElement('p')
    conteudo.textContent = this.getAttribute('conteudo')

    cardLeft.appendChild(autor)
    cardLeft.appendChild(linkTitulo)
    cardLeft.appendChild(conteudo)

    const cardRight = document.createElement('div')
    cardRight.setAttribute('class', 'card-right')

    const imagem = document.createElement('img')
    imagem.src= this.getAttribute('img-src')

    cardRight.appendChild(imagem)
    
    
    componentRoot.appendChild(cardLeft)
    componentRoot.appendChild(cardRight)

    return componentRoot
  }

  styles(){
    const style = document.createElement("style");
    style.textContent = `
        .card {
          width: 80%;
          -webkit-box-shadow: 4px -4px 14px -1px rgba(0,0,0,0.75);
          -moz-box-shadow: 4px -4px 14px -1px rgba(0,0,0,0.75);
          box-shadow: 4px -4px 14px -1px rgba(0,0,0,0.75);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        
        .card-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 10px;
        }
        
        .card-left > span {
          font-weight: 400;
        }
        
        .card-left > a {
          margin-top: 15px;
          font-size: 25px;
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
        
        .card-left > p {
          color: rgb(70, 70, 70);
        }

        .card-right > img{
          width: 350px;
        }
    `;

    return style;

  }
}

customElements.define('card-news', Cardnews)