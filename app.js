                let numeroMaximoIntentos = 100; 
                let numeroSecreto = Math.floor(Math.random()*numeroMaximoIntentos)+1;
                let numeroDeUsuario= 0;
                let intentos = 1;
               // let palabraVeces = `vez`;
               maximoIntentos = 6;
               
                while(numeroDeUsuario!= numeroSecreto) {
                let numeroDeUsuario = parseInt(prompt(`puedes indicarme un numero entre 1 y ${numeroMaximoIntentos} por favor`));

                console.log(typeof(numeroDeUsuario));

                if(numeroDeUsuario == numeroSecreto) {
                    //acertamos
                    alert(`acertaste, el número es: ${numeroDeUsuario}. lo hiciste ${intentos}${intentos == 1 ? 'vez' : 'veces'}`);
                } else {
                    if (numeroDeUsuario> numeroSecreto) {
                        alert(`el numero secreto es menor`);
                    } else {
                        alert(`el numero secreto es mayor`);
                    }
                    //intentos = intentos + 1;
                    //intentos += 1;
                    intentos++; 
                    //palabraVeces = `veces`; 
                    if (intentos > maximoIntentos) {
                        alert(`llegaste al maximo de ${maximoIntentos} intentos`);
                        break;
                    }
                    // no acertamos
                }
            }