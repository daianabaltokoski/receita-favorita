import { Receita } from "./receita.js";

    let ingredientes = [
            '2 ovos;', 
            '1 colher de leite;', 
            '1 colher de manteiga;', 
            'pimenta;', 
            'sal.'
        ]

        let modoDeFazer = [
            'Misture todos os ingredientes;', 
            'Despeje a mistura em uma frigideira antiaderente;', 
            'Deixe dourar dos dois lados;', 
            'Sirva quente.'
        ]

    let receita = new Receita('Omelete', 2, ingredientes, modoDeFazer);

    receita.imprime();
    //alert(receita.titulo);

    let json = JSON.stringify(receita);
    localStorage['receita-favorita'] = json;

    let receitas = [];
    receitas.push(receita);
    localStorage.receitas = JSON.stringify(receitas);

    json = localStorage.getItem('receita-favorita');
    receita = JSON.parse(json)

    const pTitulo = document.getElementById("tituloDaReceita")
    let texto = `${receita._titulo}`;
    pTitulo.innerText = texto;

    const serve = document.getElementById("serveQuantos")
    let rendimento = `Serve ${receita.quantosServe} pessoa(s)`;
    serve.innerText = rendimento;

    const insumo = document.getElementById("ingredientesDaReceita")
    let insumos = receita.ingredientes.join('\n');
    insumo.innerText = insumos;

    const fazer = document.getElementById("passoAPasso")
    let passos = receita.modoDeFazer.join('\n');
    fazer.innerText = passos;
  
    