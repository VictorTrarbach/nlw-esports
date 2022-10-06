## Back-end

## Entidades

### Game

id
title
bannerUrl

CDN (Amazon S3) (Content Delivery Network) - Armazenamento de arquivos
Vamos usar a Url da Twitch, pra n ter trabalho com Upload de arquivos

### Ad

id
gameId
name
yearsPlaying
discord
weekDays
hourStart
hourEnd
useVoiceChannel
createdAt

[0,1,2,3,4,5,6,7] - Dias da semana que vai jogar
Ex: [1,3,5] - Segunda, Quarta e Sexta salvamos esse Array no BD


## Casos de uso

- Listagem de games com contagem de anúncios
- Criação de novo anúncio	
- Listagem de anúncios por game
- Buscar discord pelo ID do anúncio