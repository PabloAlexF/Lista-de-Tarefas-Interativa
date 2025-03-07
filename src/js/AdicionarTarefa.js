const btn_add = document.querySelector("#btnAdicionar");
const input_Tarefa = document.querySelector("#digitar_Tarefa");
const tarefas = document.querySelector("#section_tarefas");

let Tarefas = []

btn_add.addEventListener("click", () => {
  if (input_Tarefa.value.trim() === "") {
    alert("A tarefa não pode estar vazia!");
  } else {

    const date = new Date();
    let Tarefa = {
      ID: date, 
      Titlo: titulo_tarefa.value,
      Concluida: False,
      Favoritada: False
    }

    Tarefas.push(Tarefa);

    let div_tarefas = document.createElement("div");
    div_tarefas.style.backgroundColor = "#D6FAEB";
    div_tarefas.style.padding = "15px";
    div_tarefas.style.borderRadius = "15px";
    div_tarefas.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";
    div_tarefas.style.textAlign = "center";
    div_tarefas.style.display = "inline-block";
    div_tarefas.style.whiteSpace = "normal";
    div_tarefas.style.wordWrap = "break-word";
    div_tarefas.style.maxWidth = "100%";
    div_tarefas.style.minWidth = "100px";
    div_tarefas.style.margin = "10px";

    let titulodiv = document.createElement("div");
    titulodiv.style.marginBottom = "1rem";

    let titulo_tarefa = document.createElement("input");
    titulo_tarefa.type = "text";
    titulo_tarefa.value = input_Tarefa.value;
    titulo_tarefa.style.width = "auto";
    titulo_tarefa.style.fontSize = "1.5rem";
    titulo_tarefa.style.fontFamily = "Kodchasan";
    titulo_tarefa.style.fontWeight = "bold";
    titulo_tarefa.style.border = "none";
    titulo_tarefa.style.outline = "none";
    titulo_tarefa.style.background = "transparent";
    titulo_tarefa.style.textAlign = "center";
    titulo_tarefa.style.padding = "0.5rem";

    let icones = document.createElement("div");
    icones.style.display = "flex";
    icones.style.justifyContent = "center";
    icones.style.gap = "10px";
    icones.style.marginTop = "10px";

    let iconeEditar = document.createElement("span");
    iconeEditar.style.width = "40px";
    iconeEditar.style.height = "40px";
    iconeEditar.style.backgroundColor = "#009688";
    iconeEditar.style.borderRadius = "50%";
    iconeEditar.style.display = "flex";
    iconeEditar.style.alignItems = "center";
    iconeEditar.style.justifyContent = "center";
    iconeEditar.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.2)";
    iconeEditar.style.cursor = "pointer";

    let imgSalvar = document.createElement("img");
    imgSalvar.src = "src/img/editar.png";
    imgSalvar.alt = "Ícone de salvar";
    imgSalvar.style.width = "60%";
    imgSalvar.style.height = "60%";

    let iconeFavoritar = document.createElement("span");
    iconeFavoritar.style.width = "40px";
    iconeFavoritar.style.height = "40px";
    iconeFavoritar.style.backgroundColor = "#4CAF50";
    iconeFavoritar.style.borderRadius = "50%";
    iconeFavoritar.style.display = "flex";
    iconeFavoritar.style.alignItems = "center";
    iconeFavoritar.style.justifyContent = "center";
    iconeFavoritar.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.2)";
    iconeFavoritar.style.cursor = "pointer";

    let imgFavoritar = document.createElement("img");
    imgFavoritar.src = "src/img/favoritar.png";
    imgFavoritar.alt = "Ícone de salvar";
    imgFavoritar.style.width = "60%";
    imgFavoritar.style.height = "60%";

    let iconeRemover = document.createElement("span");
    iconeRemover.style.width = "40px";
    iconeRemover.style.height = "40px";
    iconeRemover.style.backgroundColor = "#E57373";
    iconeRemover.style.borderRadius = "50%";
    iconeRemover.style.display = "flex";
    iconeRemover.style.alignItems = "center";
    iconeRemover.style.justifyContent = "center";
    iconeRemover.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.2)";
    iconeRemover.style.cursor = "pointer";

    let imgRemover = document.createElement("img");
    imgRemover.src = "src/img/remover.png";
    imgRemover.alt = "Ícone de salvar";
    imgRemover.style.width = "60%";
    imgRemover.style.height = "60%";

    let iconeConcluir = document.createElement("span");
    iconeConcluir.style.width = "40px";
    iconeConcluir.style.height = "40px";
    iconeConcluir.style.backgroundColor = "#004D40";
    iconeConcluir.style.borderRadius = "50%";
    iconeConcluir.style.display = "flex";
    iconeConcluir.style.alignItems = "center";
    iconeConcluir.style.justifyContent = "center";
    iconeConcluir.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.2)";
    iconeConcluir.style.cursor = "pointer";

    let imgConcluir = document.createElement("img");
    imgConcluir.src = "src/img/concluido.png";
    imgConcluir.alt = "Ícone de salvar";
    imgConcluir.style.width = "60%";
    imgConcluir.style.height = "60%";

    titulodiv.appendChild(titulo_tarefa);
    div_tarefas.appendChild(titulodiv);
    tarefas.appendChild(div_tarefas);

    div_tarefas.appendChild(icones);
    icones.appendChild(iconeEditar);
    iconeEditar.appendChild(imgSalvar);
    icones.appendChild(iconeFavoritar);
    iconeFavoritar.appendChild(imgFavoritar);
    icones.appendChild(iconeRemover);
    iconeRemover.appendChild(imgRemover);
    icones.appendChild(iconeConcluir);
    iconeConcluir.appendChild(imgConcluir);

    input_Tarefa.value = "";
  }
});
