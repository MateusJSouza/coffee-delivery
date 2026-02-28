# Coffee Delivery

Aplicação de e-commerce para pedidos de café, desenvolvida como projeto de estudo. Permite ao usuário navegar pelo catálogo, montar um carrinho e finalizar o pedido com endereço de entrega e forma de pagamento.

## Funcionalidades

- Catálogo com 14 tipos de café organizados por tags (Tradicional, Gelado, Com Leite, Especial, Alcoólico)
- Carrinho de compras com adição, remoção e controle de quantidade
- Persistência do carrinho no `localStorage`
- Formulário de pedido com validação via **Zod**
- Preenchimento automático de endereço via **API ViaCEP** (busca por CEP)
- Seleção de forma de pagamento (Cartão de Crédito, Débito ou Dinheiro)
- Página de confirmação do pedido com resumo da entrega
- Layout totalmente **responsivo** para mobile, tablet e desktop

## Telas

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial com intro e catálogo de cafés |
| `/completeOrder` | Formulário de endereço e pagamento |
| `/orderConfirmed` | Confirmação do pedido |

## Tecnologias

- **[React 18](https://react.dev/)** — biblioteca de UI
- **[TypeScript 5](https://www.typescriptlang.org/)** — tipagem estática
- **[Vite 7](https://vite.dev/)** — build tool e dev server
- **[styled-components 6](https://styled-components.com/)** — estilização CSS-in-JS
- **[React Router DOM 6](https://reactrouter.com/)** — roteamento SPA
- **[React Hook Form 7](https://react-hook-form.com/)** — gerenciamento de formulários
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** + **[Zod](https://zod.dev/)** — validação de formulários
- **[Immer](https://immerjs.github.io/immer/)** — imutabilidade no estado do carrinho
- **[Axios](https://axios-http.com/)** — requisições HTTP (API de CEP)
- **[@phosphor-icons/react](https://phosphoricons.com/)** — biblioteca de ícones
- **[Polished](https://polished.js.org/)** — utilitários de CSS

## Como executar

**Pré-requisitos:** Node.js 18+

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Visualizar build de produção
npm run preview
```

O servidor de desenvolvimento estará disponível em `http://localhost:5173`.

## Responsividade

O layout se adapta a três tamanhos de tela:

| Breakpoint | Comportamento |
|---|---|
| `> 1024px` | Layout desktop completo (4 colunas no catálogo) |
| `≤ 1024px` | Formulário de pedido empilhado; catálogo em 3 colunas |
| `≤ 768px` | Seção intro sem imagem; catálogo em 2 colunas; header compacto |
| `≤ 480px` | Catálogo em 1 coluna; formulários em coluna única |

## Estrutura do projeto

```
src/
├── @types/         # Tipagem global (DefaultTheme do styled-components)
├── assets/         # Imagens e SVGs
├── components/     # Componentes reutilizáveis (Header, Button, Input, etc.)
├── contexts/       # CartContext — estado global do carrinho
├── data/           # Lista estática de cafés
├── hooks/          # useCart
├── layouts/        # DefaultLayout (Header + Outlet)
├── pages/
│   ├── Home/               # Catálogo e intro
│   ├── CompleteOrder/      # Formulário de pedido
│   └── OrderConfirmed/     # Confirmação
├── services/       # Configuração do Axios (ViaCEP)
├── styles/         # Tema global e GlobalStyle
└── utils/          # Formatação de moeda
```
