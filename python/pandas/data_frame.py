#importando biblioteca

import pandas as pd

lista_nomes = 'eractrus ben-hur maria andressa josé joão'.split()

pd.DataFrame(lista_nomes, columns=['funcionários'])# criando um dataframe

print(pd.DataFrame(lista_nomes, columns=['funcionários']))