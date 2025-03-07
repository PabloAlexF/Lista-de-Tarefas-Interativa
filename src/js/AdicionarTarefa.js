const btn_add = document.querySelector("#btnAdicionar");
const input_Tarefa = document.querySelector("#digitar_Tarefa");
const tarefas = document.querySelector("#section_tarefas");
tarefas.style.opacity = "100%"

const data = new Date()

btn_add.addEventListener("click", () => {
  if (input_Tarefa.value.trim() === "") {
    alert("A tarefa não pode estar vazia!");
  } else {

    let div_tarefas = document.createElement("div");
    div_tarefas.style.backgroundColor = "#D6FAEB";
    div_tarefas.style.padding = "15px";
    div_tarefas.style.borderRadius = "15px";
    div_tarefas.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";
    div_tarefas.style.textAlign = "center";
    div_tarefas.style.display = "inline-block";
    div_tarefas.style.whiteSpace = "normal";
    div_tarefas.style.maxWidth = "100%";
    div_tarefas.style.minWidth = "100px";
    div_tarefas.style.margin = "10px";

    let titulodiv = document.createElement("div");
    titulodiv.style.marginBottom = "1rem";

    let titulo_tarefa = document.createElement("input");
    titulo_tarefa.disabled = true;
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
    titulo_tarefa.style.borderBottom = "2px solid #004026";

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

    iconeEditar.addEventListener("click", () => {
      titulo_tarefa.disabled = false;
      titulo_tarefa.style.transition = "1s";
      titulo_tarefa.style.borderBottom = "2px solid gray";
    })


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

    iconeRemover.addEventListener("click", () => {
      tarefas.removeChild(div_tarefas)
    })

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






    //funcoes dos botoes da tarefa:

    iconeConcluir.addEventListener("click", () => {
      let data = new Date();
  
      let atividadeConcluida = {
          Data: `${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}/${data.getFullYear()}`,
          titulo_tarefa: titulo_tarefa.value,
          concluido: true
      };
  
      let sec_conc = document.querySelector("#sec_conc");
      let concluidas = document.querySelector("#concluidas");
  

      concluidas.style.backgroundColor = "#007b5e";
      concluidas.style.padding = "20px";
      concluidas.style.borderRadius = "10px";
      concluidas.style.width = "320px";
      concluidas.style.textAlign = "center";
      concluidas.style.color = "white";
      concluidas.style.border = "3px solid #33a397";
      concluidas.style.position = "absolute";
      concluidas.style.left = "95rem";
      concluidas.style.top = "2rem";
  
      sec_conc.appendChild(concluidas);
  
      if (!document.querySelector("#tituloConcluido")) {
          let titulo = document.createElement('h1');
          titulo.textContent = "CONCLUÍDO";
          titulo.id = "tituloConcluido"; 
          titulo.style.fontFamily = "Kodchasan";
          titulo.style.fontSize = "18px";
          titulo.style.fontWeight = "bold";
          titulo.style.marginBottom = "15px";
          concluidas.appendChild(titulo);
      }
  
      if (!document.querySelector("#btnRemoverTodas")) {
          let btn_removerTodas = document.createElement("button");
          btn_removerTodas.id = "btnRemoverTodas";
          btn_removerTodas.style.position = "absolute";
          btn_removerTodas.style.top = "10px";
          btn_removerTodas.style.right = "10px";
          btn_removerTodas.style.width = "25px";
          btn_removerTodas.style.height = "25px";
          btn_removerTodas.style.borderRadius = "50%";
          btn_removerTodas.style.border = "none";
          btn_removerTodas.style.backgroundColor = "red";
          btn_removerTodas.style.color = "white";
          btn_removerTodas.style.fontWeight = "bold";
          btn_removerTodas.style.cursor = "pointer";
          btn_removerTodas.style.display = "flex";
          btn_removerTodas.style.alignItems = "center";
          btn_removerTodas.style.justifyContent = "center";
          btn_removerTodas.textContent = "X";
  
          btn_removerTodas.addEventListener("click", () => {
              concluidas.innerHTML = ""; 
          });
  
          concluidas.appendChild(btn_removerTodas);
      }
  
      let divC = document.createElement("div");
      divC.style.backgroundColor = "#00a37e";
      divC.style.padding = "10px";
      divC.style.margin = "10px 0";
      divC.style.borderRadius = "10px";
      divC.style.display = "flex";
      divC.style.flexDirection = "column";
      divC.style.alignItems = "flexStart";
      divC.style.position = "relative";
  
      concluidas.appendChild(divC);
  
      let btn_removerConcluido = document.createElement("button");
      btn_removerConcluido.style.width = "25px";
      btn_removerConcluido.style.height = "25px";
      btn_removerConcluido.style.borderRadius = "50%";
      btn_removerConcluido.style.border = "none";
      btn_removerConcluido.style.backgroundColor = "red";
      btn_removerConcluido.style.color = "white";
      btn_removerConcluido.style.fontWeight = "bold";
      btn_removerConcluido.style.cursor = "pointer";
      btn_removerConcluido.style.display = "flex";
      btn_removerConcluido.style.alignItems = "center";
      btn_removerConcluido.style.justifyContent = "center";
      btn_removerConcluido.style.position = "absolute";
      btn_removerConcluido.style.left = "-10px";
      btn_removerConcluido.style.top = "-10px";
      btn_removerConcluido.textContent = "X";
  

      btn_removerConcluido.addEventListener("click", () => {
          divC.remove();
      });
  
      divC.appendChild(btn_removerConcluido);
  
      let descricao_atividade = document.createElement("input");
      descricao_atividade.disabled = true;
      descricao_atividade.value = atividadeConcluida.titulo_tarefa;
      descricao_atividade.style.background = "transparent";
      descricao_atividade.style.border = "none";
      descricao_atividade.style.color = "white";
      descricao_atividade.style.fontSize = "14px";
      descricao_atividade.style.width = "100%";
      descricao_atividade.style.outline = "none";
      descricao_atividade.style.fontWeight = "bold";
  
      divC.appendChild(descricao_atividade);
  
      let data_atividade = document.createElement("p");
      data_atividade.style.color = "white";
      data_atividade.style.fontSize = "12px";
      data_atividade.style.marginLeft = "10px";
      data_atividade.textContent = `Data da Conclusão: ${atividadeConcluida.Data}`;
  
      divC.appendChild(data_atividade);
  });
  
  

    input_Tarefa.value = "";
  }
});
