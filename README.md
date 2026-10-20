# #AbraOSigilo | Plataforma Cívica pela Transparência Patrimonial na Política

[![GitHub Pages](https://img.shields.io/badge/Demo%20Online-GitHub%20Pages-success?style=for-the-badge&logo=github)](https://alessiojr.github.io/abreosigilo/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](./LICENSE)
[![Framework: Astro](https://img.shields.io/badge/Framework-Astro%204.x-ff5d01?style=for-the-badge&logo=astro)](https://astro.build)
[![Status: Ativo](https://img.shields.io/badge/Status-Ativo%202026-green?style=for-the-badge)](https://alessiojr.github.io/abreosigilo/)

> **"Quem pede seu voto deve prestar contas. Transparência não é devassa íntima: é regra republicana, fiscalização independente e proteção de dados."**

O **#AbraOSigilo** (também conhecido como **Sigilo Zero**) é uma iniciativa cívica, apartidária e multidisciplinar (jurídica, política e tecnológica) voltada a criar um novo padrão de integridade no Brasil: exigir que candidatos e ocupantes de mandatos eletivos comprovem conformidade patrimonial, fiscal e bancária contínua perante a sociedade e os órgãos de controle.

---

## 🌐 Acesse a Aplicação Online

O projeto está publicado e disponível publicamente via GitHub Pages:  
👉 **[https://alessiojr.github.io/abreosigilo/](https://alessiojr.github.io/abreosigilo/)**

---

## 🎯 Principais Frentes e Páginas do Projeto

| Rota | Descrição |
| :--- | :--- |
| **[`/`](https://alessiojr.github.io/abreosigilo/)** | Página inicial com a comparação clara entre a fiscalização do cidadão comum e a do político. |
| **[`/flavio`](https://alessiojr.github.io/abreosigilo/flavio/)** | **Caso Flávio:** *"Só voto no Flávio se abrir o sigilo. Quem não deve, não teme."* Desafio cívico de coerência e enquete do eleitor. |
| **[`/proposta`](https://alessiojr.github.io/abreosigilo/proposta/)** | A proposta detalhada em linguagem acessível (sem juridiquês). |
| **[`/placar`](https://alessiojr.github.io/abreosigilo/placar/)** | Placar cívico da transparência com acompanhamento de posicionamentos. |
| **[`/compartilhe`](https://alessiojr.github.io/abreosigilo/compartilhe/)** | Central de mobilização: correntes prontas de WhatsApp, posts no X e gerador de cards em PNG no navegador. |
| **[`/minuta-pec`](https://alessiojr.github.io/abreosigilo/minuta-pec/)** | Minuta completa de Proposta de Emenda à Constituição (PEC) alterando os arts. 14 e 37 da CF/88. |
| **[`/caminhos-legais`](https://alessiojr.github.io/abreosigilo/caminhos-legais/)** | Guia de tramitação: o que o Presidente pode fazer por Decreto vs. o que exige PEC ou Lei Complementar. |
| **[`/constitucionalidade`](https://alessiojr.github.io/abreosigilo/constitucionalidade/)** | Fundamentação jurídica robusta (ponderação de direitos fundamentais, jurisprudência do STF e tratados da ONU/OEA). |
| **[`/direita`](https://alessiojr.github.io/abreosigilo/direita/)** | Abordagem para liberais e conservadores: eficiência do Estado, responsabilidade fiscal e coerência moral. |
| **[`/esquerda`](https://alessiojr.github.io/abreosigilo/esquerda/)** | Abordagem para defensores da justiça social: recursos desviados da corrupção fazem falta em escolas e hospitais. |
| **[`/centrao`](https://alessiojr.github.io/abreosigilo/centrao/)** | Abordagem matemática para indecisos: *"Não é ideologia, é prestação de contas"*. |

---

## 📚 Documentação Estratégica Inclusa

O repositório contém peças jurídicas e estratégicas completas formuladas para os dois principais atores da República:

- 🗺️ **[plano_de_trabalho.md](./plano_de_trabalho.md):** Cronograma de execução em 6 etapas, da liderança pelo exemplo até a integração automatizada (Receita + TSE + CGU + COAF).
- 🏛️ **[perspectiva_presidente.md](./perspectiva_presidente.md):** Minuta de Decreto Presidencial (Executivo Federal), Exposição de Motivos Interministerial, Mensagem Presidencial ao Congresso Nacional e Pronunciamento à Nação em Cadeia de TV/Rádio.
- ⚖️ **[perspectiva_deputado.md](./perspectiva_deputado.md):** Texto integral da PEC, Justificação Constitucional doutrinária, Projeto de Lei Complementar (alteração na Lei da Ficha Limpa - LC 64/90), Discurso na Tribuna da Câmara e Guia Regimental para a CCJC.
- 📢 **[estrategia_comunicacao_e_plataforma.md](./estrategia_comunicacao_e_plataforma.md):** Diretrizes para mobilização digital, manifesto nacional e observatório cívico.

---

## 🛠️ Tecnologias Utilizadas

- **Framework Web:** [Astro 4.x](https://astro.build/) (Renderização estática de alta performance)
- **Estilização:** CSS3 Vanilla moderno (mobile-first, variáveis CSS, grid responsivo)
- **Tipografia:** Google Fonts (Barlow Condensed, Inter, Merriweather, Plus Jakarta Sans)
- **Hospedagem & CI/CD:** GitHub Pages com branch de deploy `gh-pages`
- **Privacidade & Segurança:** Sem rastreadores intrusivos, sem cookies de terceiros, dados gerados no próprio navegador

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** (ou yarn/pnpm)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/alessiojr/abreosigilo.git
cd abreosigilo
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
O projeto estará acessível em `http://localhost:4321/` (ou na porta indicada no terminal).

### Build de Produção

Para compilar a versão estática final:
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`.

---

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Se você é advogado constitucionalista, auditor, cientista político, desenvolvedor ou cidadão engajado:

1. Faça um **Fork** deste repositório.
2. Crie uma branch para sua funcionalidade ou correção:
   ```bash
   git checkout -b minha-contribuicao
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade cívica"
   ```
4. Envie para o seu fork:
   ```bash
   git push origin minha-contribuicao
   ```
5. Abra um **Pull Request**.

Veja mais orientações em [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## ⚖️ Licença

Este projeto é distribuído sob a licença **MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes. O material de debate legislativo e minutas são de livre consulta e circulação pública republicana.
