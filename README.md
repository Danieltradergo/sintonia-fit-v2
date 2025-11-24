# SintoniaFit - Transformação Corporal Inteligente com IA

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Status](https://img.shields.io/badge/Status-Active-green.svg)
![Free](https://img.shields.io/badge/Price-100%25%20Free-brightgreen.svg)

SintoniaFit é um webapp ultra-eficiente e acessível para pessoas em tratamento com Mounjaro, otimizando emagrecimento saudável por meio de planos de exercícios caseiros e alimentação inteligente, personalizado e monitorado semanalmente, utilizando agentes inteligentes do Perplexity para personalização extrema e suporte contínuo.

## 🌟 Características

- ✅ **100% Gratuito** - Sem custos escondidos ou tiers pagos
- ✅ **Open Source** - Código MIT completamente aberto
- 📄 **Planos de Exercícios Personalizados** - Exercícios para casa com instruções detalhadas e vídeos
- 🍽️ **Nutrição Inteligente** - Planos alimentares baseados nos ingredientes que você tem
- 📊 **Dashboard de Progresso** - Monitoramento semanal com gráficos de peso
- 🤖 **Agentes de IA Perplexity** - 3 sub-agentes especializados:
  - **Agente Nutri**: Especialista em nutrition e planejamento de refeições
  - **Agente Personal**: Especialista em exercícios e fitness personalizados
  - **Agente Apoio**: Suporte e motivação 24/7

## 🏠 Stack Tecnológico

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Autenticação**: Supabase Auth (Google OAuth + Email/Password)
- **Banco de Dados**: PostgreSQL via Supabase
- **IA/Agentes**: Perplexity API
- **Deploy**: Vercel (100% free tier)
- **Visualização**: Recharts para gráficos de progresso

## 🚀 Quick Start

### Pré-requisitos

- Node.js 18+ e npm/yarn
- Conta Supabase (gratuita)
- Chave da API Perplexity (gratuita)
- Conta Vercel (gratuita)

### Instalação Local

```bash
# Clonar repositório
git clone https://github.com/Danieltradergo/sintonia-fit-v2.git
cd sintonia-fit-v2

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local

# Editar .env.local com suas chaves:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
PERPLEXITY_API_KEY=your_perplexity_key

# Rodar em desenvolvimento
npm run dev

# Abrir http://localhost:3000
```

## 📄 Documentação

- [Guia de Configuração Completa](./docs/SETUP.md)
- [Arquitetura](./docs/ARCHITECTURE.md)
- [API Reference](./docs/API.md)
- [Contributing Guide](./CONTRIBUTING.md)

## 💫 Contribuindo

Contribuições são bem-vindas! Por favor, leia [CONTRIBUTING.md](./CONTRIBUTING.md) para detalhes.

## 📁 Licença

MIT License - veja [LICENSE](./LICENSE) para mais detalhes

## 🙋 Suporte

Para suporte, abra uma issue no GitHub ou entre em contato.

---

**Desenvolvido com ❤️ para transformar vidas**.
