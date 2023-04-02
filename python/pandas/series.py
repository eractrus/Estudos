# Séries - é um conceito de cluna ou linha unidimensional, capaz de armazernar diversos tipos de dados diferentes

#dataframe - é um conjunto de séries ( um container de séries ). Similar  a uma planilha

#importação da biblioteca

import pandas as pd

lista_dados = pd.Series([100, 1200, 1400, 200, 50])#definição de uma séries


# utilização funções e métodos da biblioteca pandas
print('Menor valor: ', lista_dados.min())
print('Maior valor: ', lista_dados.max())
print('Média', lista_dados.mean())
print('Desvio padrão', lista_dados.std())
print('Quantos valores ?', lista_dados.count())
print('Possui valores nulos ?', lista_dados.hasnans)
print('Quantas linhas existem ?', lista_dados.shape)
print('')
print('Descrição:', lista_dados.describe())

