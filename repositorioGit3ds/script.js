// Cada item possui: área, nome, categoria e finalidade.
// As descrições "[PREENCHER]" formam as lacunas do exercício em grupo.
const conteudos = [
    // HTML: elementos atuais e elementos históricos importantes
    // Card #001
    { area: "HTML", nome: "html", categoria: "Documento", descricao: "[PREENCHER]" },
    // Card #002
    { area: "HTML", nome: "head", categoria: "Documento", descricao: "[PREENCHER]" },
    // Card #003
    { area: "HTML", nome: "title", categoria: "Documento", descricao: "Define o título exibido na aba do navegador." },
    // Card #004
    { area: "HTML", nome: "base", categoria: "Documento", descricao: "Define a URL base e o destino padrão dos links do documento." },
    // Card #005
    { area: "HTML", nome: "link", categoria: "Documento", descricao: "Relaciona o documento a um recurso externo, como uma folha de estilos." },
    // Card #006
    { area: "HTML", nome: "meta", categoria: "Documento", descricao: "[PREENCHER]" },
    // Card #007
    { area: "HTML", nome: "style", categoria: "Documento", descricao: "[PREENCHER]" },
    // Card #008
    { area: "HTML", nome: "body", categoria: "Documento", descricao: "Contém todo o conteúdo visível e interativo da página." },
    // Card #009
    { area: "HTML", nome: "address", categoria: "Estrutura", descricao: "Apresenta informações de contato relacionadas ao conteúdo." },
    // Card #010
    { area: "HTML", nome: "article", categoria: "Estrutura", descricao: "Serve para marcar um conteúdo que faz sentido por si só." },
    // Card #011
    { area: "HTML", nome: "aside", categoria: "Estrutura", descricao: "[PREENCHER]" },
    // Card #012
    { area: "HTML", nome: "footer", categoria: "Estrutura", descricao: "Define o rodapé de uma página, seção ou bloco de conteúdo." },
    // Card #013
    { area: "HTML", nome: "header", categoria: "Estrutura", descricao: "[PREENCHER]" },
    // Card #014
    { area: "HTML", nome: "h1-h6", categoria: "Estrutura", descricao: "Definem seis níveis hierárquicos de títulos." },
    // Card #015
    { area: "HTML", nome: "hgroup", categoria: "Estrutura", descricao: "Agrupa um título com subtítulo ou texto secundário." },
    // Card #016
    { area: "HTML", nome: "main", categoria: "Estrutura", descricao: "Identifica o conteúdo principal e único do documento." },
    // Card #017
    { area: "HTML", nome: "nav", categoria: "Estrutura", descricao: "[PREENCHER]" },
    // Card #018
    { area: "HTML", nome: "section", categoria: "Estrutura", descricao: "[PREENCHER]" },
    // Card #019
    { area: "HTML", nome: "search", categoria: "Estrutura", descricao: "Agrupa controles usados para pesquisar ou filtrar conteúdo." },
    // Card #020
    { area: "HTML", nome: "blockquote", categoria: "Texto", descricao: "Representa uma citação longa vinda de outra fonte." },
    // Card #021
    { area: "HTML", nome: "div", categoria: "Texto", descricao: "Agrupar Elementos, Organizar o layout e aplicar estilo em páginas web" },
    // Card #022
    { area: "HTML", nome: "dl", categoria: "Texto", descricao: "[PREENCHER]" },
    // Card #023
    { area: "HTML", nome: "dt", categoria: "Texto", descricao: "[PREENCHER]" },
    // Card #024
    { area: "HTML", nome: "dd", categoria: "Texto", descricao: "Fornece a descrição ou valor associado a um termo." },
    // Card #025
    { area: "HTML", nome: "figure", categoria: "Texto", descricao: "Agrupa conteúdo autocontido, como imagem, gráfico, tabela ou código." },
    // Card #026
    { area: "HTML", nome: "figcaption", categoria: "Texto", descricao: "Define a legenda ou explicação de um elemento figure." },
    // Card #027
    { area: "HTML", nome: "hr", categoria: "Texto", descricao: "Marca uma mudança temática entre blocos de conteúdo." },
    // Card #028
    { area: "HTML", nome: "li", categoria: "Texto", descricao: "Representa um item dentro de uma lista." },
    // Card #029
    { area: "HTML", nome: "menu", categoria: "Texto", descricao: "[PREENCHER]" },
    // Card #030
    { area: "HTML", nome: "ol", categoria: "Texto", descricao: "Cria uma lista ordenada." },
    // Card #031
    { area: "HTML", nome: "p", categoria: "Texto", descricao: "[PREENCHER]" },
    // Card #032
    { area: "HTML", nome: "pre", categoria: "Texto", descricao: "Preserva espaços, indentação e quebras de linha do texto original." },
    // Card #033
    { area: "HTML", nome: "ul", categoria: "Texto", descricao: "Serve para criar uma lista não ordenada"},
    // Card #034
    { area: "HTML", nome: "a", categoria: "Semântica em linha", descricao: "Cria um hiperlink para outra URL, arquivo, email, telefone ou ponto da página." },
    // Card #035
    { area: "HTML", nome: "abbr", categoria: "Semântica em linha", descricao: "Indica uma abreviação ou sigla." },
    // Card #036
    { area: "HTML", nome: "b", categoria: "Semântica em linha", descricao: "Chama atenção visual sem acrescentar importância semântica." },
    // Card #037
    { area: "HTML", nome: "bdi", categoria: "Semântica em linha", descricao: "[PREENCHER]" },
    // Card #038
    { area: "HTML", nome: "bdo", categoria: "Semântica em linha", descricao: "[PREENCHER]" },
    // Card #039
    { area: "HTML", nome: "br", categoria: "Semântica em linha", descricao: "Insere uma quebra de linha." },
    // Card #040
    { area: "HTML", nome: "cite", categoria: "Semântica em linha", descricao: "Indica o título de uma obra citada." },
    // Card #041
    { area: "HTML", nome: "code", categoria: "Semântica em linha", descricao: "Representa um pequeno trecho de código." },
    // Card #042
    { area: "HTML", nome: "data", categoria: "Semântica em linha", descricao: "[PREENCHER]" },
    // Card #043
    { area: "HTML", nome: "dfn", categoria: "Semântica em linha", descricao: "Marca o termo que está sendo definido." },
    // Card #044
    { area: "HTML", nome: "em", categoria: "Semântica em linha", descricao: "[PREENCHER]" },
    // Card #045
    { area: "HTML", nome: "i", categoria: "Semântica em linha", descricao: "Destaca texto por voz, idioma, termo técnico ou pensamento." },
    // Card #046
    { area: "HTML", nome: "kbd", categoria: "Semântica em linha", descricao: "Representa uma entrada do usuário, como tecla ou comando." },
    // Card #047
    { area: "HTML", nome: "mark", categoria: "Semântica em linha", descricao: "Destaca um trecho relevante no contexto atual." },
    // Card #048
    { area: "HTML", nome: "q", categoria: "Semântica em linha", descricao: "Serve para marcar uma citação curta em linha" },
    // Card #049
    { area: "HTML", nome: "ruby", categoria: "Semântica em linha", descricao: "[PREENCHER]" },
    // Card #050
    { area: "HTML", nome: "rp", categoria: "Semântica em linha", descricao: "[PREENCHER]" },
    // Card #051
    { area: "HTML", nome: "rt", categoria: "Semântica em linha", descricao: "[PREENCHER]" },
    // Card #052
    { area: "HTML", nome: "s", categoria: "Semântica em linha", descricao: "Indica conteúdo que deixou de ser correto ou relevante." },
    // Card #053
    { area: "HTML", nome: "samp", categoria: "Semântica em linha", descricao: "[PREENCHER]" },
    // Card #054
    { area: "HTML", nome: "small", categoria: "Semântica em linha", descricao: "Representa observações laterais, avisos legais ou letras pequenas." },
    // Card #055
    { area: "HTML", nome: "span", categoria: "Semântica em linha", descricao: "Contêiner genérico em linha, sem semântica própria." },
    // Card #056
    { area: "HTML", nome: "strong", categoria: "Semântica em linha", descricao: "Indica grande importância, seriedade ou urgência." },
    // Card #057
    { area: "HTML", nome: "sub", categoria: "Semântica em linha", descricao: "Serve para definir um texto subscrito" },
    // Card #058
    { area: "HTML", nome: "sup", categoria: "Semântica em linha", descricao: "[PREENCHER]" },
    // Card #059
    { area: "HTML", nome: "time", categoria: "Semântica em linha", descricao: "[PREENCHER]" },
    // Card #060
    { area: "HTML", nome: "u", categoria: "Semântica em linha", descricao: "[PREENCHER]" },
    // Card #061
    { area: "HTML", nome: "var", categoria: "Semântica em linha", descricao: "[PREENCHER]" },
    // Card #062
    { area: "HTML", nome: "wbr", categoria: "Semântica em linha", descricao: "Sugere um ponto opcional de quebra de linha." },
    // Card #063
    { area: "HTML", nome: "del", categoria: "Alterações", descricao: "Marca conteúdo removido do documento." },
    // Card #064
    { area: "HTML", nome: "ins", categoria: "Alterações", descricao: "Marca conteúdo acrescentado ao documento." },
    // Card #065
    { area: "HTML", nome: "area", categoria: "Mídia", descricao: "Define uma região clicável dentro de um mapa de imagem." },
    // Card #066
    { area: "HTML", nome: "audio", categoria: "Mídia", descricao: "Incorpora conteúdo de áudio." },
    // Card #067
    { area: "HTML", nome: "img", categoria: "Mídia", descricao: "Serve para inserir e exibir imagens em uma página web" },
    // Card #068
    { area: "HTML", nome: "map", categoria: "Mídia", descricao: "[PREENCHER]" },
    // Card #069
    { area: "HTML", nome: "track", categoria: "Mídia", descricao: "[PREENCHER]" },
    // Card #070
    { area: "HTML", nome: "video", categoria: "Mídia", descricao: "Incorpora um vídeo e seus controles opcionais." },
    // Card #071
    { area: "HTML", nome: "embed", categoria: "Incorporado", descricao: "[PREENCHER]" },
    // Card #072
    { area: "HTML", nome: "fencedframe", categoria: "Incorporado", descricao: "[PREENCHER]" },
    // Card #073
    { area: "HTML", nome: "iframe", categoria: "Incorporado", descricao: "[PREENCHER]" },
    // Card #074
    { area: "HTML", nome: "object", categoria: "Incorporado", descricao: "[PREENCHER]" },
    // Card #075
    { area: "HTML", nome: "picture", categoria: "Incorporado", descricao: "Oferece versões alternativas de imagem para tamanhos e formatos diferentes." },
    // Card #076
    { area: "HTML", nome: "source", categoria: "Incorporado", descricao: "Define fontes alternativas para picture, áudio ou vídeo." },
    // Card #077
    { area: "HTML", nome: "canvas", categoria: "Gráficos", descricao: "Área desenhável controlada por JavaScript." },
    // Card #078
    { area: "HTML", nome: "svg", categoria: "Gráficos", descricao: "[PREENCHER]" },
    // Card #079
    { area: "HTML", nome: "math", categoria: "Gráficos", descricao: "Elemento raiz para fórmulas em MathML." },
    // Card #080
    { area: "HTML", nome: "script", categoria: "Scripts", descricao: "[PREENCHER]" },
    // Card #081
    { area: "HTML", nome: "noscript", categoria: "Scripts", descricao: "Exibe conteúdo alternativo quando scripts estão desativados." },
    // Card #082
    { area: "HTML", nome: "caption", categoria: "Tabelas", descricao: "Define o título ou legenda de uma tabela." },
    // Card #083
    { area: "HTML", nome: "col", categoria: "Tabelas", descricao: "Define propriedades de uma coluna de tabela." },
    // Card #084
    { area: "HTML", nome: "colgroup", categoria: "Tabelas", descricao: "Agrupa colunas para receber formato ou significado comum." },
    // Card #085
    { area: "HTML", nome: "table", categoria: "Tabelas", descricao: "Representa dados organizados em linhas e colunas." },
    // Card #086
    { area: "HTML", nome: "tbody", categoria: "Tabelas", descricao: "Agrupa as linhas que formam o corpo da tabela." },
    // Card #087
    { area: "HTML", nome: "td", categoria: "Tabelas", descricao: "Define uma célula comum de dados." },
    // Card #088
    { area: "HTML", nome: "tfoot", categoria: "Tabelas", descricao: "Agrupa as linhas de rodapé da tabela." },
    // Card #089
    { area: "HTML", nome: "th", categoria: "Tabelas", descricao: "Define uma célula de cabeçalho em uma tabela." },
    // Card #090
    { area: "HTML", nome: "thead", categoria: "Tabelas", descricao: "Agrupa as linhas de cabeçalho da tabela." },
    // Card #091
    { area: "HTML", nome: "tr", categoria: "Tabelas", descricao: "[PREENCHER]" },
    // Card #092
    { area: "HTML", nome: "button", categoria: "Formulários", descricao: "[PREENCHER]" },
    // Card #093
    { area: "HTML", nome: "datalist", categoria: "Formulários", descricao: "Fornece sugestões predefinidas para um campo." },
    // Card #094
    { area: "HTML", nome: "fieldset", categoria: "Formulários", descricao: "[PREENCHER]" },
    // Card #095
    { area: "HTML", nome: "form", categoria: "Formulários", descricao: "Reune controles para coletar e enviar dados." },
    // Card #096
    { area: "HTML", nome: "input", categoria: "Formulários", descricao: "[PREENCHER]" },
    // Card #097
    { area: "HTML", nome: "label", categoria: "Formulários", descricao: "[PREENCHER]" },
    // Card #098
    { area: "HTML", nome: "legend", categoria: "Formulários", descricao: "[PREENCHER]" },
    // Card #099
    { area: "HTML", nome: "meter", categoria: "Formulários", descricao: "Exibe uma medida dentro de um intervalo conhecido." },
    // Card #100
    { area: "HTML", nome: "optgroup", categoria: "Formulários", descricao: "[PREENCHER]" },
    // Card #101
    { area: "HTML", nome: "option", categoria: "Formulários", descricao: "Define uma opcao de select, optgroup ou datalist." },
    // Card #102
    { area: "HTML", nome: "output", categoria: "Formulários", descricao: "Mostra o resultado de um cálculo ou ação do formulário." },
    // Card #103
    { area: "HTML", nome: "progress", categoria: "Formulários", descricao: "[PREENCHER]" },
    // Card #104
    { area: "HTML", nome: "select", categoria: "Formulários", descricao: "Cria um controle para escolher uma ou mais opcoes." },
    // Card #105
    { area: "HTML", nome: "selectedcontent", categoria: "Formulários", descricao: "[PREENCHER]" },
    // Card #106
    { area: "HTML", nome: "textarea", categoria: "Formulários", descricao: "Cria um campo de texto com várias linhas." },
    // Card #107
    { area: "HTML", nome: "details", categoria: "Interativos", descricao: "[PREENCHER]" },
    // Card #108
    { area: "HTML", nome: "dialog", categoria: "Interativos", descricao: "[PREENCHER]" },
    // Card #109
    { area: "HTML", nome: "summary", categoria: "Interativos", descricao: "[PREENCHER]" },
    // Card #110
    { area: "HTML", nome: "slot", categoria: "Web Components", descricao: "[PREENCHER]" },
    // Card #111
    { area: "HTML", nome: "template", categoria: "Web Components", descricao: "Guarda HTML que não é renderizado até ser usado por script." },
    // Card #112
    { area: "HTML", nome: "param", categoria: "Legado/obsoleto", descricao: "Elemento obsoleto que configurava parâmetros de object; evite seu uso." },
    // Card #113
    { area: "HTML", nome: "acronym, big, center, content, dir, font, frame, frameset, image, marquee, menuitem, nobr, noembed, noframes, plaintext, rb, rtc, shadow, strike, tt, xmp", categoria: "Legado/obsoleto", descricao: "Elementos obsoletos ou removidos: não devem ser usados em novos projetos." },

    // CSS: propriedades, seletores, funções, at-rules e conceitos atuais
    // Card #114
    { area: "CSS", nome: "color", categoria: "Cores e texto", descricao: "[PREENCHER]" },
    // Card #115
    { area: "CSS", nome: "background", categoria: "Cores e fundos", descricao: "Atalho para cor, imagem, posição, tamanho e repetição do fundo." },
    // Card #116
    { area: "CSS", nome: "background-color", categoria: "Cores e fundos", descricao: "Define a cor de fundo de um elemento." },
    // Card #117
    { area: "CSS", nome: "background-image", categoria: "Cores e fundos", descricao: "Aplica imagem, gradiente ou camada visual no fundo." },
    // Card #118
    { area: "CSS", nome: "opacity", categoria: "Cores e fundos", descricao: "Controla a transparência de um elemento inteiro." },
    // Card #119
    { area: "CSS", nome: "box-shadow", categoria: "Cores e fundos", descricao: "Cria sombra em volta da caixa do elemento." },
    // Card #120
    { area: "CSS", nome: "text-shadow", categoria: "Cores e texto", descricao: "[PREENCHER]" },
    // Card #121
    { area: "CSS", nome: "font-family", categoria: "Tipografia", descricao: "Define a família de fontes usada no texto." },
    // Card #122
    { area: "CSS", nome: "font-size", categoria: "Tipografia", descricao: "Define o tamanho da fonte." },
    // Card #123
    { area: "CSS", nome: "font-weight", categoria: "Tipografia", descricao: "Controla o peso da fonte, como normal, bold ou valores numéricos." },
    // Card #124
    { area: "CSS", nome: "font-style", categoria: "Tipografia", descricao: "Aplica estilo como normal, italic ou oblique." },
    // Card #125
    { area: "CSS", nome: "line-height", categoria: "Tipografia", descricao: "[PREENCHER]" },
    // Card #126
    { area: "CSS", nome: "letter-spacing", categoria: "Tipografia", descricao: "Ajusta o espaço entre letras." },
    // Card #127
    { area: "CSS", nome: "text-align", categoria: "Tipografia", descricao: "Alinha texto no eixo horizontal." },
    // Card #128
    { area: "CSS", nome: "text-decoration", categoria: "Tipografia", descricao: "[PREENCHER]" },
    // Card #129
    { area: "CSS", nome: "text-transform", categoria: "Tipografia", descricao: "Controla o uso de maiúsculas e minúsculas no texto" },
    // Card #130
    { area: "CSS", nome: "white-space", categoria: "Tipografia", descricao: "[PREENCHER]" },
    // Card #131
    { area: "CSS", nome: "overflow-wrap", categoria: "Tipografia", descricao: "[PREENCHER]" },
    // Card #132
    { area: "CSS", nome: "margin", categoria: "Box model", descricao: "[PREENCHER]" },
    // Card #133
    { area: "CSS", nome: "padding", categoria: "Box model", descricao: "[PREENCHER]" },
    // Card #134
    { area: "CSS", nome: "border", categoria: "Box model", descricao: "Atalho para largura, estilo e cor da borda." },
    // Card #135
    { area: "CSS", nome: "border-radius", categoria: "Box model", descricao: "Arredonda os cantos da caixa." },
    // Card #136
    { area: "CSS", nome: "box-sizing", categoria: "Box model", descricao: "Define se largura e altura incluem padding e borda." },
    // Card #137
    { area: "CSS", nome: "width", categoria: "Tamanho", descricao: "Define a espessura horizontal" },
    // Card #138
    { area: "CSS", nome: "height", categoria: "Tamanho", descricao: "[PREENCHER]" },
    // Card #139
    { area: "CSS", nome: "min-width", categoria: "Tamanho", descricao: "[PREENCHER]" },
    // Card #140
    { area: "CSS", nome: "max-width", categoria: "Tamanho", descricao: "[PREENCHER]" },
    // Card #141
    { area: "CSS", nome: "min-height", categoria: "Tamanho", descricao: "Define a menor altura permitida." },
    // Card #142
    { area: "CSS", nome: "max-height", categoria: "Tamanho", descricao: "[PREENCHER]" },
    // Card #143
    { area: "CSS", nome: "display", categoria: "Layout", descricao: "Define o itpo de caixa de renderização de um elemento" },
    // Card #144
    { area: "CSS", nome: "flex", categoria: "Layout", descricao: "[PREENCHER]" },
    // Card #145
    { area: "CSS", nome: "flex-direction", categoria: "Layout", descricao: "Define se os itens flex seguem em linha ou coluna." },
    // Card #146
    { area: "CSS", nome: "flex-wrap", categoria: "Layout", descricao: "[PREENCHER]" },
    // Card #147
    { area: "CSS", nome: "justify-content", categoria: "Layout", descricao: "[PREENCHER]" },
    // Card #148
    { area: "CSS", nome: "align-items", categoria: "Layout", descricao: "[PREENCHER]" },
    // Card #149
    { area: "CSS", nome: "align-content", categoria: "Layout", descricao: "Distribui linhas ou faixas quando existe espaço extra." },
    // Card #150
    { area: "CSS", nome: "place-items", categoria: "Layout", descricao: "Atalho para alinhar itens nos dois eixos em grid." },
    // Card #151
    { area: "CSS", nome: "gap", categoria: "Layout", descricao: "Controla o espaço entre linhas e colunas em flex, grid e multicolunas." },
    // Card #152
    { area: "CSS", nome: "grid", categoria: "Layout", descricao: "Um sistema de layout bidimensional que gerencia colunas e linhas" },
    // Card #153
    { area: "CSS", nome: "grid-template-columns", categoria: "Layout", descricao: "[PREENCHER]" },
    // Card #154
    { area: "CSS", nome: "grid-template-rows", categoria: "Layout", descricao: "Define as linhas de um grid." },
    // Card #155
    { area: "CSS", nome: "grid-column", categoria: "Layout", descricao: "Controla em quais colunas um item do grid aparece." },
    // Card #156
    { area: "CSS", nome: "grid-row", categoria: "Layout", descricao: "Controla em quais linhas um item do grid aparece." },
    // Card #157
    { area: "CSS", nome: "position", categoria: "Layout", descricao: "Controla como um elemento é posicionado na página ou em relação ao contêiner." },
    // Card #158
    { area: "CSS", nome: "top/right/bottom/left", categoria: "Layout", descricao: "Ajustam a posição de elementos posicionados." },
    // Card #159
    { area: "CSS", nome: "inset", categoria: "Layout", descricao: "Atalho para top, right, bottom e left." },
    // Card #160
    { area: "CSS", nome: "z-index", categoria: "Layout", descricao: "[PREENCHER]" },
    // Card #161
    { area: "CSS", nome: "float", categoria: "Layout", descricao: "Faz um elemento flutuar ao lado do texto; hoje e mais usado em casos especificos." },
    // Card #162
    { area: "CSS", nome: "clear", categoria: "Layout", descricao: "[PREENCHER]" },
    // Card #163
    { area: "CSS", nome: "columns", categoria: "Layout", descricao: "[PREENCHER]" },
    // Card #164
    { area: "CSS", nome: "container-type", categoria: "Responsividade", descricao: "Ativa consultas de container para adaptar componentes ao tamanho do próprio bloco." },
    // Card #165
    { area: "CSS", nome: "container queries", categoria: "Responsividade", descricao: "Permitem estilizar elementos com base no tamanho ou estilo" },
    // Card #166
    { area: "CSS", nome: "media queries", categoria: "Responsividade", descricao: "Aplicam estilos conforme características da tela, como largura, altura ou orientação." },
    // Card #167
    { area: "CSS", nome: "aspect-ratio", categoria: "Responsividade", descricao: "[PREENCHER]" },
    // Card #168
    { area: "CSS", nome: "object-fit", categoria: "Mídia", descricao: "Controla como imagens e vídeos preenchem o espaço disponivel." },
    // Card #169
    { area: "CSS", nome: "object-position", categoria: "Mídia", descricao: "Define o ponto de foco de imagens ou vídeos ajustados por object-fit." },
    // Card #170
    { area: "CSS", nome: "visibility", categoria: "Visibilidade", descricao: "[PREENCHER]" },
    // Card #171
    { area: "CSS", nome: "overflow", categoria: "Visibilidade", descricao: "Controla o que acontece quando o conteúdo excede a caixa." },
    // Card #172
    { area: "CSS", nome: "overflow-x", categoria: "Visibilidade", descricao: "Controla estouro horizontal." },
    // Card #173
    { area: "CSS", nome: "overflow-y", categoria: "Visibilidade", descricao: "Controla estouro vertical." },
    // Card #174
    { area: "CSS", nome: "clip-path", categoria: "Efeitos", descricao: "[PREENCHER]" },
    // Card #175
    { area: "CSS", nome: "filter", categoria: "Efeitos", descricao: "Aplica efeitos como blur, contraste, saturação ou sombra." },
    // Card #176
    { area: "CSS", nome: "backdrop-filter", categoria: "Efeitos", descricao: "Aplica efeitos no conteúdo que aparece atras do elemento." },
    // Card #177
    { area: "CSS", nome: "mix-blend-mode", categoria: "Efeitos", descricao: "[PREENCHER]" },
    // Card #178
    { area: "CSS", nome: "transform", categoria: "Movimento", descricao: "Move, gira, escala ou inclina um elemento sem alterar o fluxo do layout." },
    // Card #179
    { area: "CSS", nome: "translate", categoria: "Movimento", descricao: "Move um elemento de lugar na tela sem alterar o espaço original dele" },
    // Card #180
    { area: "CSS", nome: "rotate", categoria: "Movimento", descricao: "[PREENCHER]" },
    // Card #181
    { area: "CSS", nome: "scale", categoria: "Movimento", descricao: "[PREENCHER]" },
    // Card #182
    { area: "CSS", nome: "transition", categoria: "Interação", descricao: "[PREENCHER]" },
    // Card #183
    { area: "CSS", nome: "animation", categoria: "Interação", descricao: "[PREENCHER]" },
    // Card #184
    { area: "CSS", nome: "@keyframes", categoria: "Interação", descricao: "Define os quadros de uma animação CSS." },
    // Card #185
    { area: "CSS", nome: "cursor", categoria: "Interação", descricao: "Define o ponteiro exibido ao passar sobre o elemento." },
    // Card #186
    { area: "CSS", nome: "pointer-events", categoria: "Interação", descricao: "Controla se um elemento pode receber eventos de ponteiro." },
    // Card #187
    { area: "CSS", nome: "scroll-behavior", categoria: "Rolagem", descricao: "Propriedade que define o comportamento de uma caixa de rolagem" },
    // Card #188
    { area: "CSS", nome: "scroll-margin", categoria: "Rolagem", descricao: "Define margem virtual para posicionamento ao rolar até um elemento." },
    // Card #189
    { area: "CSS", nome: "scroll-snap-type", categoria: "Rolagem", descricao: "Cria pontos de encaixe durante a rolagem." },
    // Card #190
    { area: "CSS", nome: "scroll-snap-align", categoria: "Rolagem", descricao: "[PREENCHER]" },
    // Card #191
    { area: "CSS", nome: "accent-color", categoria: "Formulários", descricao: "Define a cor de destaque de controles nativos como checkbox e radio." },
    // Card #192
    { area: "CSS", nome: "appearance", categoria: "Formulários", descricao: "Controla a aparência nativa de alguns controles." },
    // Card #193
    { area: "CSS", nome: "resize", categoria: "Formulários", descricao: "Permite redimensionar caixas como textárea." },
    // Card #194
    { area: "CSS", nome: "caret-color", categoria: "Formulários", descricao: "Define a cor do cursor de texto em campos editaveis." },
    // Card #195
    { area: "CSS", nome: "--variavel", categoria: "Organização", descricao: "Cria uma propriedade personalizada reutilizável no CSS." },
    // Card #196
    { area: "CSS", nome: "var()", categoria: "Funções CSS", descricao: "Lê o valor de uma propriedade personalizada." },
    // Card #197
    { area: "CSS", nome: "calc()", categoria: "Funções CSS", descricao: "Calcula valores misturando unidades diferentes." },
    // Card #198
    { area: "CSS", nome: "clamp()", categoria: "Funções CSS", descricao: "Limita um valor entre mínimo, preferido e máximo." },
    // Card #199
    { area: "CSS", nome: "min()", categoria: "Funções CSS", descricao: "[PREENCHER]" },
    // Card #200
    { area: "CSS", nome: "max()", categoria: "Funções CSS", descricao: "Escolhe o maior valor entre opcoes." },
    // Card #201
    { area: "CSS", nome: "minmax()", categoria: "Funções CSS", descricao: "[PREENCHER]" },
    // Card #202
    { area: "CSS", nome: "repeat()", categoria: "Funções CSS", descricao: "Repete uma definicao de faixa no CSS Grid." },
    // Card #203
    { area: "CSS", nome: "fit-content()", categoria: "Funções CSS", descricao: "Limita uma faixa ou tamanho ao conteúdo até um máximo." },
    // Card #204
    { area: "CSS", nome: "linear-gradient()", categoria: "Funções CSS", descricao: "Cria um gradiente linear como imagem de fundo." },
    // Card #205
    { area: "CSS", nome: "color-mix()", categoria: "Funções CSS", descricao: "[PREENCHER]" },
    // Card #206
    { area: "CSS", nome: "rgb()/hsl()/oklch()", categoria: "Funções CSS", descricao: "Definem cores em formatos diferentes, incluindo espaços modernos." },
    // Card #207
    { area: "CSS", nome: "@media", categoria: "At-rules", descricao: "Agrupa regras aplicadas somente quando uma condição de mídia é verdadeira." },
    // Card #208
    { area: "CSS", nome: "@container", categoria: "At-rules", descricao: "[PREENCHER]" },
    // Card #209
    { area: "CSS", nome: "@supports", categoria: "At-rules", descricao: "[PREENCHER]" },
    // Card #210
    { area: "CSS", nome: "@layer", categoria: "At-rules", descricao: "[PREENCHER]" },
    // Card #211
    { area: "CSS", nome: "@font-face", categoria: "At-rules", descricao: "Declara uma fonte personalizada para uso na página." },
    // Card #212
    { area: "CSS", nome: "@import", categoria: "At-rules", descricao: "[PREENCHER]" },
    // Card #213
    { area: "CSS", nome: "@scope", categoria: "At-rules", descricao: "[PREENCHER]" },
    // Card #214
    { area: "CSS", nome: ":hover", categoria: "Seletores", descricao: "Seleciona um elemento quando o ponteiro passa sobre ele." },
    // Card #215
    { area: "CSS", nome: ":focus", categoria: "Seletores", descricao: "[PREENCHER]" },
    // Card #216
    { area: "CSS", nome: ":focus-visible", categoria: "Acessibilidade", descricao: "Estiliza o foco de teclado de forma mais adequada." },
    // Card #217
    { area: "CSS", nome: ":checked", categoria: "Seletores", descricao: "[PREENCHER]" },
    // Card #218
    { area: "CSS", nome: ":disabled", categoria: "Seletores", descricao: "[PREENCHER]" },
    // Card #219
    { area: "CSS", nome: ":nth-child()", categoria: "Seletores", descricao: "[PREENCHER]" },
    // Card #220
    { area: "CSS", nome: ":not()", categoria: "Seletores", descricao: "[PREENCHER]" },
    // Card #221
    { area: "CSS", nome: ":is()", categoria: "Seletores", descricao: "[PREENCHER]" },
    // Card #222
    { area: "CSS", nome: ":where()", categoria: "Seletores", descricao: "Agrupa seletores com especificidade baixa." },
    // Card #223
    { area: "CSS", nome: ":has()", categoria: "Seletores", descricao: "[PREENCHER]" },
    // Card #224
    { area: "CSS", nome: "::before", categoria: "Pseudo-elementos", descricao: "Cria conteúdo gerado antes do conteúdo real do elemento." },
    // Card #225
    { area: "CSS", nome: "::after", categoria: "Pseudo-elementos", descricao: "Cria conteúdo gerado depois do conteúdo real do elemento." },
    // Card #226
    { area: "CSS", nome: "::marker", categoria: "Pseudo-elementos", descricao: "Estiliza marcadores de listas." },
    // Card #227
    { area: "CSS", nome: "::selection", categoria: "Pseudo-elementos", descricao: "[PREENCHER]" },
    // Card #228
    { area: "CSS", nome: "prefers-reduced-motion", categoria: "Acessibilidade", descricao: "Detecta usuários que preferem reduzir animações e movimentos." },
    // Card #229
    { area: "CSS", nome: "prefers-color-scheme", categoria: "Acessibilidade", descricao: "Detecta preferência por tema claro ou escuro." },

    // JavaScript: linguagem, DOM, APIs, funções, classes e recursos modernos
    // Card #230
    { area: "JavaScript", nome: "var", categoria: "Variáveis", descricao: "Declara variáveis com escopo de função; hoje costuma ser substituído por let e const." },
    // Card #231
    { area: "JavaScript", nome: "let", categoria: "Variáveis", descricao: "Declara variáveis com escopo de bloco e valor reatribuível." },
    // Card #232
    { area: "JavaScript", nome: "const", categoria: "Variáveis", descricao: "Declara uma referência que não pode ser reatribuída." },
    // Card #233
    { area: "JavaScript", nome: "string", categoria: "Tipos", descricao: "Representa textos." },
    // Card #234
    { area: "JavaScript", nome: "number", categoria: "Tipos", descricao: "Representa números inteiros e decimais." },
    // Card #235
    { area: "JavaScript", nome: "bigint", categoria: "Tipos", descricao: "Representa inteiros maiores que o limite seguro de number." },
    // Card #236
    { area: "JavaScript", nome: "boolean", categoria: "Tipos", descricao: "[PREENCHER]" },
    // Card #237
    { area: "JavaScript", nome: "null", categoria: "Tipos", descricao: "[PREENCHER]" },
    // Card #238
    { area: "JavaScript", nome: "undefined", categoria: "Tipos", descricao: "[PREENCHER]" },
    // Card #239
    { area: "JavaScript", nome: "symbol", categoria: "Tipos", descricao: "[PREENCHER]" },
    // Card #240
    { area: "JavaScript", nome: "object", categoria: "Dados", descricao: "Uma estrutura de dados que armazena coleções de dados complexos" },
    // Card #241
    { area: "JavaScript", nome: "array", categoria: "Dados", descricao: "Guarda uma lista ordenada de valores." },
    // Card #242
    { area: "JavaScript", nome: "Map", categoria: "Coleções", descricao: "Coleção de pares chave-valor com chaves de qualquer tipo." },
    // Card #243
    { area: "JavaScript", nome: "Set", categoria: "Coleções", descricao: "Coleção de valores únicos." },
    // Card #244
    { area: "JavaScript", nome: "WeakMap", categoria: "Coleções", descricao: "[PREENCHER]" },
    // Card #245
    { area: "JavaScript", nome: "WeakSet", categoria: "Coleções", descricao: "Conjunto fraco de objetos, util para marcar objetos sem impedir coleta de memória." },
    // Card #246
    { area: "JavaScript", nome: "function", categoria: "Funções", descricao: "[PREENCHER]" },
    // Card #247
    { area: "JavaScript", nome: "arrow function", categoria: "Funções", descricao: "[PREENCHER]" },
    // Card #248
    { area: "JavaScript", nome: "callback", categoria: "Funções", descricao: "[PREENCHER]" },
    // Card #249
    { area: "JavaScript", nome: "closure", categoria: "Funções", descricao: "Permite que uma função lembre variáveis do escopo onde foi criada." },
    // Card #250
    { area: "JavaScript", nome: "rest parameters", categoria: "Funções", descricao: "Agrupa argumentos restantes em um array usando ...nome." },
    // Card #251
    { area: "JavaScript", nome: "spread syntax", categoria: "Funções", descricao: "Serve para expandir elementos de objetos iteráveis" },
    // Card #252
    { area: "JavaScript", nome: "default parameters", categoria: "Funções", descricao: "[PREENCHER]" },
    // Card #253
    { area: "JavaScript", nome: "return", categoria: "Controle de fluxo", descricao: "[PREENCHER]" },
    // Card #254
    { area: "JavaScript", nome: "if/else", categoria: "Controle de fluxo", descricao: "Executa blocos diferentes conforme uma condição." },
    // Card #255
    { area: "JavaScript", nome: "switch", categoria: "Controle de fluxo", descricao: "Escolhe entre vários caminhos com base em um valor." },
    // Card #256
    { area: "JavaScript", nome: "for", categoria: "Controle de fluxo", descricao: "[PREENCHER]" },
    // Card #257
    { area: "JavaScript", nome: "for...of", categoria: "Controle de fluxo", descricao: "Percorre valores de objetos iteráveis, como arrays." },
    // Card #258
    { area: "JavaScript", nome: "for...in", categoria: "Controle de fluxo", descricao: "[PREENCHER]" },
    // Card #259
    { area: "JavaScript", nome: "while", categoria: "Controle de fluxo", descricao: "Repete um bloco enquanto uma condição for verdadeira." },
    // Card #260
    { area: "JavaScript", nome: "break", categoria: "Controle de fluxo", descricao: "Interrompe um loop ou switch." },
    // Card #261
    { area: "JavaScript", nome: "continue", categoria: "Controle de fluxo", descricao: "Pula para a próxima repetição de um loop." },
    // Card #262
    { area: "JavaScript", nome: "try/catch/finally", categoria: "Erros", descricao: "Tratar erros e execeções sem deixar o prgrama parar ou fechar de repente" },
    // Card #263
    { area: "JavaScript", nome: "throw", categoria: "Erros", descricao: "[PREENCHER]" },
    // Card #264
    { area: "JavaScript", nome: "Error", categoria: "Erros", descricao: "Objeto base para representar erros." },
    // Card #265
    { area: "JavaScript", nome: "Promise", categoria: "Assíncrono", descricao: "Representa uma operação assíncrona que pode resolver ou falhar." },
    // Card #266
    { area: "JavaScript", nome: "async/await", categoria: "Assíncrono", descricao: "[PREENCHER]" },
    // Card #267
    { area: "JavaScript", nome: "setTimeout()", categoria: "Assíncrono", descricao: "Executa uma função depois de um atraso." },
    // Card #268
    { area: "JavaScript", nome: "setInterval()", categoria: "Assíncrono", descricao: "[PREENCHER]" },
    // Card #269
    { area: "JavaScript", nome: "fetch()", categoria: "APIs", descricao: "[PREENCHER]" },
    // Card #270
    { area: "JavaScript", nome: "JSON.parse()", categoria: "APIs", descricao: "Converte texto JSON em objeto JavaScript." },
    // Card #271
    { area: "JavaScript", nome: "JSON.stringify()", categoria: "APIs", descricao: "Converte valor JavaScript em texto JSON." },
    // Card #272
    { area: "JavaScript", nome: "URL", categoria: "APIs", descricao: "Para criar, analisar, validar e modificar endereços" },
    // Card #273
    { area: "JavaScript", nome: "URLSearchParams", categoria: "APIs", descricao: "[PREENCHER]" },
    // Card #274
    { area: "JavaScript", nome: "localStorage", categoria: "Estado", descricao: "[PREENCHER]" },
    // Card #275
    { area: "JavaScript", nome: "sessionStorage", categoria: "Estado", descricao: "[PREENCHER]" },
    // Card #276
    { area: "JavaScript", nome: "cookies", categoria: "Estado", descricao: "[PREENCHER]"},
    // Card #277
    { area: "JavaScript", nome: "querySelector()", categoria: "DOM", descricao: "Buscar e retornar o primeiro elemento de página" },
    // Card #278
    { area: "JavaScript", nome: "querySelectorAll()", categoria: "DOM", descricao: "[PREENCHER]" },
    // Card #279
    { area: "JavaScript", nome: "getElementById()", categoria: "DOM", descricao: "Busca um elemento pelo atributo id." },
    // Card #280
    { area: "JavaScript", nome: "createElement()", categoria: "DOM", descricao: "[PREENCHER]" },
    // Card #281
    { area: "JavaScript", nome: "append()", categoria: "DOM", descricao: "Adiciona conteúdo ou elementos ao final de outro elemento." },
    // Card #282
    { area: "JavaScript", nome: "replaceChildren()", categoria: "DOM", descricao: "Substitui todos os filhos de um elemento." },
    // Card #283
    { area: "JavaScript", nome: "textContent", categoria: "DOM", descricao: "Lê ou altera o texto de um elemento com seguranca." },
    // Card #284
    { area: "JavaScript", nome: "innerHTML", categoria: "DOM", descricao: "Lê ou altera HTML interno; exige cuidado com conteúdo não confiável." },
    // Card #285
    { area: "JavaScript", nome: "classList", categoria: "DOM", descricao: "[PREENCHER]" },
    // Card #286
    { area: "JavaScript", nome: "dataset", categoria: "DOM", descricao: "Acessa atributos data-* do HTML." },
    // Card #287
    { area: "JavaScript", nome: "style", categoria: "DOM", descricao: "[PREENCHER]" },
    // Card #288
    { area: "JavaScript", nome: "addEventListener()", categoria: "Eventos", descricao: "Conecta uma função a um evento, como clique, envio ou digitação." },
    // Card #289
    { area: "JavaScript", nome: "event.preventDefault()", categoria: "Eventos", descricao: "[PREENCHER]" },
    // Card #290
    { area: "JavaScript", nome: "event.target", categoria: "Eventos", descricao: "Indica o elemento que disparou o evento." },
    // Card #291
    { area: "JavaScript", nome: "click", categoria: "Eventos", descricao: "Serve ára detectar ou simular a interação de clique do usuário" },
    // Card #292
    { area: "JavaScript", nome: "input", categoria: "Eventos", descricao: "Evento disparado enquanto o valor de um campo muda." },
    // Card #293
    { area: "JavaScript", nome: "submit", categoria: "Eventos", descricao: "Evento disparado ao enviar um formulário." },
    // Card #294
    { area: "JavaScript", nome: "DOMContentLoaded", categoria: "Eventos", descricao: "[PREENCHER]" },
    // Card #295
    { area: "JavaScript", nome: "FormData", categoria: "Formulários", descricao: "Coleta campos de um formulário para leitura ou envio." },
    // Card #296
    { area: "JavaScript", nome: "Constraint Validation", categoria: "Formulários", descricao: "[PREENCHER]" },
    // Card #297
    { area: "JavaScript", nome: "Array.map()", categoria: "Arrays", descricao: "Cria um novo array transformando cada item do original." },
    // Card #298
    { area: "JavaScript", nome: "Array.filter()", categoria: "Arrays", descricao: "Cria um novo array apenas com os itens que passam em uma condição." },
    // Card #299
    { area: "JavaScript", nome: "Array.find()", categoria: "Arrays", descricao: "[PREENCHER]" },
    // Card #300
    { area: "JavaScript", nome: "Array.reduce()", categoria: "Arrays", descricao: "[PREENCHER]" },
    // Card #301
    { area: "JavaScript", nome: "Array.forEach()", categoria: "Arrays", descricao: "Executa uma função para cada item sem criar novo array." },
    // Card #302
    { area: "JavaScript", nome: "Array.some()", categoria: "Arrays", descricao: "[PREENCHER]" },
    // Card #303
    { area: "JavaScript", nome: "Array.every()", categoria: "Arrays", descricao: "[PREENCHER]" },
    // Card #304
    { area: "JavaScript", nome: "Array.includes()", categoria: "Arrays", descricao: "[PREENCHER]" },
    // Card #305
    { area: "JavaScript", nome: "String.includes()", categoria: "Strings", descricao: "Verifica se um texto contém outro texto." },
    // Card #306
    { area: "JavaScript", nome: "String.trim()", categoria: "Strings", descricao: "Remove espaços do inicio e do fim de uma string." },
    // Card #307
    { area: "JavaScript", nome: "String.replaceAll()", categoria: "Strings", descricao: "Substitui todas as ocorrencias de um texto." },
    // Card #308
    { area: "JavaScript", nome: "String.split()", categoria: "Strings", descricao: "Divide uma string em array usando um separador." },
    // Card #309
    { area: "JavaScript", nome: "template literals", categoria: "Strings", descricao: "Criam strings com crase e permitem interpolar valores usando ${}." },
    // Card #310
    { area: "JavaScript", nome: "Object.keys()", categoria: "Objetos", descricao: "[PREENCHER]" },
    // Card #311
    { area: "JavaScript", nome: "Object.values()", categoria: "Objetos", descricao: "[PREENCHER]" },
    // Card #312
    { area: "JavaScript", nome: "Object.entries()", categoria: "Objetos", descricao: "[PREENCHER]" },
    // Card #313
    { area: "JavaScript", nome: "destructuring", categoria: "Objetos", descricao: "[PREENCHER]" },
    // Card #314
    { area: "JavaScript", nome: "optional chaining", categoria: "Objetos", descricao: "Acessa propriedades profundas sem quebrar quando algo é null ou undefined." },
    // Card #315
    { area: "JavaScript", nome: "nullish coalescing", categoria: "Objetos", descricao: "Define valor reserva apenas quando o valor original é null ou undefined." },
    // Card #316
    { area: "JavaScript", nome: "class", categoria: "Classes", descricao: "Define moldes para criar objetos com propriedades e métodos." },
    // Card #317
    { area: "JavaScript", nome: "constructor", categoria: "Classes", descricao: "Metodo chamado ao criar uma instancia de classe." },
    // Card #318
    { area: "JavaScript", nome: "extends", categoria: "Classes", descricao: "Cria uma classe baseada em outra." },
    // Card #319
    { area: "JavaScript", nome: "super", categoria: "Classes", descricao: "Acessa construtor ou métodos da classe pai." },
    // Card #320
    { area: "JavaScript", nome: "import", categoria: "Módulos", descricao: "[PREENCHER]" },
    // Card #321
    { area: "JavaScript", nome: "export", categoria: "Módulos", descricao: "Exporta valores, funções ou classes para outros arquivos." },
    // Card #322
    { area: "JavaScript", nome: "default export", categoria: "Módulos", descricao: "Exporta um valor principal de um módulo." },
    // Card #323
    { area: "JavaScript", nome: "dynamic import", categoria: "Módulos", descricao: "[PREENCHER]" },
    // Card #324
    { area: "JavaScript", nome: "RegExp", categoria: "Texto avancado", descricao: "[PREENCHER]" },
    // Card #325
    { area: "JavaScript", nome: "Date", categoria: "Objetos nativos", descricao: "[PREENCHER]" },
    // Card #326
    { area: "JavaScript", nome: "Math", categoria: "Objetos nativos", descricao: "Oferece funções matémáticas e constantes." },
    // Card #327
    { area: "JavaScript", nome: "Number", categoria: "Objetos nativos", descricao: "Fornece métodos e constantes para números." },
    // Card #328
    { area: "JavaScript", nome: "Intl", categoria: "Internacionalização", descricao: "Formata datas, números, moedas e textos conforme idioma e região." },
    // Card #329
    { area: "JavaScript", nome: "structuredClone()", categoria: "Dados", descricao: "[PREENCHER]" },
    // Card #330
    { area: "JavaScript", nome: "IntersectionObserver", categoria: "Performance", descricao: "Observa quando um elemento entra ou sai da área visível da tela." },
    // Card #331
    { area: "JavaScript", nome: "ResizeObserver", categoria: "Performance", descricao: "Observa mudanças no tamanho de elementos." },
    // Card #332
    { area: "JavaScript", nome: "requestAnimationFrame()", categoria: "Performance", descricao: "[PREENCHER]" },
    // Card #333
    { area: "JavaScript", nome: "debounce", categoria: "Performance", descricao: "Atrasa uma função para evitar chamadas excessivas durante digitação ou resize." },
    // Card #334
    { area: "JavaScript", nome: "throttle", categoria: "Performance", descricao: "[PREENCHER]" },
    // Card #335
    { area: "JavaScript", nome: "Web Components", categoria: "Componentes", descricao: "Conjunto de tecnologias para criar elementos HTML customizados." },
    // Card #336
    { area: "JavaScript", nome: "customElements", categoria: "Componentes", descricao: "Registra e gerencia elementos customizados." },
    // Card #337
    { area: "JavaScript", nome: "Shadow DOM", categoria: "Componentes", descricao: "[PREENCHER]" },
    // Card #338
    { area: "JavaScript", nome: "navigator", categoria: "Browser APIs", descricao: "Fornece informações e recursos do navegador e do dispositivo." },
    // Card #339
    { area: "JavaScript", nome: "location", categoria: "Browser APIs", descricao: "Permite ler ou alterar a URL atual." },
    // Card #340
    { area: "JavaScript", nome: "history", categoria: "Browser APIs", descricao: "Manipula o histórico de navegação da aba." }
];

