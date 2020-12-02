// pegando os elementos de lista, a entrada e o botão
var elementList = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
// lista de tarefas a serem acrescentadas no dom
// var list = ['Correr', 'Meditar', 'Ler', 'Ajudar minha mãe', 'Alongar', 'Beber 1L de agua'];
var list = JSON.parse(localStorage.getItem('archive')) || ['Correr', 'Meditar', 'Ler', 'Ajudar minha mãe', 'Alongar', 'Beber 1L de agua'];
// função para renderizar lista de tarefas
// primeiro limpamos a lista anterior para renderizar um nova lista
// pegamos o conteudo de 'List' com valores recebido por input text
// percorremos a lista com todos valores da lista
// criando um elemento tag li
// e preenchendo o li com texto da posição atual da lista sendo percorrida
// depois adicionamos o li com conteudo no elementList com o ul
function renderList(){
    elementList.innerHTML = '';
    for(item of list){
        var taskElement = document.createElement('li'); //cria uma tag que podemos preencher e seguida
        var todoText = document.createTextNode(item); //TextNode adiciona conteudo dentro da tag
        taskElement.appendChild(todoText); //acrescenta conteudo a tag li
        // função de remover itens
        var linkElement = document.createElement('a'); // criamos um elemnto que recebe uma tag tipo a, preenchida com o texto remove
        linkElement.setAttribute('href', '#'); //prenche requisitos da tag a
        var linkText = document.createTextNode('remove'); // adicionamos ao objeto da que possui a li taskElement
        linkElement.appendChild(linkText); //o conteudo 'remove' a tag 'a'
        var position = list.indexOf(item); // buscando a posição de qual elemento a ser removido e passando para a função
        linkElement.setAttribute('onclick', 'deleteTask(' + position + ')'); //onclick passamos a função deletask com valor numerico de position
        taskElement.appendChild(linkElement); //acrescenta link de remove a todos itens da lista

        elementList.appendChild(taskElement); //o elemento para o html
    }
}
// criamos uma função para pegar o click e envio do conteudo em input
// recuperamos o valor do input e em seguida colocamos ele em um array
// colocamos valor vazio para após pegar o valor limpar o campo de input
// e renderizamos a pagina novamente com a nova tarefa
function addTask(){
    var taskText = inputElement.value;
    list.push(taskText);
    inputElement.value = '';
    renderList();
    saveTasks();
}
function deleteTask(position){
    list.splice(position, 1); //apaga um elemento na posição vinda de position
    renderList();
    saveTasks();
}
// função para salvar em localStorage
function saveTasks(){
    localStorage.setItem('archive', JSON.stringify(list)); //nome do arquivo e a variavel a ser salva transformada em JSON
}
renderList();
// ao click em #app button executamos a função addTask
buttonElement.onclick = addTask;