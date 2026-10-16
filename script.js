/* =========================
   ALFABETO
========================= */

const LETRAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const DESC_LETRAS = {
    A: 'Mão fechada, com o polegar encostado ao lado do indicador, apontando para cima.',
    B: 'Mão aberta, dedos esticados e juntos apontando para cima; o polegar fica dobrado sobre a palma.',
    C: 'Mão curvada em formato de C, com os dedos e o polegar formando a curva.',
    D: 'Indicador para cima; os outros dedos e o polegar se tocam formando um círculo.',
    E: 'Dedos dobrados para baixo, tocando a palma; o polegar fica por baixo deles.',
    F: 'Polegar e indicador se tocam formando um círculo; os outros três dedos ficam esticados para cima.',
    G: 'Mão de lado, indicador esticado para a frente com o polegar ao lado; os outros dedos fechados.',
    H: 'Indicador e médio esticados e juntos, apontando para o lado; os outros dedos fechados.',
    I: 'Mão fechada com o dedo mínimo esticado para cima.',
    J: 'Dedo mínimo esticado para cima; depois desenhe um J no ar com a mão.',
    K: 'Indicador e médio esticados em V, com a ponta do polegar tocando o dedo médio.',
    L: 'Polegar e indicador esticados formando um L; os outros dedos fechados.',
    M: 'O polegar fica por baixo de três dedos — indicador, médio e anelar — dobrados sobre ele.',
    N: 'O polegar fica por baixo de dois dedos — indicador e médio — dobrados sobre ele.',
    O: 'Todos os dedos curvados tocando o polegar, formando um O.',
    P: 'Igual ao K, mas com a mão apontando para baixo.',
    Q: 'Igual ao G, mas com a mão apontando para baixo.',
    R: 'Indicador e médio esticados e cruzados; os outros dedos fechados.',
    S: 'Mão fechada com o polegar por cima dos outros dedos.',
    T: 'Mão fechada com o polegar entre o indicador e o médio.',
    U: 'Indicador e médio esticados, juntos, apontando para cima.',
    V: 'Indicador e médio esticados e separados, formando um V.',
    W: 'Indicador, médio e anelar esticados e separados; o polegar segura o mínimo.',
    X: 'Indicador dobrado em forma de gancho; os outros dedos fechados.',
    Y: 'Polegar e dedo mínimo esticados; os outros dedos fechados.',
    Z: 'Com o indicador esticado, desenhe um Z no ar.'
};

/* URLs das imagens das letras */
const LINKS_ALFABETO = {
    A: "https://static.e-bordados.net/img/produtos/default/2079201.jpg",
    B: 'https://static.e-bordados.net/img/produtos/default/2079191.jpg',
    C: 'https://static.e-bordados.net/img/produtos/default/2079181.jpg',
    D: 'https://static.e-bordados.net/img/produtos/default/2079161.jpg',
    E: 'https://static.e-bordados.net/img/produtos/default/2079151.jpg',
    F: 'https://static.e-bordados.net/img/produtos/default/2079141.jpg',
    G: 'https://i.pinimg.com/736x/05/cd/81/05cd8189f93c4ec6ec54ec487e58e73c.jpg',
    H: 'https://static.e-bordados.net/img/produtos/default/2079121.jpg',
    I: 'https://static.e-bordados.net/img/produtos/default/2079111.jpg',
    J: 'https://static.e-bordados.net/img/produtos/default/2079101.jpg',
    K: 'https://static.e-bordados.net/img/produtos/default/2079091.jpg',
    L: 'https://static.e-bordados.net/img/produtos/default/2079081.jpg',
    M: 'https://static.e-bordados.net/img/produtos/default/2079071.jpg',
    N: 'https://static.e-bordados.net/img/produtos/default/2079061.jpg',
    O: 'https://static.e-bordados.net/img/produtos/default/2079051.jpg',
    P: 'https://static.e-bordados.net/img/produtos/default/2079041.jpg',
    Q: 'https://static.e-bordados.net/img/produtos/default/2079031.jpg',
    R: 'https://static.e-bordados.net/img/produtos/default/2079021.jpg',
    S: 'https://static.e-bordados.net/img/produtos/default/2079011.jpg',
    T: 'https://static.e-bordados.net/img/produtos/default/2079001.jpg',
    U: 'https://static.e-bordados.net/img/produtos/default/2078991.jpg',
    V: 'https://static.e-bordados.net/img/produtos/default/2078981.jpg',
    W: 'https://static.e-bordados.net/img/produtos/default/2078971.jpg',
    X: 'https://static.e-bordados.net/img/produtos/default/2078961.jpg',
    Y: 'https://static.e-bordados.net/img/produtos/300px_webp/2078951.webp',
    Z: 'https://static.e-bordados.net/img/produtos/default/2078941.jpg'
};

