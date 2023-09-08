// Interface
interface Sacola {
    titulo: string;
    descricao: string;
    preco: number;
    adicionarItem: (titulo: string, descricao: string, preco: number) => void;
}

const list: Sacola[] = [];

const novoPedido: Sacola = {
    titulo: 'modelo',
    descricao: 'modelo',
    preco: 0,
    adicionarItem:  (titulo, descricao, preco) => {
        const addSacola: Sacola = {
            titulo: titulo,
            descricao: descricao,
            preco: preco,
        };

        list.push(addSacola);

        list.forEach(item => {
            console.log(`Titulo: ${item.titulo}`);
            console.log(`Descricao: ${item.descricao}`);
            console.log(`Preco: ${item.preco}`);
            console.log(`------------------`);
        });
    },
};

function getInfoSacola() {
    const resumo = list.length > 1 ? `${list.length} produtos adicionados à sacola` : `${list.length} produto adicionado à sacola`;

    console.log(resumo);
}

novoPedido.adicionarItem('Camisa Barcelona', 'Oficial 2023', 250);
novoPedido.adicionarItem('Camisa Flamengo', 'Oficial 2023', 150);


getInfoSacola();


