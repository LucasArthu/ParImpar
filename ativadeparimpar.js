let alunosPresentes = 32;

for (let aluno = 0; aluno <= alunosPresentes; aluno++){
    if(aluno == 0){
        console.log("zero " + aluno);
    }

    if (aluno % 2 == 0) {
        console.log ("par " + aluno);
    } else {
        console.log ("impar " + aluno);
    }
}
