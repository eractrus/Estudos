#As tuplas também são estruturas de dados do grupo de objetos do tipo sequência.
#As tuplas são imutáveis
#


frutas = ('maçã', 'banana', 'uva')

for f in frutas:
    print(f)

opcao = '1'

while opcao == '1':

    print(f'escolha uma opção:')
    print(f'1 - cosultar')
    print(f'0 - sair')

    opcao = input('')

    if(opcao == '0'):
        print(f'Até breve')
    else:
        busca = input('digite a fruta desejada: ')

        if (busca in frutas):
            print(f'Fruta cadastrada')
            opcao = '1'
        else:
            print(f'fruta não cadastrada')
            break

