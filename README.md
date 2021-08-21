# Tecnologias Utilizadas - Redux, Axios, Styled Components.
# Candidato - Artur Ribeiro de Sousa.

Sobre o desafio 🤯
O Objetivo será implementar um Webapp de listagem e pré-visualização de músicas.



Para isso será utilizado a API do Deezer para requisitar os dados necessários, a documentação estará disponível no link a seguir (https://developers.deezer.com/api/explorer?url=chart)

O projeto deverá ser entregue em forma de repositório público com as instruções de instalação e execução. 


Requisitos 😇
Bibliotecas e patterns Indispensáveis;
ReactJs ou ReactNative for web; ##CONCLUIDO
Redux; ##CONCLUIDO
Axios; ##CONCLUIDO
Styled Components; ##CONCLUIDO

Organização do Webapp:

## CONCLUIDO
1º View:

Deverá apresentar a lista das principais músicas do momento listadas na Deezer;
Também deve existir um campo de pesquisa por texto onde podemos pesquisar por álbum, artista, ou título musical;
Quando realizar alguma pesquisa, a listagem inicial deve ser substituída pela listagem referente a pesquisa. (Usar o mesmo componente de listagem)

## CONCLUIDO
Os itens da lista devem apresentar:

Os dados da música como (capa do álbum, título, cantor, duração);
Um botão para acessar a musica completa no Deezer;
Um botão de play/pause para escutar a prévia da música;
Um botão para adicionar a música na lista de músicas favoritas;


## CONCLUIDO
2º View:

Será apresentada a lista com as músicas escolhidas pelo usuário na tela principal. A listagem deve ser semelhante a da tela inicial, porém deve mostrar o botão para remover da lista de favoritos.


Orientações:

Fique a vontade para escolher utilizar Hooks ou classes, mas não misture-os. ## Feito utilizando Hooks
Use e Abuse do Redux! Precisamos saber o seu nível de familiaridade com ele.
A listagem de músicas favoritas deve estar contida em uma store do Redux, porém se quiser implementar algo para salvar no navegador a lista, seria bem legal, mas não é obrigatório. ## Musicas salvas na Store do Redux
A listagem de músicas vindas da API devem ser feitas através de paginação, fique a vontade para fazer como achar melhor, porém, um infinity scroll daria aquele toque a mais, fica a dica! 😉 ## Infinite Scroll implementado.


Observação final:  Devido a um erro de CORS, foi feito o uso de um proxy para o acesso a API do Deezer. Todas as informações são as mesmas, e o resultado obtido da API é igual ao que seria recebido sem o uso desse Proxy.
