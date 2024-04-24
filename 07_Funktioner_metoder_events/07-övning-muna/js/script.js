// scoPe exm

function outerFunc() {
    let num = 10;
    function innerFunc(){
        console.log (num);
    }
    innerFunc();
    return innerFunc;
}
// outerFunc();
let  closureEx = outerFunc();
closureEx();
