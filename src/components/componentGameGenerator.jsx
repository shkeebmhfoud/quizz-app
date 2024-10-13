import React from "react";
import '../App.css'
class GameComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={"game-component " + this.props.addClassName} id={this.props.id}>
                <div className="face back center-elements">
                    {this.props.value}
                </div>
                <div className="face front">

                </div>
            </div>
        )
    }
    componentDidMount() {
        let i = 0
        let x = setInterval(() => {
            if (i > 23) {
                clearInterval(x)
                return
            }
            let ele = document.getElementById('m' + i)
            ele.style.animation = 'rotate 1s ease alternate 2'
            ele.addEventListener('click',clicked)
            i++
        }, 500)
    }
}
let components = 'abcdefghijkl'.split('')
components = [...components, ...components]
components = components.map((e, ind) => <GameComponent value={e.toUpperCase()} id={'m' + ind} addClassName={e} />)
function shuffling(arr) {
    let i = arr.length
    while (i != 0) {
        i--
        let randInd = Math.floor(Math.random() * i);
        [arr[i], arr[randInd]] = [arr[randInd], arr[i]]
    }
}
let aux,elementsClicked_1,elementsClicked_2,click=0,successClicked=[]
function clicked(){
    if(click==1){
        elementsClicked_2 = this.classList[this.classList.length - 1]
        console.log(elementsClicked_1,elementsClicked_2)
        // this.style.animation = 'rotate-1 1s ease forwards'
        this.style.transform = 'rotateY(180deg) translateX(-100%)'
        if (elementsClicked_1==elementsClicked_2){
            document.getElementById(this.id).removeEventListener('click',clicked)
            this.children[0].style.boxShadow = '0 0 0 2px green'
            document.getElementById(aux).children[0].style.boxShadow = '0 0 0 2px green'
            successClicked=[...successClicked,this.id,aux]
            if (successClicked.length==24){
                document.getElementsByClassName('game-container')[0].style.animation='animate-2 1s forwards ease'
                setTimeout(()=>{
                    document.getElementsByClassName('game-container')[0].style.display = 'none'
                    document.getElementsByClassName('end-game')[0].style.display='grid'
                    setTimeout(()=>{
                        document.getElementsByClassName('end-game')[0].style.animation='animate-1 1s forwards ease'
                        setTimeout(()=>{
                            window.location.reload()
                        },2000)
                    },1000)
                },1000)
            }
        }else{
            for (let i=0;i<24;i++){
                document.getElementById('m'+i).removeEventListener('click',clicked)
            }
           setTimeout(()=>{
               this.style.transform = 'rotateY(0deg) translateX(0%)'
               document.getElementById(aux).style.transform = 'rotateY(0deg) translateX(0%)'
               for (let i = 0; i < 24; i++) {
                   if (successClicked.some(e => e=='m'+i)){
                    continue
                   }
                   document.getElementById('m' + i).addEventListener('click', clicked)
               }
           },1000)
        }
        click=0
        return
    }
    elementsClicked_1=this.classList[this.classList.length-1]
    document.getElementById(this.id).removeEventListener('click',clicked)
    aux=this.id
    // this.style.animation='rotate-1 1s ease forwards'
    this.style.transform = 'rotateY(180deg) translateX(-100%)'
    click++
}
shuffling(components)

export default components;
