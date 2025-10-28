

// === POEMAS ===

const filmData = {
  limite: {
    title: "Limite (1931)",
    desc: "Um dos filmes mais enigmáticos do cinema mundial, dirigido por Mário Peixoto. Sem diálogos, é uma meditação visual sobre o tempo, a solidão e o destino humano — um marco do cinema experimental brasileiro feito em plena Era Vargas.",
  },
  cangaceiro: {
    title: "O Cangaceiro (1953)",
    desc: "Inspirado no sertão nordestino e nos bandos de cangaceiros, o filme de Lima Barreto levou o Brasil ao Festival de Cannes e inaugurou a estética do faroeste tropical, misturando aventura, música e crítica social.",
  },
  pagador: {
    title: "O Pagador de Promessas (1962)",
    desc: "Vencedor da Palma de Ouro em Cannes, o filme de Anselmo Duarte narra o drama de um homem simples que tenta cumprir uma promessa religiosa. Reflete o conflito entre fé popular e instituições rígidas na sociedade brasileira.",
  },
  vidassecas: {
    title: "Vidas Secas (1963)",
    desc: "Baseado na obra de Graciliano Ramos, retrata com dureza o sertão e a miséria humana. É um dos maiores ícones do Cinema Novo, onde a paisagem árida espelha a opressão social.",
  },
  terra: {
    title: "Terra em Transe (1967)",
    desc: "Glauber Rocha cria um épico político sobre a crise de poder e idealismo na América Latina. Um filme-poema que simboliza o auge da estética revolucionária do Cinema Novo.",
  },
  macunaima: {
    title: "Macunaíma (1969)",
    desc: "A sátira genial de Joaquim Pedro de Andrade sobre a identidade brasileira. Do mito à modernidade, o herói sem caráter atravessa o Brasil revelando sua diversidade e contradições.",
  },
  donaflor: {
    title: "Dona Flor e Seus Dois Maridos (1976)",
    desc: "Comédia erótica e popular baseada em Jorge Amado. O filme rompe tabus e se torna o maior sucesso do cinema nacional por décadas, misturando humor, sensualidade e cultura baiana.",
  },
  central: {
    title: "Central do Brasil (1998)",
    desc: "Um dos símbolos da Retomada. A jornada de uma professora aposentada e um menino em busca do pai resgata a humanidade num Brasil dividido entre tradição e modernidade. Ganhou o Urso de Ouro em Berlim.",
  },
  cidade: {
    title: "Cidade de Deus (2002)",
    desc: "Realismo brutal e técnica inovadora marcam o filme de Fernando Meirelles. Baseado em fatos reais, retrata a violência e a desigualdade urbana de forma impactante, tornando-se referência mundial.",
  },
  bacurau: {
    title: "Bacurau (2019)",
    desc: "Ficção política e resistência: uma pequena comunidade nordestina luta contra invasores estrangeiros. Um retrato distópico e simbólico do Brasil contemporâneo, aclamado em Cannes.",
  },
};

document.querySelectorAll(".film-strip img").forEach((img) => {
  img.addEventListener("click", () => {
    const key = img.dataset.film;
    const info = filmData[key];
    const infoBox = document.getElementById("film-info");
    infoBox.innerHTML = `<h4>${info.title}</h4><p>${info.desc}</p>`;
    infoBox.classList.remove("hidden");
    infoBox.scrollIntoView({ behavior: "smooth" });
  });
});

// === EXPANDIR / RECOLHER TEXTO ===
document.querySelectorAll('.expandable').forEach(card => {
  const text = card.querySelector('.limited-text');
  const button = card.querySelector('.toggle-btn');

  const originalHeight = text.scrollHeight;
  const limit = 250//e em pixels

  if (originalHeight > limit) {
    text.style.maxHeight = limit + 'px';
    text.style.overflow = 'hidden';
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }

  button.addEventListener('click', () => {
    const expanded = text.classList.toggle('expanded');
    text.style.maxHeight = expanded ? originalHeight + 'px' : limit + 'px';
    button.textContent = expanded ? 'Ver menos' : 'Ver mais';
  });
});
// Estrutura de playlists — adicione suas músicas manualmente
// Elementos do player
const audio = document.getElementById('audio-player');
const cover = document.getElementById('cover');
const title = document.getElementById('track-title');
const artist = document.getElementById('track-artist');