const lista = document.querySelector("#lista-tags");
const busca = document.querySelector("#busca");
const seletorArea = document.querySelector("#area");
const seletorCategoria = document.querySelector("#categoria");
const resultado = document.querySelector("#resultado");
const formularioExemplo = document.querySelector("#formulario-exemplo");
const mensagemFormulario = document.querySelector("#mensagem-formulario");

function escaparHTML(texto) {
    return texto
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

function popularSelect(select, opcoes) {
    select.querySelectorAll("option:not([value='todas'])").forEach((opcao) => opcao.remove());

    opcoes.forEach((opcao) => {
        const item = document.createElement("option");
        item.value = opcao;
        item.textContent = opcao;
        select.append(item);
    });
}

function atualizarCategorias() {
    const área = seletorArea.value;
    const itensDaÁrea = área === "todas"
        ? conteudos
        : conteudos.filter((item) => item.area === área);
    const categorias = [...new Set(itensDaÁrea.map((item) => item.categoria))].sort();

    popularSelect(seletorCategoria, categorias);
}

function formatarNome(item) {
    return item.area === "HTML"
        ? `<code>&lt;${escaparHTML(item.nome)}&gt;</code>`
        : `<code>${escaparHTML(item.nome)}</code>`;
}

function mostrarConteudos() {
    const termo = busca.value.trim().toLocaleLowerCase("pt-BR");
    const área = seletorArea.value;
    const categoria = seletorCategoria.value;
    const filtrados = conteudos.filter((item) => {
        const textoDoItem = `${item.area} ${item.nome} ${item.categoria} ${item.descricao}`.toLocaleLowerCase("pt-BR");
        const correspondeAoTexto = textoDoItem.includes(termo);
        const correspondeArea = área === "todas" || item.area === área;
        const correspondeCategoria = categoria === "todas" || item.categoria === categoria;

        return correspondeAoTexto && correspondeArea && correspondeCategoria;
    });

    lista.replaceChildren();
    filtrados.forEach((item) => {
        const cartao = document.createElement("article");
        const eLacuna = item.descricao === "[PREENCHER]";
        const numero = conteudos.indexOf(item) + 1;

        cartao.className = `cartao ${item.area.toLocaleLowerCase("pt-BR")}${eLacuna ? " lacuna" : ""}`;
        cartao.innerHTML = `
            <div class="topo-cartao">
                <p class="area">${escaparHTML(item.area)}</p>
                <p class="numero-card">#${String(numero).padStart(3, "0")}</p>
            </div>
            <h3>${formatarNome(item)}</h3>
            <p class="categoria">${escaparHTML(item.categoria)}</p>
            <p class="${eLacuna ? "preencher" : ""}">${escaparHTML(item.descricao)}</p>`;
        lista.append(cartao);
    });

    resultado.textContent = `${filtrados.length} de ${conteudos.length} cards exibidos.`;
}

popularSelect(seletorArea, [...new Set(conteudos.map((item) => item.area))]);
atualizarCategorias();

busca.addEventListener("input", mostrarConteudos);
seletorArea.addEventListener("change", () => {
    atualizarCategorias();
    mostrarConteudos();
});
seletorCategoria.addEventListener("change", mostrarConteudos);

formularioExemplo.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const dados = new FormData(formularioExemplo);
    const nome = dados.get("nome");
    const tecnologia = dados.get("favorita");
    mensagemFormulario.textContent = `Obrigado, ${nome}! Você escolheu ${tecnologia.toUpperCase()}.`;
});

mostrarConteudos();
