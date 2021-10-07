# Desafio Go

## Esse desafio é muito empolgante principalmente se você nunca trabalhou com a linguagem Go!
### 1. Você terá que publicar uma imagem no docker hub


A imagem gerada possui 1.77MB, sem o uso de multi-stage a imagem seria de 315MB.
https://hub.docker.com/r/sidneypp/codeeducation

### 2. Quando executarmos:

```sh
 docker run <seu-user>/codeeducation 
 ```

### 3. Temos que ter o seguinte resultado: ```Code.education Rocks!```

Se você perceber, essa imagem apenas realiza um print da mensagem como resultado final, logo, vale a pena dar uma conferida no próprio site da Go Lang para aprender como fazer um "olá mundo".

Lembrando que a Go Lang possui imagens oficiais prontas, vale a pena consultar o Docker Hub.

### 4. A imagem de nosso projeto Go precisa ter menos de 2MB =)

Dica: No vídeo de introdução sobre o Docker quando falamos sobre o sistema de arquivos em camadas, apresento uma imagem "raiz", talvez seja uma boa utilizá-la.