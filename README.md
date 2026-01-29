🚀 NPOC Ciência — Frontend

Sistema frontend do NPOC (Núcleo de Pesquisas e Olimpíadas do Conhecimento), desenvolvido para demonstrar a plataforma de transparência, gestão de produções científicas e área do professor.

⚠️ Projeto em fase de protótipo funcional (frontend apenas, dados mockados).

📦 Requisitos

Antes de iniciar, é necessário ter instalado:

Node.js v24+

npm v10+

Para verificar:

node -v
npm -v

▶️ Como executar o projeto

Abra o terminal na pasta do projeto:

cd npoc-ciencia-frontend


Instale as dependências:

npm install


Execute o projeto:

npm run dev


Acesse no navegador:

http://localhost:3000

🔐 Usuários de Teste

O sistema possui autenticação simulada no frontend para fins de demonstração.

👨‍🏫 Professor
Email: professor@npoc.com
Senha: 123456


Acesso a:

Dashboard do Professor

Minhas Produções

Submissão de Projetos

Perfil

🧑‍💼 Gestor / Admin (NPOC)
Email: admin@npoc.com
Senha: admin123


Acesso a:

Dashboard Administrativo

Aprovação / Rejeição de Trabalhos

Edição de Produções

Métricas por Curso

Painel Geral

🌐 Funcionalidades Implementadas
🏠 Homepage Pública

Navbar institucional

Hero section

Cards de transparência

Layout responsivo

Design preparado para inclusão futura de dados reais

👨‍🏫 Área do Professor

Login separado

Dashboard próprio

Visualização de produções

Submissão de novos projetos contendo:

Professores envolvidos

Alunos envolvidos

Área do projeto

Cursos envolvidos (multicurso)

Link externo (Drive / PDF)

Descrição do projeto

🧑‍💼 Área do Gestor (NPOC)

Dashboard administrativo

Visualização geral das submissões

Aprovar, rejeitar e sugerir alterações

Edição de projetos

Métricas por curso:

Informática

Redes de Computadores

Farmácia

Meio Ambiente

Administração

Enfermagem

🎯 Objetivo do Protótipo

Este projeto tem como objetivo:

Demonstrar visualmente a proposta do sistema do NPOC

Validar fluxos de uso com professores e gestores

Apoiar apresentações institucionais

Servir como base para futura integração com backend e banco de dados

🛠️ Tecnologias Utilizadas

Next.js

React

TypeScript

Tailwind CSS

Componentes responsivos

Navegação por rotas dinâmicas

⚠️ Observações Importantes

Este projeto é somente frontend.

Não há persistência de dados.

As informações são mockadas para demonstração.

Backend e autenticação real serão implementados futuramente.

📌 Próximos Passos (Sugestão)

Integração com banco de dados

Autenticação real (JWT / OAuth)

Controle de permissões

Upload de arquivos

Dashboard analítico avançado

Relatórios automáticos

Exportação de dados
