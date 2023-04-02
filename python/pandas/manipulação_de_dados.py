import pandas as pd


lista_funcionarios = ''.split()

dfs = pd.DataFrame(lista_funcionarios, columns=['Nome'])

dfs['idade'] = ""
dfs = dfs.append({ 'nome': 'Eractrus','idade': 54},ignore_index=True)

print(dfs)
