# funções são blocos de comanddos que são executados quando chamados


#              Parâmetro posicional, obrigatório, sem valor default (padrão).

#def SaudacaoInicial(nome, curso): # definiçãod e função + passagem de parâmetros
    #print(f'Olá {nome}, tudo bem com você? Vi que você estuda {curso}') # código a ser executado 

#SaudacaoInicial('Eractrus','Desenvolvimento Web') #chamada da função



#                 Parâmetro posicional, obrigatório, com valor default (padrão).

#def saudacao_inicial(nome = 'Eractrus', curso = 'Desenvolimento web'):# passagem de valor defaut
    #print(f'Olá {nome}, feliz em rever você. Está gostando do curso de {curso}?')

#saudacao_inicial('João','Arquitetura de software')


#           Parâmetro nominal, obrigatório, sem valor default (padrão).

#def saudacao_inicial(nome , curso ):# passagem de valor defaut

   # print(f'Olá {nome}, feliz em rever você. Está gostando do curso de {curso}?')

#saudacao_inicial( curso = input('Digite o nome do seu curso: '), nome= input('Digite seu nome: '))


#           Parâmetro nominal, obrigatório, com valor default (padrão).


def saudacao_inicial(nome = 'Eractrus' , curso = 'ADS' ):# passagem de valor defaut

    print(f'Olá {nome}, feliz em rever você. Está gostando do curso de {curso}?')

saudacao_inicial( nome = 'André')


# Parâmetro posicional e não obrigatório (args).
# Parâmetro nominal e não obrigatório (kwargs).

# sintaxe 



