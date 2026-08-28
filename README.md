# CatMatch

Uma aplicação web para descobrir gatos e montar uma galeria personalizada de favoritos. Em cada rodada, o usuário pode passar para a próxima imagem ou curtir o gato atual.

As imagens são carregadas aleatoriamente pela [The Cat API](https://thecatapi.com/), e os gatos curtidos ficam salvos no `localStorage` do navegador.

## Recursos

- Exibição de imagens aleatórias de gatos.
- Ações de passar e curtir.
- Galeria com todos os gatos curtidos.
- Persistência dos matches mesmo após recarregar a página.
- Opção para limpar o histórico de curtidas.
- Interface responsiva para telas menores.

## Tecnologias

- React 19
- Vite
- JavaScript (ES Modules)
- CSS
- The Cat API

## Como executar

### Pré-requisitos

- Node.js 18 ou superior.
- npm.

### Instalação

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   git clone https://github.com/danielsemn/cat-match.git
   cd cat-match
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra a URL exibida pelo Vite no terminal, normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com atualização automática. |
| `npm run build` | Gera a versão de produção na pasta `dist`. |
| `npm run preview` | Executa uma prévia local da versão de produção. |
| `npm run lint` | Verifica o código com ESLint. |

## Estrutura principal

```text
src/
├── components/
│   ├── CatCard.jsx       # Card com imagem e ações
│   ├── Header.jsx        # Componente de cabeçalho
│   └── SelectedCat.jsx   # Galeria de gatos curtidos
├── App.jsx               # Estado dos matches e composição da tela
├── App.css               # Estilos da aplicação
└── main.jsx              # Ponto de entrada do React
```

## Observações

O navegador precisa ter acesso à internet para buscar novas imagens na The Cat API. Os matches são armazenados localmente e não são sincronizados entre dispositivos ou navegadores.
