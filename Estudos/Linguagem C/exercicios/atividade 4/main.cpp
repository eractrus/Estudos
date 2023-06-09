#include <iostream>
#include <stdio.h>
#include <string.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	// criação das variáveis	
	char nome[40];
	char endereco[50];
	char telefone[20];
	
	// nome do projetos
	printf("\n\t\tTrabalho projeto integrado II\n");
	
	// Entrada de dados 
	printf("\n Digite seu nome: ");
	fgets(nome,40,stdin);
	
	printf("\n Digite seu endereco: ");
	fgets(endereco,50,stdin);
	
	printf("\n Digite seu telefone: ");
	fgets(telefone,20,stdin);
	
	// mensagem de cadastro de dados
	printf("\n\n \t Seus dados cadastrados \n");
	// esxibição de dados
	
	printf("\n Nome: %s", nome);
		printf("\n Endereco: %s", endereco);
			printf("\n Telefone: %s", telefone);	
			
	return 0;
}
