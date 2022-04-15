function sum(a,b,c,d) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function sum2(...args) {
    return args.reduce((accum,el)=> {
        return accum+el;
    });
}

Function.prototype.myBind = function(context,...args) {
    
    return (...newArgs) => {
        this.apply(context,args.concat(newArgs));
    }
}

// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true


//Curried Sum

function curriedSum(num) {
    let sum = 0;
    return function(arg) {
        num--;
        sum += arg;
        if (num === 0) {
            return sum;
        } else {
            return this;
        }
    }

}

Function.prototype.curry = function(numArgs) {
    let allArgs = [];
    let outerthis = this;
    return function _curry(...args) {
        if (args.length < numArgs) {
            numArgs -= args.length;
            allArgs = allArgs.concat(args);
            return _curry;
        }
        allArgs = allArgs.concat(args.slice(0,numArgs));
        numArgs = 0;
        console.log(allArgs);
        someArgs = [...allArgs];
        numArgs = allArgs.length;
        allArgs = [];
        return outerthis(...someArgs);
    }
}

// Function.prototype.curry = function(numArgs) {
//     let allArgs = [];
//     let that = this;
//     return function(...args) {
//         if (args.length >= numArgs) {
//             allArgs.push(args.slice(0,numArgs))
//             numArgs = 0;
//             return this(allArgs);
//         }
//         while (numArgs > 0) {
//             numArgs--;
//             if (args.length === 0) {
//                 r
//             }
//         }

//     }
// }