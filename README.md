# Douglas Brum — Desenvolvedor Backend & Cibersegurança

> Engenheiro focado em backend com mentalidade de segurança, construindo sistemas confiáveis e produtos digitais com propósito.

Este repositório contém o código-fonte do meu **portfólio pessoal**, projetado não apenas como um site de apresentação, mas como um **produto vivo** que reflete como eu penso, construo, versiono e entrego software.

🌐 **Online:** [https://dbrum.com.br](https://dbrum.com.br)

---

## Sobre o Projeto

Este portfólio apresenta minha trajetória como **engenheiro de software orientado a backend**, com experiência em **Java/Spring**, **Python/Django**, bancos de dados, ambientes Linux e arquiteturas prontas para nuvem.

Mais do que um site estático, ele segue práticas reais de engenharia:

* Estrutura de projeto clara
* Evolução versionada (v1 → v2 → v3)
* Arquitetura moderna de frontend
* Gerenciamento de dependências consciente de segurança
* Pipeline de deploy em produção

É mantido intencionalmente **limpo, rápido e focado em conteúdo**, sem excessos.

---

## Stack

* **Framework:** Next.js 16 (App Router)
* **Linguagem:** TypeScript
* **UI & Estilo:** shadcn/ui, Tailwind CSS v4, lucide-react
* **Gerenciador de pacotes:** pnpm
* **Deploy:** Vercel

---

## Estrutura do Projeto

```text
app/            # Next.js App Router (páginas e rotas de API)
components/     # Componentes de UI reutilizáveis
hooks/          # Custom React hooks
lib/            # Utilitários e lógica compartilhada
public/         # Assets estáticos (imagens, ícones)
styles/         # Estilos globais
```

---

## Desenvolvimento Local

### Pré-requisitos

* Node.js 18+ (20+ recomendado)
* pnpm

### Instalação

```bash
git clone https://github.com/dbcfilho/dbrum-portfolio.git
cd dbrum-portfolio
pnpm install
```

### Servidor de Desenvolvimento

```bash
pnpm dev
```

Acesse `http://localhost:3000`

### Build de Produção

```bash
pnpm build
pnpm start
```

---

## v3 — O que foi feito nesta versão

* **Tradução completa para Português do Brasil** — todo o conteúdo do portfólio foi migrado para PT-BR: textos, formulário de contato, labels, toasts, datas, metadados, Open Graph, schema.org e template de e-mail
* **Correção de bug no build** — o cliente Resend era instanciado no nível do módulo, causando falha em build time; movido para dentro do handler
* **Correção de tipo no formulário** — removida referência a `HTMLSelectElement` no handler de mudança do formulário de contato, que não contém nenhum `<select>`
* **Remoção de código morto** — excluído `app/api/recommendations/data.ts` (dados duplicados e não utilizados) e `public/recommendations-v2.json` (arquivo resíduo)
* **Limpeza de comentários** — removidos todos os comentários de marcação e anotações internas deixados em versões anteriores

---

## Contato

* **E-mail:** [dbcfilho01@gmail.com](mailto:dbcfilho01@gmail.com)
* **LinkedIn:** [https://www.linkedin.com/in/dbcfilho](https://www.linkedin.com/in/dbcfilho)
* **Website:** [https://dbrum.com.br](https://dbrum.com.br)

---

## Licença

Este projeto está licenciado sob a **MIT License**.
