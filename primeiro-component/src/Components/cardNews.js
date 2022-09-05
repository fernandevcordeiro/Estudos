// Todo componente é uma função JavaScript que retorna mais JS, HTML e CSS

class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow ({mode: "open"});
        shadow.innerHTML = "<h1>Hello World! Aqui é a Fernanda</h1>";
    }
} 

customElements.define('card-news',CardNews)


// (Linha 3) A classe funciona como um template, onde foi definido que a mesma irá herdar características e comportamentos de elementos HTML
//(Linha 4) sempre será necessário executar um método construtor da nossa classe
//(Linha 5) o Super invoca o método construtor de quem se está herdando, no caso, do HTML 
//(Linha 7) então, foi criada uma constante sombra, onde foi anexada na classe (this) uma sombra
//(Linha 7) na nossa sombra possuímos dois modos: open/closed (conceito de escopo) sendo open para que o mundo exterior ao escopo possa manipular dinamicamente os elementos
//(Linha 8) aqui estamos definindo o valor/valores que estarão incluídos dentro desta sombra, no caso de exemplo uma tag h1
//(Linha 12) cria um elemento customizado e define que ele será utilizado através do apelido 'card-news', e a partir dele será inicializada a classe 'CardNews', ou seja customElements.define('seletor', 'metodo-construtor')

//Obs: para diferenciar tags padrões de tags customizadas, é necessário sempre incluir um hífen no nome ex.: 'titulo-dinamico'