/* URLs dos sinais de Cumprimentos */
const LINKS_CUMPRIMENTOS = {
    ola: 'https://lh3.googleusercontent.com/mvqdIX-SI7ZBzDS38HQV9Nc7SuYf0adDup22I9GjzaaZYT8ey5KYv69KegcFUkekANGJ25U-PuhIDBfKXwMItQp6YlMk9AXsjbxQ1ITx2vxg2yGp7eLXabDiOrymaQEZ1CzamAxYrVjv3zKzTQ',
    'bom-dia': 'https://i.pinimg.com/736x/03/c4/17/03c4171fcdb63d0ef6e79ed932ef5ae7.jpg',
    'boa-tarde': 'https://d6scj24zvfbbo.cloudfront.net/024ab7461ea3d23d3671b4d77539947a/200000228-3e2ca3f262/boa%20tarde.jpg?ph=1a775d0833',
    'boa-noite': 'https://d6scj24zvfbbo.cloudfront.net/024ab7461ea3d23d3671b4d77539947a/200000226-dc645dd5d5/boa%20noite.jpg?ph=1a775d0833',
    tchau: 'https://i.pinimg.com/736x/23/f7/f4/23f7f4e776966d5e8d45d3cd018ccf5a.jpg',
    obrigado: 'https://d6scj24zvfbbo.cloudfront.net/024ab7461ea3d23d3671b4d77539947a/200000236-e819fe9136/obrigado.jpg?ph=1a775d0833',
    'por-favor': 'https://d6scj24zvfbbo.cloudfront.net/024ab7461ea3d23d3671b4d77539947a/200000237-6e0816f004/por%20favor.jpg?ph=1a775d0833',
    desculpa: 'https://i.pinimg.com/originals/9d/88/30/9d8830c3817117dcd22f6cbaff6d9f82.jpg'
};

/* URLs dos sinais de Família */
const LINKS_FAMILIA = {
    mae: 'https://3.bp.blogspot.com/__d1ndFEwtB8/TQ8vJWxcBMI/AAAAAAAATwY/C5uPBfx-I5E/s1600/mae.jpg',
    pai: 'https://1.bp.blogspot.com/-yn2b0yOkBCA/VDk_AUXj8WI/AAAAAAAAfP4/vab5JxYImGo/s1600/pai.jpg',
    irmao: 'https://th.bing.com/th/id/R.74fecb6b5083f493767e878dc1b0501f?rik=thkrKAa7%2fnFBxw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-0H19h_bSfng%2fVDk-8mNrSFI%2fAAAAAAAAfPI%2fY55XUtin7wA%2fs1600%2firmao.jpg&ehk=tvdbVyOwY6mdsT2JK%2bct4y7F5fiPvrbkxxLG0WG3lBo%3d&risl=&pid=ImgRaw&r=0',
    irma: 'https://th.bing.com/th/id/R.f76e2fd998886b1060102ba3a42ce0a4?rik=XruuN5pxdou8jQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-hYalsX1lsC4%2fVP4_ngl52sI%2fAAAAAAAAAL0%2fhgNCxThEbwE%2fs1600%2firma%5b1%5d.jpg&ehk=LmH2%2f2P%2fBdBwlYgk4qhi9mB44Be1S0kHqvitE%2bmtLJQ%3d&risl=&pid=ImgRaw&r=0',
    'avo-f':'https://th.bing.com/th/id/R.66a2cfd179ee9fdcce2e969d17e8e580?rik=MRtc94%2bPRzqKCw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-wg5HfZmaEY4%2fVDk-5O2H_-I%2fAAAAAAAAfOU%2f1ZcH_kzTfkQ%2fs1600%2fav%c3%b3.jpg&ehk=SxX8KAydLPZ4yPIjyJauE%2bH9T3nglBGuebSe7QK3qiM%3d&risl=&pid=ImgRaw&r=0',
    'avo-m':'https://th.bing.com/th/id/R.e7e1943e2f525077c2a923d75f42973b?rik=U5XF%2beSxePlEbg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-oWXmFRSyO3E%2fVDk-5XRtLKI%2fAAAAAAAAfOY%2fR5DXg54o2RU%2fs1600%2fav%c3%b4.jpg&ehk=VoKX2qnbhCLjACab4N5lepOPzPQyy3lGYx%2fR6E%2bsS8U%3d&risl=&pid=ImgRaw&r=0'
};

