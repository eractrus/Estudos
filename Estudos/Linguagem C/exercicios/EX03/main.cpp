#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	 
	 int idade;
	 
	 char nome[30], sexo[1];
	 
	 printf("Digite seu nome: \n");
	 scanf("%s", &nome);
	
	printf("Ola %s", nome);
	
	printf(" \n Qual seu sexo ? M para masculino ou F para feminino \n");
	scanf("%s", sexo);
	
	printf(" Digite sua idade \n");
	
	scanf("%d", &idade);
	
	if( idade <= 17 ){
		
		printf("Poxa voce não possui a idade adequada !");
	}
	
	
	
	return 0;
}