const playBtn = document.getElementById('play-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let currentPlaylist = [];
let currentTrack = 0;

const playlists = {

   
  // === 1930s ===kkkk
  "1930s": [
    { title: "Carinhoso", artist: "Pixinguinha", src: "Carinhoso.mp3", cover: "carinhoso-pinxiguinha.jpg" },
    { title: "Na Baixa do Sapateiro", artist: "Ary Barroso", src: "Na Baixa Do Sapateiro.mp3", cover: "ary.jpeg" },
    { title: "O Teu Cabelo Não Nega", artist: "Lamartine Babo", src: "teu cabelo.mp3", cover: "babo.webp" },
    { title: "Aquarela do Brasil", artist: "Ary Barroso", src: "Aquarela Do Brasil.m4a.mp3", cover: "ary.jpeg" },
    { title: "Mamãe Eu Quero", artist: "Carmen Miranda", src: "Mama eu quero.mp3", cover: "carmem-miranda.jpeg" },
    { title: "No Tabuleiro da Baiana", artist: "Carmen Miranda", src: "No Tabuleiro da Baiana.m4a.mp3", cover: "carmem-miranda.jpeg" },
    { title: "Brasil Pandeiro", artist: "Assis Valente", src: "Brasil Pandeiro.m4a.mp3", cover: "assis.webp" },
    { title: "Taí (Pra Você Gostar de Mim)", artist: "Carmen Miranda", src: "taí.mp3", cover: "carmem-miranda.jpeg" },
    { title: "Boneca de Piche", artist: "Ary Barroso", src: "Boneca de Pixe.mp3", cover: "ary.jpeg" },
    { title: "Linda Flor (Ai, Ioiô)", artist: "Araci Cortes", src: "Linda.mp3", cover: "capas/1930s/araci_cortes.jpg" }
  ],

  // === 1940s ===
  "1940s": [
    { title: "Brasil", artist: "Francisco Alves", src: "Dalva de Oliveira Francisco Alves - Brasil (1939).m4a.mp3", cover: "z3.jpeg" },
    { title: "De Conversa em Conversa", artist: "Isaura Garcia", src: "De Conversa em Conversa.m4a.mp3", cover: "z4.jpeg" },
    { title: "Dama das camélias", artist: "Francisco Alves", src: "Francisco Alves - Dama das camélias (1939).m4a.mp3", cover: "z3.jpeg" },
    { title: "A Dama de Vermelho", artist: "Francisco Alves", src: "A Dama de Vermelho.m4a.mp3", cover: "z3.jpeg" },
    { title: "Asa Branca", artist: "Luiz Gonzaga", src: "Luiz Gonzaga - Asa Branca (Áudio Oficial).m4a.mp3", cover: "Z5.avif" },
    { title: "Maria Betânia", artist: "Nelson Gonçalves", src: "Maria Betânia.m4a.mp3", cover: "Z6.webp" },
    { title: "Ai Que Saudade Da Amélia", artist: "Ataulfo Alves", src: "Ai Que Saudade Da Amélia.m4a.mp3", cover: "Z7.webp" },
    { title: "Atire A Primeira Pedra", artist: "Orlando Silva", src: "Orlando Silva - Atire A Primeira Pedra (Pseudo Video).m4a.mp3", cover: "Z8.jpg" },
    { title: "Brasileirinho", artist: "WALDIR AZEVEDO", src: "WALDIR AZEVEDO -Brasileirinho original.m4a.mp3", cover: "Z9.webp" },
    { title: "A Saudade Mata A Gente", artist: "Dick Farney", src: "A Saudade Mata A Gente.m4a.mp3", cover: "dickprimeiras.webp" }
    
  ],

  // === 1950s ===
  "1950s": [
    { title: "Pé de manacá", artist: "Isaura Garcia", src: "Isaura Garcia Hervê Cordovil - Pé de manacá.m4a.mp3", cover: "z4.jpeg" },
    { title: "Estúpido Cupido", artist: "Celly Campello", src: "Estúpido Cupido.m4a.mp3", cover: "celly.jpg" },
    { title: "Conceição", artist: "Cauby Peixoto", src: "Cauby Peixoto - Conceição (Áudio Oficial).m4a.mp3", cover: "Z10.webp" },
    { title: "Risque", artist: "Linda Batista", src: "Risque.m4a.mp3", cover: "Linda.mp3" },
    { title: "Lata dágua", artist: "Marlene", src: "Lata dágua.m4a.mp3", cover: "Z11.webp" },
    { title: "Café Society", artist: "Jorge Veiga", src: "Café Society - Jorge Veiga - 1955.m4a.mp3", cover: "Z12.jpg" },
    { title: "Vingança", artist: "Linda Batista", src: "Vingança.m4a.mp3", cover: "Linda.mp3" },
    { title: "Tereza Da Praia", artist: "Dick Farney", src: "Tereza Da Praia.m4a.mp3", cover: "dickprimeiras.webp" },
    { title: "Mocinho bonito", artist: "doris monteiro", src: "Mocinho bonito.m4a.mp3", cover: "doris.webp" },
    { title: "ANTONICO", artist: "ALCIDES GERARDI", src: "ANTONICO - ALCIDES GERARDI.m4a.mp3", cover: "Z13.jpeg" }
  ],

  // === 1960s ===
  "1960s": [
    { title: "Garota de ipanema", artist: "Tom Jobin", src: "Garota De Ipanema.m4a.mp3", cover: "inedito.webp" },
    { title: "As Curvas da Estrada de Santos", artist: "Roberto Carlos", src: "As Curvas da Estrada de Santos.mp3", cover: "roberto.jpg" },
    { title: "Mas Que Nada", artist: "Jorge Ben", src: "Mas, Que Nada.mp3", cover: "samba.jpeg" },
    { title: "Trem das Onze", artist: "Adoniran Barbosa", src: "trem Das Onze.m4a.mp3", cover: "adoniran.webp" },
    { title: "Quero que vá Tudo Pro Inferno", artist: "Roberto Carlos", src: "Quero Que Vá Tudo Pro Inferno .mp3", cover: "jovem guarda.webp" },
    { title: "Palhaçada", artist: "", src: "Palhaçada.m4a.mp3", cover: "doris.webp" },
    { title: "Aquele Abraço", artist: "Gilberto Gil", src: "Aquele Abraço .mp3", cover: "gil.webp" },
    { title: "Banho de Lua", artist: "Celly Campello", src: "Banho De Lua .mp3", cover: "celly.jpg" },
    { title: "Alegria Alegria", artist: "Caetano Veloso", src: "Alegria, Alegria.mp3", cover: "capa-caetano.jpeg" },
    { title: "A Banda", artist: "Chico Buarque", src: "A Banda .mp3", cover: "Chico_Buarque.jpg" }
  ],

  // === 1970s ===
  "1970s": [
    { title: "Detalhes", artist: "Roberto Carlos", src: "Roberto Carlos - Detalhes (Áudio Oficial).m4a.mp3", cover: "roberto-71.jpg" },
     { title: "Juventude Tranviada", artist: "Luiz Melodia", src: "Luiz Melodia - Juventude Transviada .mp3", cover: "luis melodia.avif" },
      { title: "Amigo", artist: "Roberto Carlos", src: "Roberto Carlos - Amigo (Áudio Oficial).m4a.mp3", cover: "roberto-77.jpg" },
    { title: "O Bêbado e a Equilibrista", artist: "Elis Regina", src: "O bêbado e a equilibrista.m4a.mp3", cover: "elis regina capa.jpg" },
    { title: "Foi Um rio que passou em minha vida", artist: "Paulinho da Viola", src: "Foi Um Rio Que Passou Em Minha Vida.m4a.mp3", cover: "paulinho.webp" },
    { title: "Moro onde não mora ninguem", artist: "Agepê", src: "Moro onde não mora ninguém.m4a.mp3", cover: "agepe.jpeg" },
    { title: "Sangue Latino", artist: "Secos & Molhados", src: "Sangue Latino (Remasterizado).m4a.mp3", cover: "secos 7 molhados.jpeg" },
    { title: "Paralelas", artist: "Vanusa", src: "Vanusa - Paralelas (Pseudo Video).m4a.mp3", cover: "vanusa.webp" },
    { title: "Na rua, Na chuva, Na fazenda", artist: "Hyldon", src: "Na Rua, Na Chuva, Na Fazenda - Hyldon.m4a.mp3", cover: "hyldon.jpg" },
    { title: "Meu Mundo e Nada Mais", artist: "Guilherme Arantes", src: "Meu Mundo E Nada Mais.m4a.mp3", cover: "guilhermearantes.png" },
  ],

  // === 1980s ===
  "1980s": [
    { title: "Menina Veneno", artist: "Ritchie", src: "Ritchie Menina Veneno HQ.m4a.mp3", cover: "ritchie.webp" },
     { title: "Balance", artist: "Gal Costa", src: "Balancê.m4a.mp3", cover: "gal costa.webp" },
    { title: "Sonifera Ilha", artist: "Titans", src: "Sonífera ilha.m4a.mp3", cover: "arte-BR/titans.jpeg" },
    { title: "Faz parte do meu Show", artist: "Cazuza", src: "Faz Parte Do Meu Show.m4a.mp3", cover: "cazuza.webp" },
    { title: "Bem que si quis", artist: "Marisa Monte", src: "Marisa Monte - Bem Que Se Quis.m4a.mp3", cover: "marisa.webp" },
    { title: "Muito Estranho", artist: "Dalto", src: "Muito Estranho (Cuida Bem de Mim).m4a.mp3", cover: "daltocapa.jpg" },
    { title: "Baila Comigo", artist: "Rita Lee", src: "Baila Comigo.m4a.mp3", cover: "rita.webp" },
    { title: "Como Eu Quero", artist: "Kid Abelha", src: "Como eu quero.m4a.mp3", cover: "kid-abelha-e-os-aboboras-selvagens-seu-espiao-Cover-Art.jpg" },
    { title: "Dona", artist: "Roupa Nova", src: "Roupa Nova - Dona (Áudio Oficial).m4a.mp3", cover: "roupa nova.jpg" },
    { title: "Que país é Esse", artist: "Legião Urbana", src: "Que Pais É Este.m4a.mp3", cover: "Z.jpeg" }
  ],

  // === 1990s ===
  "1990s": [
    { title: "Sozinho", artist: "Caetano Veloso", src: "Caetano Veloso - Sozinho.m4a.mp3", cover: "caetano capa.webp" },
    { title: "Garota Nacional", artist: "Skank", src: "Skank - Garota Nacional (Áudio Oficial).m4a.mp3", cover: "Skank_-_O_Samba_Poconé.jpg" },
    { title: "Evidencias", artist: "Xitãozinho & Chororo", src: "Evidências (Remastered 2020).m4a.mp3", cover: "z2.jpeg" },
    { title: "Que se chama amor", artist: "So pra contrariar", src: "Só Pra Contrariar - Que Se Chama Amor (Áudio Oficial).m4a.mp3", cover: "so pra.webp" },
    { title: "MIna de fé", artist: "Os Morenos", src: "Mina de Fe - Os Morenos.m4a.mp3", cover: "os morenos.avif" },
     { title: "Vira Vira", artist: "Mamonas Assassinas", src: "Mamonas Assassinas - Vira-Vira (Lyric Video).m4a.mp3", cover: "mamonas.jpg" },
    { title: "Cada volta um recomeço", artist: "Zezé Dicamargo & Luciano", src: "Cada Volta é um Recomeço.m4a.mp3", cover: "zeze.jpg" },
    { title: "Palpite", artist: "Vanessa Rangel", src: "Palpite.m4a.mp3", cover: "vanessa.webp" },
    { title: "Pra Falar a Verdade", artist: "Daniel", src: "Pra falar a verdade.m4a.mp3", cover: "daniel.avif" },
     { title: "Pelados em Santos", artist: "Mamonas Assassinas", src: "Mamonas Assassinas - Pelados em Santos (Videoclipe).m4a.mp3", cover: "mamonas.jpg" }
  ],

   "2000s": [
    { title: "Boa Sorte ", artist: "Vanessa Da Mata ", src: "Boa Sorte.m4a.mp3 ", cover: "Z30.jpg " },
    { title: "Se Eu Não Te Amasse Tanto Assim ", artist: "Ivete Sangalo ", src: "Se Eu Não Te Amasse Tanto Assim.m4a.mp3 ", cover: "Z31.jpg " },
    { title: "Quem de nós dois ", artist: "Ana Carolina ", src: "Ana Carolina - Quem De Nós Dois (La Mia Storia Tra Le Dita).m4a.mp3 ", cover: "Z32.webp" },
    { title: "Velha infancia ", artist: " tribalistas", src: "Tribalistas - Velha Infância.m4a.mp3 ", cover: "Z33.jpg" },
    { title: "Fui Eu ", artist: "Zezé Di Camargo Luciano ", src: "Zezé Di Camargo Luciano - Fui Eu (Áudio Oficial).m4a.mp3 ", cover: "zeze.jpg " },
    { title: "Nosso Amor é Ouro ", artist: "Zezé Di Camargo Luciano ", src: "Zezé Di Camargo Luciano - Nosso Amor é Ouro (Áudio Oficial).m4a.mp3", cover: "zeze.jpg " },
    { title: "Toque de Mágica ", artist: "Pedro Thiago ", src: "Pedro Thiago - Toque de Mágica (Videoclipe).m4a.mp3", cover: "Z35.avif " },
    { title: "Amor I Love You ", artist: "Marisa Monte ", src: "Marisa Monte - Amor I Love You.m4a.mp3 ", cover: "Z36.webp" },
    { title: "Tô nem Aí ", artist: "Luka ", src: "Luka - Tô nem Aí.m4a.mp3 ", cover: "Z37.webp " },
    { title: "Vou Deixar ", artist: " Skank", src: "Skank - Vou Deixar.m4a.mp3 ", cover: "Z38.jpg" },
    
  ],
   "2010s": [
    { title: "Fugidinha ", artist: "Michel Teló ", src: "Michel Teló Fugidinha.....m4a.mp3 ", cover: "Z14.avif" },
    { title: "Amo Noite E Dia ", artist: "Jorge Mateus ", src: "Jorge Mateus - Amo Noite E Dia.m4a.mp3 ", cover: "Z15.avif " },
    { title: "Adrenalina ", artist: "Luan Santana ", src: "Luan Santana - Adrenalina - DVD Ao Vivo no Rio de Janeiro Vídeo Oficial.m4a.mp3", cover: "Z16.avif " },
    { title: "Tapa na Cara ", artist: "Zezé Di Camargo Luciano ", src: "Zezé Di Camargo Luciano - Tapa na Cara (Clipe Oficial).m4a.mp3 ", cover: "zeze.jpg " },
    { title: "Ta vendo aquela lua", artist: "Exaltasamba ", src: "Exaltasamba - Ta vendo aquela lua.wmv.m4a.mp3", cover: "Z19.jpg " },
    { title: "Só Rezo ", artist: "NX Zero ", src: "NX Zero - Só Rezo.m4a.mp3 ", cover: "Z17.webp" },
    { title: "As Máscaras ", artist: " Claudia Leitte ", src: "As Máscaras - Claudia Leitte.m4a.mp3", cover: "Z18.jpg " },
    { title: " Madri", artist: "Fernando Sorocaba", src: "Fernando Sorocaba - Madri DVD Acústico.m4a.mp3 ", cover: "Z20.webp " },
    { title: "Estrela Cadente ", artist: "Victor Leo ", src: "Victor Leo - Estrela Cadente.m4a.mp3 ", cover: "Z21.jpeg " }
  ],
}


// === Função para carregar faixa ===
function loadTrack() {
  if (!currentPlaylist.length) return;
  const track = currentPlaylist[currentTrack];
  audio.src = track.src;
  cover.src = track.cover;
  title.textContent = track.title;
  artist.textContent = track.artist;
  audio.play();
}

// Próxima e anterior
function nextTrack() {
  currentTrack = (currentTrack + 1) % currentPlaylist.length;
  loadTrack();
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + currentPlaylist.length) % currentPlaylist.length;
  loadTrack();
}

