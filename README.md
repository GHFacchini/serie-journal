# SERIE-JOURNAL - Fase 1

## Nome: Gabriel Herculano Facchini

Para executar este projeto:

1. Extraia o conteúdo do arquivo `.zip` enviado em uma pasta no seu computador.
2. Acesse a pasta `serie-journal` no seu terminal:
   ```bash
   cd serie-journal
   ```
3. Rode `npm install` para instalar as dependências do projeto:
   ```bash
   npm install
   ```
4. E em seguida, `npm run dev` para iniciar a execução do projeto:
   ```bash
   npm run dev
   ```

Após a execução do projeto, este é o resultado esperado no navegador:
![Página Inicial (Home)](./prints/home.png)
![Lista de Séries](./prints/listar.png)
![Formulário de Cadastro](./prints/cadastrar.png)
![Sobre o Projeto](./prints/sobre.png)

## Introdução

Este projeto consiste na Fase 1 do desenvolvimento do sistema **SERIE-JOURNAL**, um diário e catálogo pessoal de séries assistidas. O projeto foi construído usando React com Vite e atende estritamente às diretrizes das Aulas 1 a 5, empregando estados (`useState`), propriedades (`props`) e renderização condicional básica para controle de fluxo e exibição de abas, sem o uso de bibliotecas de terceiros para roteamento ou persistência/gerenciamento avançado de estado.

## Componentes

Os componentes estão organizados no diretório `./src/components` com a seguinte estrutura:

* **App.jsx (Componente Principal):** Gerencia o estado central da aplicação (aba ativa `currentTab`, listagem de séries `series` e série em edição `editingSerie`). Implementa as operações estáticas do CRUD (`adicionarSerie`, `editarSerie` e `deletarSerie`) e coordena a exibição condicional das telas.
* **NavBar:** Componente obrigatório responsável pela navegação entre as 4 abas ('home', 'sobre', 'cadastrar', 'listar'). Contém botões específicos para alternar as abas e garante a limpeza do estado de edição ao clicar para cadastrar uma nova série.
* **SerieForm:** Componente obrigatório contendo o formulário de cadastro e edição. Possui estados locais agrupados em `formData` com os 7 campos obrigatórios, monitora a prop `editingSerie` para preenchimento no modo de edição, valida o preenchimento de todos os campos e oferece funcionalidade de cancelamento.
* **SerieList:** Componente obrigatório que exibe a listagem de séries em formato de tabela. Apresenta todas as informações das séries, inclui controles na linha para acionar a edição e a remoção, e disponibiliza um filtro textual dinâmico no topo para buscar séries por título ou categoria.
