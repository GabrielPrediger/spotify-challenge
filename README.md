# 🎵 MusicFinder - Cliente da API do Spotify

Este projeto é um cliente moderno e interativo para a API do Spotify, construído como parte de um desafio técnico de frontend. Ele demonstra as melhores práticas em desenvolvimento React, incluindo gerenciamento de estado, consumo seguro de APIs e uma interface de usuário rica e animada, com foco em uma experiência de usuário fluida e agradável. A UI foi inspirada na estética de aplicativos de música modernos como o Spotify, mas com a liberdade criativa de incorporar elementos de design únicos, como Glassmorphism e animações fluidas, para criar uma experiência visualmente distinta e agradável.

---

## ✨ Funcionalidades

- **Busca Dinâmica:** Pesquisa de artistas e álbuns em tempo real com _debouncing_ para otimizar as chamadas à API.
- **Página de Detalhes do Artista:** Visualização completa com top músicas e discografia.
- **Paginação Inteligente:** Navegação manual para listas de álbuns, com transições suaves e sem "piscar" a tela.
- **Filtro Avançado:** Filtragem de álbuns com troca de contexto para busca no lado do servidor, garantindo a melhor UX.
- **Player de Mídia Interativo:** Um media player fixo com animações, controles de volume e barra de progresso funcional.
- **UI Moderna e Responsiva:** Design que se assemelha a um aplicativo nativo em telas menores, garantindo uma experiência de uso perfeita em qualquer dispositivo.
- **Internacionalização (i18n):** Suporte completo para múltiplos idiomas (Português e Inglês) com um seletor dinâmico.
- **Error Handling Global:** Notificações de erro não intrusivas com **Sonner**, gerenciadas globalmente via React Query.
- **Qualidade de Código Garantida:** Configuração robusta com **ESLint** e **Prettier** para garantir um código limpo, consistente e livre de erros, incluindo um plugin para ordenação automática de classes do Tailwind CSS.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com um stack de tecnologias moderno e focado em performance e produtividade:

- **Core:** React 19, Vite, TypeScript
- **Estilização:** Tailwind CSS, shadcn/ui, Framer Motion (animações), Lucide (ícones)
- **Gerenciamento de Estado e Dados:** React Query (TanStack Query) para o estado do servidor, Context API para o estado global.
- **Requisições API:** Axios
- **Roteamento:** React Router DOM
- **Tradução:** i18next
- **Servidor de Token (Proxy):** Node.js + Express para o manuseio seguro das credenciais da API.

---

## 🏁 Como Iniciar o Projeto

Para rodar este projeto localmente, siga os passos abaixo.

### **Pré-requisitos**

- **Node.js:** Versão 18 ou superior.
- **npm** ou **yarn**.
- **Credenciais da API do Spotify**.

### **1. Obtenha suas Credenciais do Spotify**

1.  Vá para o [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) e faça login.
2.  Clique em "Create App". Dê um nome e uma descrição para a sua aplicação.
3.  Após criar a app, você verá seu **Client ID**. Clique em "Show client secret" para ver seu **Client Secret**. Guarde esses dois valores.

### **2. Configuração do Ambiente**

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    - Crie um arquivo chamado `.env` na raiz do projeto.
    - Copie o conteúdo do arquivo `.env.example`, substituindo pelos valores que você obteve do Spotify:

    ```env
    # .env
    SPOTIFY_CLIENT_ID=SEU_CLIENT_ID_AQUI
    SPOTIFY_CLIENT_SECRET=SEU_CLIENT_SECRET_AQUI
    ```

### **3. Rodando a Aplicação**

A aplicação precisa de dois processos rodando simultaneamente: o servidor de token e o cliente de desenvolvimento do Vite.

1.  **Inicie o servidor de token (Proxy):**
    - Abra um terminal e rode:

    ```bash
    node server.js
    ```

    - Você deve ver a mensagem `Token server running on http://localhost:3001`. Mantenha este terminal aberto.

2.  **Inicie a aplicação React (Vite):**
    - Abra um **novo terminal** e rode:

    ```bash
    npm run dev
    ```

    - Abra o seu navegador e acesse [http://localhost:5173](http://localhost:5173) (ou a porta que o Vite indicar).

Pronto! A aplicação deve estar rodando localmente.

---

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento do Vite.
- `npm run build`: Compila a aplicação para produção.
- `npm run lint`: Executa o linter (ESLint) para verificar a qualidade do código.
- `npm run preview`: Inicia um servidor local para visualizar a build de produção.



## Algumas imagens do app

**Desktop**

<img width="1903" height="916" alt="image" src="https://github.com/user-attachments/assets/a3a2230c-5c4c-4176-8033-133a1970ab21" />
<img width="1904" height="913" alt="image" src="https://github.com/user-attachments/assets/5cdda973-8597-477c-9852-75233b3349b8" />
<img width="1905" height="909" alt="image" src="https://github.com/user-attachments/assets/e065fd47-eea7-4fe6-a079-39c8e5fad2e1" />
<img width="1904" height="915" alt="image" src="https://github.com/user-attachments/assets/6262c0c5-1e84-4411-8629-6e10e55f1a55" />
<img width="1901" height="912" alt="image" src="https://github.com/user-attachments/assets/afdb0d00-3e1a-40d8-bc85-ab26dae13f5d" />


**Mobile**

<img width="413" height="846" alt="image" src="https://github.com/user-attachments/assets/d9adbfe4-4a72-4819-8dcf-67cc3526fe24" />
</br>
<img width="405" height="839" alt="image" src="https://github.com/user-attachments/assets/2020fa21-f4d9-48ad-98fd-a759f8adb53e" />
</br>
<img width="399" height="837" alt="image" src="https://github.com/user-attachments/assets/1609b0d1-0f96-41c0-a8d5-3a2ba1bfdde9" />
</br>
<img width="399" height="834" alt="image" src="https://github.com/user-attachments/assets/342b5a98-1a7d-47fa-9049-5cb4d0cc1966" />
</br>
<img width="408" height="843" alt="image" src="https://github.com/user-attachments/assets/b0ea3652-22eb-4d89-8253-47b2011a9349" />








