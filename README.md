# Agência Laos - Website Oficial

## Sobre
Site oficial da Agência Laos - uma agência nômade, multilíngue e multicultural especializada em branding e marketing para marcas que querem atravessar fronteiras.

## Características
- **Design Moderno**: Interface com efeitos neon e animações
- **Responsivo**: Otimizado para todos os dispositivos
- **Multilíngue**: Suporte para Português, Espanhol e Inglês
- **Performance**: Carregamento rápido e otimizado

## Tecnologias Utilizadas
- HTML5
- CSS3 (com animações e efeitos neon)
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome
- Google Fonts

## Estrutura do Projeto
```
├── index.html          # Página principal (Português)
├── index-es.html       # Versão em Espanhol
├── styles.css          # Estilos customizados
├── script.js           # JavaScript interativo
├── README.md           # Documentação
└── .gitignore          # Arquivos ignorados pelo Git
```

## Como Executar Localmente

### Opção 1: Python HTTP Server
```bash
python -m http.server 8000
```

### Opção 2: Node.js HTTP Server
```bash
npx http-server -p 8080
```

Acesse: `http://localhost:8000` ou `http://localhost:8080`

## Deploy

### GitHub Pages (Ativo)
O site está configurado para deploy automático no GitHub Pages:

1. Vá para **Settings > Pages** no seu repositório GitHub
2. Em "Source", selecione **"GitHub Actions"**
3. O workflow será executado automaticamente a cada push
4. O site estará disponível em: `https://seu-usuario.github.io/nome-do-repositorio`

### Azure Static Web Apps (Configuração Manual)
Para ativar o deploy no Azure:

1. **Crie um Azure Static Web App:**
   - Acesse o [Azure Portal](https://portal.azure.com)
   - Crie um novo "Static Web App"
   - Conecte ao seu repositório GitHub
   - Copie o **Deployment Token**

2. **Configure o Secret no GitHub:**
   - Vá para **Settings > Secrets and variables > Actions**
   - Adicione um novo secret: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Cole o token copiado do Azure

3. **Ative o workflow:**
   - Renomeie `.github/workflows/azure-static-web-apps-disabled.yml`
   - Para: `.github/workflows/azure-static-web-apps.yml`
   - Faça commit das alterações

4. **Desative o GitHub Pages (opcional):**
   - Delete ou renomeie o arquivo `azure-static-web-apps.yml` atual

## Contato
- **Agência**: Agência Laos
- **Slogan**: "Se a sua marca quer atravessar fronteiras, comece com a nossa"
- **Especialidades**: Branding Multicultural, Marketing Multicultural, Conteúdo Estratégico

## Licença
Todos os direitos reservados - Agência Laos 2025