/* URLs dos sinais de Cotidiano */
const LINKS_COTIDIANO = {
    agua: 'https://lh3.googleusercontent.com/9SQx7bOqugp5Ltm9_lH3fzUrSTqDUAG14xcRkTcqcBEUx8AMBJJQwp5ryOgD_-sZ3DNbMUl7dfAPpCVtDKscC1WgzXFHM9zNMG6_FJZwoRBqOfzftuUvC2OoIzio1tae30_T_3ZrPLIP5vocZw',
    comer: 'https://4.bp.blogspot.com/-KMIAfV5RBBM/WpfeYtNppLI/AAAAAAAAExw/aJzzgTp6UuU2ghi55wfCccAp2FT60I_GgCLcBGAs/s1600/Comer.jpg',
    casa: 'https://media.istockphoto.com/id/1148738501/vector/vector-deaf-mute-sign-language-character-gesture.jpg?s=612x612&w=0&k=20&c=hor1vs31yvdzdcwM4stiD69u-ngeFccfkjb0Ct52AEw=',
    escola: 'https://th.bing.com/th/id/R.7ee6ee8f53d1992225c9c08aa1032182?rik=QuPsX7pOsGWhIw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-shcSw8fviTc%2fVGyJyWP4dCI%2fAAAAAAAACz8%2foyD0lipBk44%2fs1600%2fescola.jpg&ehk=R%2fiyne4knCnCY2RP7evBJTmW%2bXr%2bBqtQ4dACSRZXwOc%3d&risl=&pid=ImgRaw&r=0',
    trabalho: 'https://www.researchgate.net/profile/Thais-Sa-2/publication/281208618/figure/fig5/AS:391744584732679@1470410595388/Figura-6-Sinal-do-verbo-trabalhar-Fonte-Felipe-200922.png',
    amigo: 'https://www.libras.com.br/ct__images-fixed/exemplos-de-sinais-em-libras/libras-sinal-amigo.png'
};


/* =========================
   SINAIS PRÁTICOS
========================= */

const itemSinal = (id, n, d) => {
    const url = LINKS_CUMPRIMENTOS[id] || LINKS_FAMILIA[id] || LINKS_COTIDIANO[id];
    return {
        n,
        d,
        img: url || ('img/sinal-' + id + '.png')
    };
};

const itemLetra = letra => ({
    n: letra,
    d: DESC_LETRAS[letra],
    img: LINKS_ALFABETO[letra] || ('img/letra-' + letra.toLowerCase() + '.png')
});


/* =========================
   FASES
========================= */

