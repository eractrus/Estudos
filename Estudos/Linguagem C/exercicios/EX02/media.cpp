#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	char nome[20];
	float nota1;
	float nota2;
	float media;
	
	printf("Digite seu nome:\n");
	scanf("%s",&nome);
	
	printf("Digite sua primeira nota:\n");
	scanf("%f",&nota1);
	
	printf("Digite sua segunda nota:\n");
	scanf("%f",&nota2);
	
	media = (nota1 + nota2)/2;
	
	printf("Sr.%s", nome);
	printf(" Sua nota final e: %f", media);
	
	
	
	
	
	
	
	
	
	return 0;
}