// Controles
playBtn.addEventListener('click', () => {
  if (audio.paused) audio.play();
  else audio.pause();
});

nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);

// Quando terminar, toca a próxima
audio.addEventListener('ended', nextTrack);

// Botões das décadas
document.querySelectorAll('#playlist-buttons .btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const decade = btn.dataset.decade;
    if (playlists[decade]) {
      currentPlaylist = playlists[decade];
      currentTrack = 0;
      loadTrack();
    } else {
      alert("Playlist desta década não disponível.");
    }
  });
});

const poems = {
  'dias-1': `"Canção do Exílio" — Gonçalves Dias

Minha terra tem palmeiras,
Onde canta o Sabiá;
As aves que aqui gorjeiam,
Não gorjeiam como lá.

Nosso céu tem mais estrelas,
Nossas várzeas têm mais flores,
Nossos bosques têm mais vida,
Nossa vida mais amores.

Em cismar — sozinho — à noite,
Mais prazer encontro eu lá;
Minha terra tem palmeiras,
Onde canta o Sabiá.

Minha terra tem primores
Que tais não encontro eu cá;
Em cismar — sozinho — à noite,
Mais prazer encontro eu lá;
Minha terra tem palmeiras,
Onde canta o Sabiá.

Não permita Deus que eu morra,
Sem que eu volte para lá;
Sem que desfrute os primores
Que não encontro por cá;
Sem qu’inda aviste as palmeiras,
Onde canta o Sabiá.
---
Versos de saudade e identidade. Gonçalves Dias transforma a distância em canto patriótico, exaltando a natureza como símbolo da alma brasileira.`,

  'drummond-1': `"No Meio do Caminho" — Carlos Drummond de Andrade

No meio do caminho tinha uma pedra
Tinha uma pedra no meio do caminho
Tinha uma pedra
No meio do caminho tinha uma pedra.

Nunca me esquecerei desse acontecimento
Na vida de minhas retinas tão fatigadas.
Nunca me esquecerei que no meio do caminho
Tinha uma pedra
Tinha uma pedra no meio do caminho
No meio do caminho tinha uma pedra.
---
Repetição como existência: Drummond eterniza o obstáculo. A pedra é a própria condição humana — o peso inevitável do viver.`,

  'castro-1': `"O Navio Negreiro" — Castro Alves

'Stamos em pleno mar... Doudo no espaço
Brinca o luar — dourada harpa tísica —
E a brisa amante, embala o leito amplo
Do oceano...

Era um sonho dantesco... o tombadilho,
Que das luzernas avermelha o brilho,
Em sangue a se banhar.
Tinir de ferros... estalar de açoite...
Legiões de homens negros como a noite,
Horrendos a dançar...

Negras mulheres, suspendendo às tetas
Magras crianças, cujas bocas pretas
Rega o sangue das mães:
Outras moças, mas nuas e espantadas,
No turbilhão de espectros arrastadas,
Em ânsias infernais!

E ri-se a orquestra irônica, estridente...
E da ronda fantástica a serpente
Faz d’homens coros mil...
Se o velho oceano, em sua eterna prece,
Como um velho monge ajoelha e desce,
Ouvindo aquele horror febril...

Senhor Deus dos desgraçados!
Dizei-me vós, Senhor Deus!
Se é loucura... se é verdade
Tanto horror perante os céus!
Ó mar! Por que não apagas
Com a esponja de tuas vagas
Do teu manto este borrão?...
Astros! noites! tempestades!
Rolai das imensidades!
Varrei os mares, tufão!
---
Castro Alves ergue um grito contra a barbárie da escravidão. O poema é o próprio clamor da humanidade diante do horror e da culpa histórica.`,

  'bandeira-1': `"Vou-me Embora pra Pasárgada" — Manuel Bandeira

Vou-me embora pra Pasárgada
Lá sou amigo do rei
Lá tenho a mulher que eu quero
Na cama que escolherei.

Vou-me embora pra Pasárgada
Aqui eu não sou feliz
Lá a existência é uma aventura
De tal modo inconsequente
Que Joana, a louca de Espanha,
Rainha e falsa demente,
Vem a ser contraparente
Da nora que nunca tive.

E como farei ginástica
Andarei de bicicleta
Montarei em burro bravo
Subirei no pau-de-sebo
Tomarei banhos de mar!

E quando estiver cansado
Deito na beira do rio
Mando chamar a mãe-d’água
Pra me contar as histórias
Que no tempo de eu menino
Rosa vinha me contar.

Vou-me embora pra Pasárgada
Lá sou amigo do rei
Lá tenho a mulher que eu quero
Na cama que escolherei.

Em Pasárgada tem tudo
É outra civilização
Tem um processo seguro
De impedir a concepção
Tem telefone automático
Tem alcaloide à vontade
Tem prostitutas bonitas
Para a gente namorar.

E quando eu estiver mais triste
Mas triste de não ter jeito
Quando de noite me der
Vontade de me matar —
Lá sou amigo do rei —
Terei a mulher que eu quero
Na cama que escolherei.
---
Pasárgada é fuga e utopia. Bandeira cria o refúgio do espírito: um país imaginário onde o impossível é libertação.`,

  'bilac-1': `"Ouvir Estrelas" — Olavo Bilac

Ora (direis) ouvir estrelas! Certo,
Perdeste o senso! E eu vos direi, no entanto,
Que, para ouvi-las, muita vez desperto
E abro as janelas, pálido de espanto...

E conversamos toda a noite, enquanto
A Via-Láctea, como um pálio aberto,
Cintila. E, ao vir do sol, saudoso e em pranto,
Inda as procuro pelo céu deserto.

Direis agora: “Tresloucado amigo!
Que conversas com elas? Que sentido
Tem o que dizem, quando estão contigo?”

E eu vos direi: “Amai para entendê-las!
Pois só quem ama pode ter ouvido
Capaz de ouvir e de entender estrelas.”
---
Bilac transforma o amor em audição cósmica. O sentir é a linguagem secreta do universo — amar é compreender o invisível.`,

  'mendes-1': `"Morte do Leiteiro" — Murilo Mendes

O leiteiro passa
Todas as manhãs
Deixando leite nas portas.
Hoje passou e deixou sangue.
O leiteiro foi morto —
E o leiteiro era um homem bom.

Mas a polícia não sabe
E talvez nunca saiba.
O poeta sabe,
E o povo talvez saiba,
Mas não há justiça que saiba.

O leiteiro morreu —
E a vida continua a mesma.
O leite derramado é branco e puro,
Mas o chão o suja,
E o tempo o seca.
---
Murilo Mendes faz da tragédia cotidiana um espelho social. O leite derramado é a pureza manchada pela violência e pela indiferença.`,

  'vinicius-1': `"Soneto de Fidelidade" — Vinicius de Moraes

De tudo, ao meu amor serei atento
Antes, e com tal zelo, e sempre, e tanto
Que mesmo em face do maior encanto
Dele se encante mais meu pensamento.

Quero vivê-lo em cada vão momento
E em seu louvor hei de espalhar meu canto
E rir meu riso e derramar meu pranto
Ao seu pesar ou seu contentamento.

E assim, quando mais tarde me procure
Quem sabe a morte, angústia de quem vive,
Quem sabe a solidão, fim de quem ama,

Eu possa me dizer do amor (que tive):
Que não seja imortal, posto que é chama,
Mas que seja infinito enquanto dure.
---
Vinicius transforma o amor em ritual de presença. O sentimento não precisa durar para ser eterno — basta ser inteiro.`,

  'joao-1': `"Cemitério de Pneus" — João Cabral de Melo Neto

A paisagem se alarga e se degrada:
um cemitério de pneus, pretos, abertos
como bocas que o sol resseca e estala.
Ali repousam os restos da pressa humana.

Entre o ferro, o pó e o silêncio,
há uma geometria do cansaço:
tudo gira, mesmo parado,
no deserto industrial da memória.
---
João Cabral observa o mundo como quem disseca a matéria. O cemitério de pneus é a metáfora da civilização exaurida pelo próprio movimento.`,

  'anjos-1': `"Os Sapos" — Augusto dos Anjos

Enfunando os papos,
Saem da penumbra,
Aos pulos, os sapos.
A luz os deslumbra.

Em ronco que aterra,
Berra o sapo-boi:
— Meu pai foi à guerra!
— Não foi! — foi! — não foi!

O sapo-tanoeiro,
Parnasiano aguado,
Diz: — Meu cancioneiro
É bem martelado.

Vede como primo
Em comer os hiatos!
Que arte! e nunca rimo
Os termos cognatos.

O sapo-cururu,
Da beira do rio,
Disse: — O mundo é nosso!
E o verso é um estio!

Os sapos, coaxando,
Vêm todos rimando
Suas longas loas...
Pulam e se esgoelam.

Por fim, com voz rouca,
Grita o sapo-boi:
— As outras saparias
Deixem que eu sou o pai!

E o poeta observa,
Da beira do charco,
Que o verso, às vezes,
Também é um sapo.
---
Augusto dos Anjos ridiculariza a poesia artificial. “Os Sapos” é sátira e manifesto: o grotesco expõe o vazio da forma sem alma.`,

  'nelson-1': `"Toda unanimidade é burra." — Nelson Rodrigues

Frase-poema, aforismo, provocação.
Nelson não escreve — atira. 
Sua sentença é navalha moral: 
a desconfiança diante do consenso,
a celebração do pensamento solitário.

Toda unanimidade é burra —
porque pensar diferente é o único modo
de ser livre entre os cegos.
---
Nelson Rodrigues transforma a frase em arte. É o anti-poema que resume sua filosofia: o desconforto é a verdadeira lucidez.`
};

// Modal handling
const buttons = document.querySelectorAll('.poem-btn'); // agora só pega os botões de poema
const modal = document.getElementById('poemModal');
const poemText = document.getElementById('poemText');
const closeBtn = document.querySelector('.close');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-poem');
    poemText.textContent = poems[key] || 'Poema não encontrado.';
    modal.style.display = 'block';
  });
});

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target == modal) modal.style.display = 'none'; };

