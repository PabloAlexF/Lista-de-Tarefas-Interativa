const btn_add = document.querySelector("#btnAdicionar");
const input_Tarefa = document.querySelector("#digitar_Tarefa");
const tarefas = document.querySelector("#section_tarefas");

btn_add.addEventListener("click", () => {
    if (input_Tarefa.value.trim() === "") {
        alert("A tarefa não pode estar vazia!");
        return;
    }

    // Criando a div da tarefa
    let div_tarefas = document.createElement("div");
    div_tarefas.style.backgroundColor = "#D6FAEB";
    div_tarefas.style.padding = "15px";
    div_tarefas.style.borderRadius = "15px";
    div_tarefas.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";
    div_tarefas.style.textAlign = "center";
    div_tarefas.style.display = "inline-block";
    div_tarefas.style.whiteSpace = "normal";
    div_tarefas.style.wordWrap = "break-word";
    div_tarefas.style.maxWidth = "300px"; // Define um máximo para a largura
    div_tarefas.style.margin = "10px"; // Adiciona espaçamento entre as tarefas

    // Criando a div do título
    let titulodiv = document.createElement("div");
    titulodiv.style.marginBottom = "1rem";

    // Criando o input do título da tarefa
    let titulo_tarefa = document.createElement("input");
    titulo_tarefa.type = "text";
    titulo_tarefa.value = input_Tarefa.value; 
    titulo_tarefa.style.width = "100%";
    titulo_tarefa.style.fontSize = "1.5rem";
    titulo_tarefa.style.fontFamily = "Kodchasan";
    titulo_tarefa.style.fontWeight = "bold";
    titulo_tarefa.style.border = "none";
    titulo_tarefa.style.outline = "none";
    titulo_tarefa.style.background = "transparent";
    titulo_tarefa.style.textAlign = "center";
    titulo_tarefa.style.padding = "0.5rem";

    // Criando a div dos ícones
    let icones = document.createElement('div');
    icones.style.display = "flex";
    icones.style.justifyContent = "center";
    icones.style.gap = "10px";
    icones.style.marginTop = "10px";

    // Função para criar ícones
    function criarIcone(cor, imgSrc, altText) {
        let icone = document.createElement("span");
        icone.style.width = "40px";
        icone.style.height = "40px";
        icone.style.backgroundColor = cor;
        icone.style.borderRadius = "50%";
        icone.style.display = "flex";
        icone.style.alignItems = "center";
        icone.style.justifyContent = "center";
        icone.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.2)";
        icone.style.cursor = "pointer";

        let img = document.createElement("img");
        img.src = imgSrc;
        img.alt = altText;
        img.style.width = "60%";
        img.style.height = "60%";

        icone.appendChild(img);
        return icone;
    }

    // Criando e adicionando ícones
    icones.appendChild(criarIcone("#009688", "src/img/editar.png", "Editar"));
    icones.appendChild(criarIcone("#4CAF50", "src/img/favoritar.png", "Favoritar"));
    icones.appendChild(criarIcone("#E57373", "src/img/remover.png", "Remover"));
    icones.appendChild(criarIcone("#004D40", "src/img/concluido.png", "Concluir"));

    // Montando a estrutura
    titulodiv.appendChild(titulo_tarefa);
    div_tarefas.appendChild(titulodiv);
    div_tarefas.appendChild(icones);
    tarefas.appendChild(div_tarefas);

    // Limpa o input após adicionar a tarefa
    input_Tarefa.value = "";
});
