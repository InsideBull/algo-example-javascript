/**
 * 
 * Exemple Algorithme by Andry Radimison
 */

/**
 * Somme des premiers N entiers 
 * @param {Number} N 
 */
function sommeN(N) {
    var S = 0;
    for(var I = 1; I <= N; I++) {
        S += I; 
    }
    return S;
}

/**
 * Maximum d'un ensemble N d'entier
 * @param {Array} N 
 */
function maxValue(N) {
    var Max = N[0];
    for(var I = 1; I < N.length; i++) {
        var X = N[I];
        if(X > Max) {
            Max = X;
        }
    }
    return Max;
}

/**
 * Minimum d'un ensemble N d'entier
 * @param {Array} N 
 */
function minValue(N) {
    var Min = N[0];
    for(var I = 1; I < N.length; i++) {
        var X = N[I];
        if(X < Min) {
            Min = X;
        }
    }
    return Min;
}


/**
 * Division de deux nombres sans utiliser l'operateur de division
 * @param {Number} A 
 * @param {Number} B 
 */
function division(A, B){
    var Q = 0;
    var R = A;
    while(R > B) {
        Q = Q + 1;
        R = R - B;
    }
    console.log("Quotient: ", Q)
    console.log("Reste: ", R)
}

/**
 * Produit de deux nombres sans utiliser l'opérateur de multiplication
 * @param {Number} A 
 * @param {Number} B 
 */
function produit(A, B) {
    var P = 0;
    if (A == 0 && B == 0) {
        P = 0
    } else {
        P = 0;
    }
    for (var I = 1; I <= B; I++) {
        P = P + A;
    }
    console.log('Produit: ', P)
}

/**
 * Le calcul du produit de deux entiers en utilisant uniquement l'opération d'addition '+’.
 * @param {Number} A 
 * @param {Number} B 
 */
function produitPlus(A, B) {
    var P = 0;
    if(A === 0 && B === 0) {
        P = 0;
    } else if(A > B) {
        P = A;
        for(var I = 2; I <= B; I++) {
            P = P + A; 
        }
    } else {
        P = B;
        for(var I = 2; I <= A; I++) {
            P = P + B; 
        }
    } 
    console.log('Produit = ', P);   
}
/**
 * Détermination si A est divisible par B. Avec A et B des entiers positifs.
 * @param {Number} A 
 * @param {Number} B 
 */
function advid(A, B) {
    var R = A;
    while(R > 0) {
        R =  R - B;
    }
    if(R == 0) {
        console.log(A, "est divisible par ", B);
    } else {
        console.log(A, "n'est pas divisible par ", B);
    }
}

/**
 *  Déterminer tous les diviseurs d’un entier X donne.
 * @param {Number} X 
 */
function diviseurs(X) {
    var M = X/2;
    for(var I = 1; I <= M; I++) {
        if((X % I) == 0) {
            console.log(I);
        }
    }
    console.log(X);
}

/**
 * Déterminer si un nombre entier X est premier ou non.
 * @param {Number} X 
 */
function premier(X) {
    for(var I = 2; i < X; I++)
      if(X % I === 0) {
        console.log(X, "n'est pas premier");
        return false;
      }
      console.log(X, "est premier");
      return X > 1;
}

/**
 * Calcule la somme des chiffres qui composent un entier naturel N.
 * @param {Array} N 
 */
function SommeChiff(N) {
    var S = 0;
    for(var I = 1; I <= N.length(); I++) {
        S += N[I]; 
    }
    console.log('Somme: ', S);
    return S;
}
