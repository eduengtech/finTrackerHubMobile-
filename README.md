# FinTracker Hub - Mobile App

Aplicativo mobile para gerenciamento financeiro pessoal, desenvolvido com React Native + Expo.

## 📋 Visão Geral do Projeto

FinTracker Hub é uma aplicação de rastreamento financeiro que simula um ambiente profissional de mercado:
- **Multi-repo**: Backend (Spring Boot) e Mobile (React Native) em repositórios separados
- **Gestão de Projeto**: Sprints com Jira, Git Flow, Pull Requests
- **Qualidade**: ESLint, Prettier, TypeScript
- **Arquitetura**: Clean Architecture + DDD

## 🚀 Quick Start

### Pré-requisitos
- Node.js v18+ (recomendado v20+)
- npm v10+
- Git

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/fintracker-mobile.git
cd fintracker-mobile

# Instale dependências
npm install

# Inicie o desenvolvimento
npm start
```

### Rodando a Aplicação

```bash
# Opção 1: No navegador (web)
npm start
# Pressione 'w'

# Opção 2: iOS Simulator
npm start
# Pressione 'i'

# Opção 3: Android Emulator
npm start
# Pressione 'a'
```

## 📁 Estrutura do Projeto

finTrackerHunMobile/

├── src/

│   ├── app/                    # Rotas Expo Router

│   │   ├── _layout.tsx         # Layout raiz

│   │   ├── index.tsx           # Home/Splash

│   │   ├── (auth)/             # Grupo de autenticação

│   │   │   ├── login.tsx

│   │   │   └── register.tsx

│   │   └── (authenticated)/    # Grupo autenticado

│   │       └── dashboard.tsx

│   ├── components/             # Componentes reutilizáveis

│   │   ├── ui/

│   │   ├── forms/

│   │   ├── layouts/

│   │   └── common/

│   ├── services/               # Integração com APIs

│   │   ├── api.ts

│   │   ├── auth.service.ts

│   │   └── accounts.service.ts

│   ├── shared/                 # Código compartilhado

│   │   ├── types/

│   │   ├── utils/

│   │   ├── constants/

│   │   └── hooks/

│   ├── theme/                  # Design System

│   ├── store/                  # State Management

│   └── global.css

├── .eslintrc.json              # ESLint config

├── .prettierrc.json            # Prettier config

├── tsconfig.json               # TypeScript config

├── app.json                    # Expo config

└── package.json

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm start              # Inicia Metro bundler

# Qualidade de Código
npm run lint           # Verifica com ESLint
npm run lint:fix       # Corrige automaticamente
npm run format         # Formata com Prettier
npm run format:check   # Verifica formatação

# Testes (em desenvolvimento)
npm test               # Roda testes unitários
```

## 🎯 Sprints e Roadmap

### Sprint 1 - Fundação Técnica ✅
- [x] Projeto Expo criado
- [x] Estrutura profissional
- [x] ESLint + Prettier
- [x] Expo Router configurado
- [x] Navegação básica funciona

### Sprint 2 - Autenticação (Em Desenvolvimento)
- [ ] Login real com backend
- [ ] Registro com validação
- [ ] JWT token management
- [ ] Refactor UI com mobile-first

### Sprint 3 - Contextos Financeiros (Planejado)
- [ ] Telas de contextos
- [ ] Integração com API de contextos
- [ ] UI profissional

### Sprint 4 - Contas Financeiras (Planejado)
- [ ] CRUD de contas
- [ ] Validações financeiras
- [ ] Dashboard de contas

## 📱 Tecnologias Utilizadas

### Frontend
- **React Native**: Framework mobile cross-platform
- **Expo**: Ferramentas e serviços para React Native
- **Expo Router**: File-based routing para navegação
- **TypeScript**: Type safety e melhor DX

### Code Quality
- **ESLint**: Linting com regras profissionais
- **Prettier**: Code formatting automático
- **tsconfig**: TypeScript configuration

### Development
- **Node.js**: Runtime JavaScript
- **npm**: Package manager

## 🔗 Integração com Backend

O mobile se comunica com o backend via HTTP:
Backend: http://localhost:8080

Mobile: http://localhost:8081
API URLs configuradas em: src/shared/constants/api-urls.ts

### Endpoints Esperados
- `POST /v1/auth/login` - Fazer login
- `POST /v1/auth/register` - Criar conta
- `GET /v1/accounts` - Listar contas
- `POST /v1/accounts` - Criar conta

## 🧪 Validação do Ambiente

Para validar que tudo está funcionando:

```bash
# 1. Verificar dependências
npm list

# 2. Validar linting
npm run lint

# 3. Iniciar app
npm start

# 4. Testar navegação
# - Home → Login → Dashboard
# - Home → Register → Dashboard
```

Veja [VALIDATION.md](./VALIDATION.md) para checklist completo.

## 📚 Arquitetura e Padrões

### Separação de Responsabilidades
app/          → Rotas e telas

components/   → UI dumb (sem lógica)

services/     → HTTP requests (comunicação com backend)

shared/       → Código reutilizável (types, utils, hooks)

### Padrões Adotados

- **Clean Architecture**: Separação clara de camadas
- **Single Responsibility**: Cada arquivo tem uma razão
- **TypeScript First**: Type safety em todo código
- **Mobile-First**: Será refatorado em Sprint 2

## 🚀 Deployment (Futuro)

- **EAS Build**: Para construir APK/IPA
- **EAS Submit**: Para submeter nas lojas
- **Expo Go**: Para testes em desenvolvimento

## 🤝 Contribuindo

1. Crie uma branch feature: `git checkout -b feature/FT-XXX`
2. Commit suas mudanças: `git commit -m "feat: descrição"`
3. Push para a branch: `git push origin feature/FT-XXX`
4. Abra um Pull Request

## 📝 Convenções Git

- **Branches**: `feature/FT-XXX`, `bugfix/FT-XXX`
- **Commits**: `feat:`, `fix:`, `chore:`, `docs:`
- **PRs**: Descrição clara do que foi feito

## 🐛 Troubleshooting

### npm start não funciona
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### ESLint errors
```bash
npm run lint:fix
```

### Metro bundler cache
```bash
npm start -- --reset-cache
```

## 📞 Suporte

- Documentação Expo: https://docs.expo.dev
- React Native Docs: https://reactnative.dev
- Issues: Abra uma issue neste repositório

## 📄 Licença

MIT License - veja LICENSE para detalhes

## 👨‍💻 Autor

Dudu - Desenvolvedor Solo

---

**Status**: Sprint 1 Concluído ✅
**Última Atualização**: 25 de junho de 2026