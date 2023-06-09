senha = '1234'
opcao1 = ""
opcao0 = ""

opcao = input('escolha uma opção 1 para sair ou 0 para fazer login: ')

while opcao > '1':
    print(f'Digite uma opção válida')
    print(f'0 - Entrar no sitema')
    print(f'1 - sair do sitema')

    opcao = input('escolha uma opção 1 para sair ou 0 para fazer login: ')

if(opcao == '1'):
    print(f'Sistema encerrado')

else:
    while opcao == '0':

        login = input('digite seu login: ')
        entradaSenha = input('Senha: ')

        if(entradaSenha == senha and login == 'eractrus'):
            print(f'Acesso liberado !')
            opcao = 1
            break

        else:
            print(f'senha ou login errado')
            
        