const LICOES = [

    /* INTRODUÇÃO: quiz interativo inicial */
    {
        id: 'intro',
        t: 'Introdução',
        ic: '📖',

        quiz: [

            {
                q: '1- Libras é a sigla de…',
                o: [
                    'Língua Brasileira de Sinais',
                    'Linguagem Brasileira de Símbolos',
                    'Língua Brasileira de Sons'
                ],
                c: 0
            },

            {
                q: '2- Além das mãos, o que também faz parte da mensagem em Libras?',
                o: [
                    'Só o movimento dos dedos',
                    'Expressão facial e corporal',
                    'Apenas a posição dos pés'
                ],
                c: 1
            },

            {
                q: '3- Libras é igual em todos os países?',
                o: [
                    'Sim, é uma língua universal',
                    'Não, cada país tem sua própria língua de sinais'
                ],
                c: 1
            },

            {
                q: '4- O que diferencia a Libras de um simples conjunto de gestos?',
                o: [
                    'É uma língua com estrutura e regras próprias.',
                    'É uma forma de comunicação sem nenhuma regra.',
                    'É apenas uma tradução visual do português.'
                ],
                c: 0
            },

            {
                q: '5- Por que a Libras é importante para a acessibilidade?',
                o: [
                    'Porque facilita a comunicação e o acesso à informação para pessoas surdas.',
                    'Porque substitui todas as formas de comunicação.',
                    'Porque é utilizada apenas em ambientes escolares.'
                ],
                c: 0
            }

        ]
    },


    {
        id: 'alfabeto',
        t: 'Alfabeto',
        ic: '🔤',
        itens: LETRAS.map(itemLetra)
    },


    {
        id: 'cumprimentos',
        t: 'Cumprimentos',
        ic: '🙏',

        itens: [
            itemSinal('ola', 'Olá', 'Mantenha a mão aberta e faça um pequeno aceno para cumprimentar.'),
            itemSinal('bom-dia', 'Bom dia', 'Faça o sinal de “bom” com a mão e, em seguida, represente a ideia de “dia” com o movimento mostrado na imagem.'),
            itemSinal('boa-tarde', 'Boa tarde', 'Faça o sinal de “boa” e depois o movimento correspondente a “tarde”, acompanhando a imagem.'),
            itemSinal('boa-noite', 'Boa noite', 'Faça o sinal de “boa” e depois o movimento correspondente a “noite”, conforme a imagem.'),
            itemSinal('tchau', 'Tchau', 'Mantenha a mão aberta e faça um aceno lateral.'),
            itemSinal('obrigado', 'Obrigado(a)', 'Coloque a mão aberta próxima ao queixo e leve-a para a frente.'),
            itemSinal('por-favor', 'Por favor', 'Use a mão aberta e faça o movimento mostrado na imagem, mantendo a palma voltada para o corpo.'),
            itemSinal('desculpa', 'Desculpa', 'Faça com a mão o movimento indicado na imagem, mantendo o gesto próximo ao corpo.')
        ]
    },


    {
        id: 'familia',
        t: 'Família',
        ic: '👨‍👩‍👧',

        itens: [
            itemSinal('mae', 'Mãe', 'Mantenha a mão aberta e faça o sinal próximo à região do queixo, acompanhando a imagem.'),
            itemSinal('pai', 'Pai', 'Mantenha a mão aberta e faça o sinal próximo à região da testa, conforme mostrado na imagem.'),
            itemSinal('irmao', 'Irmão', 'Use as duas mãos e reproduza o movimento indicado na imagem, mantendo os dedos na posição apresentada.'),
            itemSinal('irma', 'Irmã', 'Use as duas mãos e faça o movimento mostrado na imagem, observando a posição dos dedos.'),
            itemSinal('avo-f', 'Avó', 'Faça o sinal mostrado na imagem com a mão aberta e reproduza o movimento próximo ao rosto.'),
            itemSinal('avo-m', 'Avô', 'Faça o movimento indicado na imagem, mantendo a mão aberta e acompanhando a direção do sinal.')
        ]
    },


    {
        id: 'cotidiano',
        t: 'Cotidiano',
        ic: '🏠',

        itens: [
            itemSinal('agua', 'Água', 'Forme a posição da mão mostrada na imagem e faça o movimento indicado próximo à boca.'),
            itemSinal('comer', 'Comer', 'Junte os dedos na ponta, formando um pequeno bico, e leve a mão à boca repetidamente.'),
            itemSinal('casa', 'Casa', 'Use as duas mãos abertas, com os dedos juntos, formando no alto o desenho de um telhado.'),
            itemSinal('escola', 'Escola', 'Use as duas mãos conforme a imagem e faça o movimento de forma simultânea.'),
            itemSinal('trabalho', 'Trabalho', 'Mantenha as mãos na posição indicada na imagem e repita o movimento apresentado.'),
            itemSinal('amigo', 'Amigo(a)', 'Use as duas mãos e faça o movimento de aproximação indicado na imagem.')
        ]
    },


    /* Fases futuras planejadas */
    { id: 'cores',       t: 'Cores',        ic: '🎨', breve: true },
    { id: 'numeros',     t: 'Números',      ic: '🔢', breve: true },
    { id: 'alimentos',   t: 'Alimentos',    ic: '🍎', breve: true },
    { id: 'animais',     t: 'Animais',      ic: '🐶', breve: true },
    { id: 'emocoes',     t: 'Emoções',      ic: '😊', breve: true },
    { id: 'tempo',       t: 'Dias e tempo', ic: '📅', breve: true },
    { id: 'lugares',     t: 'Lugares',      ic: '📍', breve: true },
    { id: 'transportes', t: 'Transportes',  ic: '🚌', breve: true }

];

const ATIVAS = LICOES.filter(licao => !licao.breve);


/* =========================
   ACESSIBILIDADE: CONTEÚDO
========================= */

