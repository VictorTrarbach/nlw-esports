//Renderiza o componente bonito no main.tsx
//Primeira letra maiúscula -> Componente
Uma tag seria com uma letra minúscula

Ex tag <img src="">
Os atributos que passamos definem como vai se comportar/ ser vista em tela


Componentes
define uma interface

interface ButtonProps {
  title: string;
}

function Button() {
    return(
        <button>Botão</button>
    )
}
function App() {
    return(
        <div>
            <Button title ="Send 1"/>
            <Button title ="Send 2" />
            <Button title ="Send 3" />
        </div>
    )
}

Propriedades

Tailwind (Produtividade e Padronização)
Segue a padronização (Regra dos 8px) fonte, espaçamento, cores, etc Múltiplos de 8px 1rem = 16px
Uma medida relativa é acessível, se comporta com base no tamanho da fonte do dispositivo do usuário

Pô, mas aí vai ficar sujo pra caramba
Sim e não
Uma das premissas do React é ter o nosso código o mais separado possível em vários componentes menores

postcss.config.cjs
Diz para o Vite entender que estamos usando o PostCss (Pré processador para css assim como o Saas)
(Uma ferramenta que automatiza processos de escrita de Css) ele se integra com o Tailwind e nossa aplicação passa a entender que estamos usando o Tailwind

Podemos ajustar os breakpoints no tailwind.config para  //lg,md,sm até tal tamanho tal ...

podemos colocar a cor de fundo no html mesmo com class pq é um arquivo html, n do react. 
tailwind.config.cjs
'./index.html'

extend: {
    backgroundImage: {
        galaxy: "url('/background-galaxy.png')"
      }
}
Colocar o background no public

cria uma propriedade nova para colocar o linear-gradient do texto

//lg,md,sm/Large,medium,small dark para sistemas com light e dark mode

Olha a documentação do tailwind e estiliza o que quiser

Lembra do Flexbox Zombies

mx-auto -> margin x auto (centraliza)
flex flex-col -> flexbox (coluna)
items-center -> alinha os itens no centro

Tailwind remove toda estilização padrão do html, então temos que colocar o que queremos


Olha o Figma e extrai as propriedades

py-6 -> padding y 6px 6x4 = 24px em cima e embaixo
px-8 -> padding x 8px 8x4 = 32px esquerda e direita

mt-8 -> margin top 8px 8x4 = 32px dist da div de cima

instalar phosphor icons (se quiser colocar os ícones do Figma)

Escolher as fontes do Figma no Google Fonts delecionar, copiar o link e coloca no index.html
com o preconnect já logo dps do meta charset (o quanto antes possível)