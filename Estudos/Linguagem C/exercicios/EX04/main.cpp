#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	float renda, renda_final, casa, investimentos, estudos, lazer;
	char nome[30];
	
	
	// Entrada de nome 
	printf("Digite seu nome ");
	scanf("%s", &nome);
	
	printf("Ola, %s ", nome );
	printf("vamos iniciar ? \n\n");
	// fin da entrada do nome 
	
	
	// entrada dos valores para cáculo 
	printf("Digite a porcentagem desejada para casa: ");
	scanf("%f", &casa);
	
	printf("\n \n Digite a porcentagem desejada para inestimentos: ");
	scanf("%f", &investimentos);
	
	printf("\n \n Digite a porcentagem desejada para estudos: ");
	scanf("%f", &estudos);
	
	printf("\n \n Digite a porcentagem desejada para lazer: ");
	scanf("%f", &lazer);
	
	// fim da entrada dos dados 
	
	
	
	// entrada do valor renda 
	printf("\n Digite sua renda \n");
	scanf("%f", &renda);
	
	// fim do valor renda
	
	// calculos baseados na renda e na entrada dos dados 
	casa = renda*(casa / 100);
	estudos = renda*(estudos / 100);
	investimentos = (renda / 100)*investimentos;
	lazer = renda*(lazer / 100);
	
	renda_final = renda - casa - estudos - investimentos - lazer;
	
	// fim dos cálculos
	
	
	// resultado
	printf("\n \n Sua renda %f", renda);
	printf("\n \n Valor para casa = %f", casa);
	printf("\n \n Valor para investir = %f", investimentos);
	printf("\n \n Valor para estudos = %f", estudos);
	printf("\n \n Valor para lazer = %f", lazer);
	printf("\n \n Valor final da sua renda = %f \n", renda_final);
	
	// fim do resultado 
	
	// MENSAGEM SOBRE O RESTO DA RENDA
	
	if ( renda_final > 0 )
	{
		
		printf("\n Parabens sua vida financeira este BOA ! \n");
	}
	
	else 
	{
		printf("\n Seus gastos estao maiores que sua renda \n");
	}
	
	
	
	return 0;
}
