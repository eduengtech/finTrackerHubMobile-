# Guia de Contribuição

## Workflow de Desenvolvimento

### 1. Antes de Começar
```bash
git checkout develop
git pull origin develop
```

### 2. Criar Feature Branch
```bash
git checkout -b feature/FT-XXX-descricao-clara
```

### 3. Desenvolver
- Escreva código limpo
- Siga convenções do projeto
- Execute `npm run lint:fix` e `npm run format` antes de commitar

### 4. Commit
```bash
git commit -m "feat: descrição clara do que foi feito"
```

### 5. Push e Pull Request
```bash
git push origin feature/FT-XXX-descricao-clara
```

Abra um PR no GitHub com descrição clara.

## Padrões de Código

### TypeScript
- Type everything
- Use interfaces para contracts
- Evite `any`

### Componentes
- Functional components
- Hooks para state
- Props bem tipadas

### Services
- Centralizar requisições HTTP
- Tratamento de erros consistente
- Sem lógica de UI

### Commits
- `feat:` - nova feature
- `fix:` - bug fix
- `chore:` - tarefas de setup
- `docs:` - documentação
- `refactor:` - melhorias sem novas features

## Pre-commit Checklist

- [ ] Código passa em `npm run lint`
- [ ] Código está formatado com `npm run format`
- [ ] Sem console.log desnecessários
- [ ] TypeScript sem errors
- [ ] Commit message é descritivo

---

Obrigado por contribuir! 🎉