const ACESS = {
    surdez: {
        icone: '🦻',
        titulo: 'Surdez',
        subtitulo: 'Comunicação e Libras',
        oqueE: 'A surdez pode afetar a forma como uma pessoa percebe os sons e se comunica. A Libras é uma das principais formas de comunicação utilizadas pela comunidade surda no Brasil.',
        sabia: 'A Libras é uma língua completa, com sua própria estrutura e gramática. Ela não é simplesmente uma tradução do português para sinais.',
        pratica: 'Nosso aplicativo ensina sinais básicos de Libras, ajudando você a aprender uma nova forma de se comunicar e tornar situações do dia a dia mais acessíveis.'
    },

    visual: {
        icone: '👁️',
        titulo: 'Deficiência visual',
        subtitulo: 'Braille e audiodescrição',
        oqueE: 'A deficiência visual envolve diferentes níveis de perda da visão e pode exigir recursos que facilitem o acesso à informação e à comunicação.',
        sabia: 'Recursos como Braille, audiodescrição e leitores de tela ajudam pessoas com deficiência visual a acessar conteúdos, estudar e utilizar tecnologias.',
        pratica: 'O aplicativo também apresenta informações sobre recursos de acessibilidade, ajudando você a entender como tornar a comunicação mais acessível.'
    },

    comunicacao: {
        icone: '💬',
        titulo: 'Comunicação',
        subtitulo: 'Formas alternativas',
        oqueE: 'Nem todas as pessoas se comunicam da mesma maneira. Algumas podem utilizar Libras, Braille, imagens, símbolos ou outros recursos de comunicação alternativa.',
        sabia: 'Comunicação acessível não significa apenas conseguir falar ou ouvir. Ter acesso à informação e conseguir se expressar também faz parte da acessibilidade.',
        pratica: 'Nosso aplicativo mostra diferentes formas de comunicação e oferece ferramentas para você aprender, conhecer e praticar recursos de acessibilidade.'
    },

    mobilidade: {
        icone: '♿',
        titulo: 'Mobilidade',
        subtitulo: 'Acesso aos espaços',
        oqueE: 'Pessoas com deficiência ou dificuldade de mobilidade podem encontrar obstáculos para se deslocar e utilizar determinados espaços com autonomia.',
        sabia: 'Uma barreira de mobilidade não é apenas uma escada. Calçadas inadequadas, portas estreitas, falta de rampas e elevadores também podem impedir a circulação de uma pessoa.',
        pratica: 'O aplicativo ajuda você a identificar barreiras de acessibilidade e entender como pequenas mudanças nos espaços podem facilitar a mobilidade e a autonomia.'
    }
};


/* =========================
   UTILIDADES
========================= */

const $ = seletor => document.querySelector(seletor);


/* =========================
   ESTADO E PERSISTÊNCIA
========================= */

let S = {
    xp: 0,
    streak: 0,
    last: '',
    done: []
};

try {
    const salvo = localStorage.getItem('libmais');
    if(salvo){
        S = Object.assign(S, JSON.parse(salvo));
    }
} catch(e){}

S.done = S.done.filter(id => LICOES.some(licao => licao.id === id));

const salvar = () => {
    try{
        localStorage.setItem('libmais', JSON.stringify(S));
    }catch(e){}
};

const hoje = () => new Date().toDateString();


/* =========================
   FUNÇÃO: ZERAR PROGRESSO
========================= */

function zerarProgresso(){

    const confirmou = confirm('Tem certeza de que deseja zerar todo o seu progresso? Seus pontos de XP e fases concluídas voltarão ao início.');

    if(!confirmou){
        return;
    }

    S = {
        xp: 0,
        streak: 0,
        last: '',
        done: []
    };

    salvar();

    stats();
    atualizarInicio();
    trilha();

    alert('Seu progresso foi zerado com sucesso!');

}


/* =========================
   NAVEGAÇÃO
========================= */

function ir(id){

    const tela = document.getElementById(id);
    if(!tela) return;

    if(id !== 'capa'){
        document.body.classList.add('app-aberto');
    }

    pararCamera();

    document
        .querySelectorAll('.tela')
        .forEach(t => t.classList.remove('ativa'));

    tela.classList.add('ativa');

    try{
        sessionStorage.setItem(
            'libmais-tela',
            id === 'licao' ? 'libras' : (id === 'tema-detalhe' ? 'acess' : id)
        );
    }catch(e){}

    const menu =
        (id === 'alfabeto' || id === 'licao')
            ? 'libras'
            : (id === 'tema-detalhe')
                ? 'acess'
                : id;

    document
        .querySelectorAll('[data-go]')
        .forEach(botao => {
            botao.classList.toggle('ativo', botao.dataset.go === menu);
        });

    document.body.dataset.tela = id;
    window.scrollTo(0, 0);

    if(id === 'inicio') atualizarInicio();
    if(id === 'libras') trilha();
    if(id === 'acess') acess();

}


/* =========================
   ESTATÍSTICAS & PORCENTAGEM
========================= */

function stats(){

    const elemento = $('#stats');
    if(!elemento) return;

    elemento.innerHTML =
        '<span class="chip">🔥 ' + S.streak + '</span>' +
        '<span class="chip">⭐ ' + S.xp + ' XP</span>';

}

