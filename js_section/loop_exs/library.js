//Function to generate a random no. between 2 numbers
/* Math.random() * (vf - vi) + vi (Fórmula para nums entre intervalo de valores)
-> Math.random() * (50 - 30) + 30 */

function randomIntBetweenNumbers(vi=0, vf=1){
    let random = Math.round(Math.random() * (vf - vi) + vi);
    return random;
}
