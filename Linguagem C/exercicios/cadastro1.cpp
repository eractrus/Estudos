#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
		int idade;
		char nome[30];
		char sexo[30];
		
		
		printf("Digite seu nome: \n");
		scanf("%s",&nome);
		
		printf("Digite seu sexo: ex M ou F \n");
		scanf("%s",&sexo); 
		
		printf("Digite sua idade: \n");
		scanf("%d",&idade);
			
	
		printf("\n Seu nome e: %s", nome);
		printf("\n Seu sexo e: %s", sexo);
		printf("\n Sua idade e: %d", idade);
		
	return 0;
}