function porcentagem(){

    if(!LICOES.length) return 0;
    return Math.round(S.done.length / LICOES.length * 100);

}

function atualizarInicio(){

    stats();

    const pct = porcentagem();
    const numero = $('#home-pct');
    const barra = $('#home-fill');

    if(numero) numero.textContent = pct + '%';
    if(barra) barra.style.width = pct + '%';

}


/* =========================
   TRILHA DE LIBRAS
========================= */

function liberada(indice){

    const fase = LICOES[indice];
    if(!fase || fase.breve) return false;
    if(indice === 0) return true;

    const anterior = LICOES[indice - 1];
    return S.done.includes(anterior.id);

}

function trilha(){

    stats();

    const pct = porcentagem();
    const preenchimento = $('#pfill');
    const barra = $('#pbar');

    if(preenchimento) preenchimento.style.width = pct + '%';
    if(barra) barra.setAttribute('aria-valuenow', pct);

    const proxima = LICOES.findIndex(
        (fase, indice) => !S.done.includes(fase.id) && liberada(indice)
    );

    const trilhaElement = $('#trilha');
    if(!trilhaElement) return;

    trilhaElement.innerHTML = LICOES.map((fase, indice) => {

        const feito = S.done.includes(fase.id);
        const liberadaAgora = liberada(indice);

        const classe =
            feito
                ? 'feito'
                : liberadaAgora
                    ? ''
                    : 'trava';

        return (
            '<button class="no ' + classe + '" ' +
            (liberadaAgora ? 'onclick="iniciar(' + indice + ')"' : 'disabled aria-disabled="true"') +
            '>' +
                (indice === proxima ? '<span class="dica">COMEÇAR</span>' : '') +
                '<span class="bola" aria-hidden="true">' +
                    (feito ? '✓' : liberadaAgora ? fase.ic : '🔒') +
                '</span>' +
                '<span class="rot">' +
                    fase.t +
                    (fase.breve ? ' (em breve)' : '') +
                '</span>' +
            '</button>'
        );

    }).join('');

}


/* =========================
   IMAGENS & CÂMERA
========================= */

function imgTag(src, alt){
    return '<img src="' + src + '" alt="' + alt + '" onerror="semImagem(this)">';
}

function semImagem(elemento){
    elemento.parentNode.innerHTML =
        '<strong>Imagem em breve</strong>' +
        '<small>Adicione a imagem deste sinal na pasta img.</small>';
}

let stream = null;

function pararCamera(){
    if(stream){
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
}

function camVazia(){
    return (
        '<button class="btn sec mini" onclick="ligarCamera(this)">📷 Praticar com a câmera</button>' +
        '<small>A imagem fica só no seu aparelho.</small>'
    );
}

async function ligarCamera(botao){

    const caixa = botao.closest('.cam');
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
        caixa.innerHTML = '<small>Seu navegador não permite usar a câmera.</small>';
        return;
    }

    try{
        pararCamera();
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user' },
            audio: false
        });

        caixa.innerHTML =
            '<video autoplay playsinline muted></video>' +
            '<button class="btn sec mini" onclick="desligarCamera(this)">Desligar</button>';

        caixa.querySelector('video').srcObject = stream;

    }catch(e){
        caixa.innerHTML =
            '<small>Não foi possível abrir a câmera. Verifique a permissão do navegador.</small>' +
            '<button class="btn sec mini" onclick="ligarCamera(this)">Tentar de novo</button>';
    }

}

function desligarCamera(botao){
    const caixa = botao.closest('.cam');
    pararCamera();
    caixa.innerHTML = camVazia();
}

function visual(imagem, alt){
    return (
        '<div class="vis">' +
            '<div class="caixa">' + imgTag(imagem, alt) + '</div>' +
            '<div class="caixa cam">' + camVazia() + '</div>' +
        '</div>'
    );
}


/* =========================
   ACESSIBILIDADE: INTERFACE
========================= */

function acess(){

    const cards = $('#cards');
    if(!cards) return;

    cards.innerHTML = Object.keys(ACESS).map(chave => {
        const item = ACESS[chave];
        return (
            '<button type="button" onclick="abrirTema(\'' + chave + '\')">' +
                '<span class="em" aria-hidden="true">' + item.icone + '</span>' +
                '<strong>' + item.titulo + '</strong>' +
                '<small>' + item.subtitulo + '</small>' +
            '</button>'
        );
    }).join('');

}

