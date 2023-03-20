# estrutura condicional encadeada - elif

#cor = input('Digite uma cor entre vermelho, amarelo, verde: ')

#if cor == 'amarelo':
   # print('Tenha Cuidado')
#elif cor == 'vermelho':
    #print('Pare agora !')
#else:
    #print('Acelere !')


# lógica da programação - operadores booleanos

# and = e / quando os dois são verdadeiros
# or = ou / quando 1 ( um ) argumento é verdadeiro
# not = diferente / iinverte o valor do argumento 

# podemos reescrever o código acima 


cor = input('Digite uma cor entre vermelho, amarelo, verde: ')

if cor == 'amarelo' or cor == 'vermelho':
    print('Tenha Cuidado !')

else:
    print('Acelere !')

