# Estruturas de repetição - while e for

#  Em uma estrutura de repetição sempre averá uma estrutra de decisão 

# sintaxe:
#   while + lógica:
#    código 
#       condicional

#numero = 1

#while numero != 0: # delcaração do laço e lógica 
 #   numero = 2 # entrada do dados

    # condição do laço
   # if numero % 2 == 0:
     #   print('Numero é par')
  #  else:
    #    print('numero é impar')

   # break # parada da repetição 


# for

nome = 'Eractrus'

for i ,c in enumerate(nome):
    print(f'posição = {i}, valor = {c}')
    print(nome)


# funções de controle de laços
    #range() - controla quantas vezes irá se repetir o laço
    #break - Serve para determinar uma parada para o laço 
    #continue - Serve para seguir a leitura do código para o próximo bloco