function abrirTema(chave){

    const item = ACESS[chave];
    const contentor = $('#conteudo-detalhe');
    if(!contentor || !item) return;

    contentor.innerHTML =
        '<div class="info-cabecalho">' +
            '<span class="info-icone" aria-hidden="true">' + item.icone + '</span>' +
            '<div>' +
                '<h2>' + item.titulo + '</h2>' +
                '<span class="info-sub">' + item.subtitulo + '</span>' +
            '</div>' +
        '</div>' +
        '<div class="info-secoes">' +
            '<div class="info-bloco destaque-pratica">' +
                '<h3>O que é?</h3>' +
                '<p>' + item.oqueE + '</p>' +
            '</div>' +
            '<div class="info-bloco destaque-sabia">' +
                '<h3> Você sabia?</h3>' +
                '<p>' + item.sabia + '</p>' +
            '</div>' +
            '<div class="info-bloco destaque-pratica">' +
                '<h3> Na prática</h3>' +
                '<p>' + item.pratica + '</p>' +
            '</div>' +
        '</div>';

    ir('tema-detalhe');

}

function voltarAcess(){
    ir('acess');
}


/* =========================
   FASES & PRÁTICA
========================= */

let faseAtual = null;
let itensAtuais = [];
let indiceAtual = 0;

function iniciar(indice){

    const fase = LICOES[indice];
    if(!fase || fase.breve || (!fase.quiz && !(fase.itens && fase.itens.length))) return;

    faseAtual = fase;
    itensAtuais = fase.itens || [];
    indiceAtual = 0;

    ir('licao');

    if(fase.quiz){
        iniciarQuiz();
    }else{
        mostrarPratica();
    }

}

function sair(){
    pararCamera();
    ir('libras');
}

function mostrarPratica(){

    pararCamera();
    $('#viv').style.display = 'none';

    const item = itensAtuais[indiceAtual];
    if(!item) return;

    const porcentagemAtual = indiceAtual / itensAtuais.length * 100;
    $('#lfill').style.width = porcentagemAtual + '%';

    $('#corpo').innerHTML =
        '<h2>' + faseAtual.t + ' · ' + (indiceAtual + 1) + ' de ' + itensAtuais.length + '</h2>' +
        '<div class="palavra">' + item.n + '</div>' +
        visual(item.img, 'Sinal de ' + item.n + ' em Libras') +
        '<div class="como"><strong>Como fazer</strong><p>' + item.d + '</p></div>';

    $('#corpo').scrollTop = 0;
    $('#rod').className = 'rod';

    $('#rodin').innerHTML =
        (indiceAtual > 0 ? '<button class="btn sec" onclick="anteriorSinal()">Voltar</button>' : '<span></span>') +
        '<button class="btn" onclick="proximoSinal()">' +
            (indiceAtual === itensAtuais.length - 1 ? 'Concluir' : 'Próximo sinal') +
        '</button>';

}

function anteriorSinal(){
    if(indiceAtual > 0){
        indiceAtual--;
        mostrarPratica();
    }
}

function proximoSinal(){
    indiceAtual++;
    if(indiceAtual >= itensAtuais.length){
        terminarFase();
        return;
    }
    mostrarPratica();
}

function registrarProgresso(xp){

    if(!S.done.includes(faseAtual.id)){
        S.done.push(faseAtual.id);
        S.xp += xp;
    }

    const ontem = new Date(Date.now() - 86400000).toDateString();
    if(S.last !== hoje()){
        S.streak = S.last === ontem ? S.streak + 1 : 1;
        S.last = hoje();
    }

    salvar();

}

function terminarFase(){

    pararCamera();
    const xp = 5 + itensAtuais.length * 2;
    registrarProgresso(xp);

    $('#lfill').style.width = '100%';

    $('#corpo').innerHTML =
        '<div class="fim">' +
            '<div class="gde">🎉</div>' +
            '<h2>Fase concluída!</h2>' +
            '<p class="sub">Você praticou todos os sinais desta etapa.</p>' +
            '<div class="res">' +
                '<div><b>🤟 ' + itensAtuais.length + '</b>sinais praticados</div>' +
                '<div><b>⭐ ' + xp + '</b>XP</div>' +
            '</div>' +
        '</div>';

    $('#rodin').innerHTML =
        '<button class="btn sec" onclick="refazerFase()">Praticar de novo</button>' +
        '<button class="btn" onclick="ir(\'libras\')">Continuar</button>';

}

function refazerFase(){
    if(!faseAtual) return;
    if(faseAtual.quiz){
        iniciarQuiz();
        return;
    }
    itensAtuais = faseAtual.itens;
    indiceAtual = 0;
    mostrarPratica();
}


