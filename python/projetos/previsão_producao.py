# importando biblioteca

import pandas as pd

lista_dados_lp27 = pd.Series([2000,1200,1400,3000,3000,1200,1000,900,1200,1000,3000])

print('Máximo de venda:', lista_dados_lp27.max())
print('Média de venda:', lista_dados_lp27.mean())
print('Minimo de venda:', lista_dados_lp27.min())
print(' ')
print('Desvio padrão')
print('Valor do desvio: ', lista_dados_lp27.std())