/* =========================
   QUIZ
========================= */

let quizOrdem = [];
let vidas = 5;
let acertos = 0;
let escolha = null;
let respondida = false;

function embaralhar(lista){
    const r = lista.slice();
    for(let i = r.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
}

function iniciarQuiz(){
    vidas = 5;
    acertos = 0;
    indiceAtual = 0;
    mostrarQuiz();
}

function mostrarQuiz(){

    pararCamera();

    const p = faseAtual.quiz[indiceAtual];
    if(!p) return;

    escolha = null;
    respondida = false;
    quizOrdem = embaralhar(p.o.map((_, i) => i));

    $('#viv').style.display = '';
    $('#viv').textContent = '❤️ ' + vidas;
    $('#lfill').style.width = (indiceAtual / faseAtual.quiz.length * 100) + '%';

    $('#corpo').innerHTML =
        '<h2>' + p.q + '</h2>' +
        '<div class="alts">' +
            quizOrdem.map((idx, pos) =>
                '<button class="alt" onclick="escolher(' + pos + ')">' + p.o[idx] + '</button>'
            ).join('') +
        '</div>';

    $('#corpo').scrollTop = 0;
    $('#rod').className = 'rod';

    $('#rodin').innerHTML =
        '<span></span>' +
        '<button class="btn" id="bverif" disabled onclick="verificar()">Verificar</button>';

}

function escolher(pos){
    if(respondida) return;
    escolha = pos;
    document.querySelectorAll('.alt').forEach((b, i) => b.classList.toggle('sel', i === pos));
    $('#bverif').disabled = false;
}

function verificar(){

    if(respondida || escolha === null) return;
    respondida = true;

    const p = faseAtual.quiz[indiceAtual];
    const certa = quizOrdem[escolha] === p.c;

    document.querySelectorAll('.alt').forEach((b, i) => {
        b.disabled = true;
        b.classList.remove('sel');
        if(quizOrdem[i] === p.c){
            b.classList.add('ok');
        }else if(i === escolha){
            b.classList.add('no2');
        }
    });

    if(certa){
        acertos++;
    }else{
        vidas--;
    }

    $('#viv').textContent = '❤️ ' + vidas;
    $('#rod').className = 'rod ' + (certa ? 'ok' : 'err');

    const acabou = !certa && vidas <= 0;

    $('#rodin').innerHTML =
        '<span class="msg">' + (certa ? 'Muito bem!' : 'Quase! A resposta certa está destacada.') + '</span>' +
        '<button class="btn ' + (certa ? '' : 'err') + '" onclick="' + (acabou ? 'semVidas()' : 'proximaPergunta()') + '">Continuar</button>';

}

function proximaPergunta(){
    indiceAtual++;
    if(indiceAtual >= faseAtual.quiz.length){
        terminarQuiz();
    }else{
        mostrarQuiz();
    }
}

function semVidas(){
    $('#rod').className = 'rod';
    $('#corpo').innerHTML =
        '<div class="fim">' +
            '<div class="gde">💔</div>' +
            '<h2>Suas vidas acabaram</h2>' +
            '<p class="sub">Sem problemas! Tente de novo.</p>' +
        '</div>';

    $('#rodin').innerHTML =
        '<button class="btn sec" onclick="sair()">Sair</button>' +
        '<button class="btn" onclick="iniciarQuiz()">Tentar de novo</button>';
}

function terminarQuiz(){

    const xp = acertos * 10;
    registrarProgresso(xp);

    $('#lfill').style.width = '100%';
    $('#rod').className = 'rod';

    $('#corpo').innerHTML =
        '<div class="fim">' +
            '<div class="gde">🎉</div>' +
            '<h2>Introdução concluída!</h2>' +
            '<p class="sub">Você respondeu o quiz até o fim.</p>' +
            '<div class="res">' +
                '<div><b>✅ ' + acertos + '/' + faseAtual.quiz.length + '</b>acertos</div>' +
                '<div><b>⭐ ' + xp + '</b>XP</div>' +
            '</div>' +
        '</div>';

    $('#rodin').innerHTML =
        '<button class="btn sec" onclick="refazerFase()">Fazer de novo</button>' +
        '<button class="btn" onclick="ir(\'libras\')">Continuar</button>';

}


/* =========================
   INICIALIZAÇÃO
========================= */

stats();
atualizarInicio();
acess();

try{
    const telaSalva = sessionStorage.getItem('libmais-tela');
    if(telaSalva && telaSalva !== 'capa'){
        ir(telaSalva);
    }
}catch(e){}
